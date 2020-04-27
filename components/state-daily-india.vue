<template>
  <div>
    <div v-if="loaded">
      <div class="bg-white rounded-card shadow-sm p-2 sm:p-4 md:p-10 md:pb-5 py-6 md:m-3 mt-6">
        <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p class="text-black sm:text-base md:text-xl font-semibold mb-3 sm:mb-0">Daily Confirmed Cases</p>
          <div class="flex items-end sm:mr-5">
            <div class="flex items-center">
              <span class="bg-brown-lighter w-4 h-2 rounded-full mr-1"></span>
              <p class="text-xs2 text-black">Confirmed</p>
            </div>
          </div>
        </div>
        <bar-chart ref="barChart" :chartdata="chartData" :options="options"></bar-chart>
      </div>
    </div>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import barChart from '~/components/charts/bar-chart'
import spinner from '~/components/spinner'
import { parseStateTimeseries } from '~/helper/helper-functions'

export default {
  components: {
    barChart,
    spinner
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      date: [],
      dailyconfirmed: [],
      // dailydeceased: [],
      // dailyrecovered: [],
      // dailyactive: [],
      // totalconfirmed: [],
      // totaldeceased: [],
      // totalrecovered: [],
      // totalactive: [],
      chartData: {
        labels: [],
        datasets: []
      },
      options: {
        fill: false,
        hover: {
          mode: 'index',
          intersect: false
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          backgroundColor: '#18253C',
          position: 'nearest',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          bodyFontSize: 10,
          xPadding: 10,
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              let colors = ['#FFC6B3'];
              let style = {
                borderColor: '#18253C',
                backgroundColor: colors[tooltipItem.datasetIndex]
              }
              return style
            },
          },
          enabled: false,
          custom: function(tooltipModel) {
            // Tooltip Element
            var tooltipEl = document.getElementById('chartjs-tooltip');

            // Create element on first render
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.id = 'chartjs-tooltip';
              tooltipEl.innerHTML = '<table></table>';
              document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add('no-transform');
            }

            function getBody(bodyItem) {
              return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
              var titleLines = tooltipModel.title || [];
              var bodyLines = tooltipModel.body.map(getBody);

              var innerHtml = '<thead>';

              titleLines.forEach(function(title) {
                innerHtml += '<tr><th><span style="display:flex;justify-content:flex-start;margin-left:10px">' + title + '<span></th></tr>';
              });
              innerHtml += '</thead><tbody>';

              bodyLines.forEach(function(body, i) {
                var colors = tooltipModel.labelColors[i]
                var style = 'background-color:' + colors.backgroundColor;
                style += '; border-color:' + colors.backgroundColor;
                style += '; border-radius: 50%';
                style += '; width: 7px';
                style += '; height: 7px';
                style += '; margin-right: 8px';
                var span = '<span style="' + style + '"></span>';
                var spanBody = '<span>'+body+'</span>'
                innerHtml += '<tr><td><div style="display:flex;align-items:center;">' + span + spanBody + '</div></td></tr>';
              });
              innerHtml += '</tbody>';

              var tableRoot = tooltipEl.querySelector('table');
              tableRoot.innerHTML = innerHtml;
            }

            // `this` will be the overall tooltip
            var position = this._chart.canvas.getBoundingClientRect();

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX -70 + 'px';
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY +10+ 'px';
            tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.backgroundColor = '#fff'
            tooltipEl.style.boxShadow = '2px 1px 6px 0px #00000026';
            tooltipEl.style.borderRadius = '0.4rem';
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 7,
              padding: 10,
              stepSize: 1,
              fontSize: 9,
            }
          }],
          xAxes: [{
            ticks: {
              display: true,
              maxTicksLimit: 7,
              maxRotation: 0,
              minRotation: 0,
              lineHeight: '4',
              padding: 0,
              fontSize: 9
            },
            gridLines: {
              zeroLineColor: "transparent",
              display: false
            }
          }]
        },
        legend: {
          display: false
        }
      },
    }
  },
  methods: {
    getMonthDate(date) {
      var dt = date;
      let formatDate;
      // let m = (dt.getMonth() + 1).toString().padStart(2, "0");
      let m = dt.toLocaleString('default', { month: 'short' });
      let d = dt.getDate().toString().padStart(2, "0");
      return m+'-'+d;
    },
    xTicks(to, from) {
      this.chartData.labels = [];
      this.chartData.labels = this.date.slice(to, from);
      this.chartData.datasets = [];
      this.chartData.datasets.push({
        label: 'Confirmed',
        data: this.dailyconfirmed.slice(to, from),
        fill: true,
        backgroundColor: '#FFC6B3',
        hoverBackgroundColor: '#F57B51'
      });
    }
  },
  mounted() {
    this.loaded = false;

    this.$axios.get('https://api.covid19india.org/states_daily.json')
      .then(res => {
        this.date = []
        this.dailyconfirmed = []
        // this.dailydeceased = []
        // this.dailyrecovered = []
        // this.totalconfirmed = []
        // this.totaldeceased = []
        // this.totalrecovered = []
        let d = parseStateTimeseries(res.data);
        let stCode = $nuxt.$route.params.statecode
        stCode = stCode.toUpperCase();
        let data = d[stCode];
        data.map((d, i) => {
          this.date.push(this.getMonthDate(new Date(d.date)));
          this.dailyconfirmed.push(d.dailyconfirmed);
          // this.dailydeceased.push(d.dailydeceased);
          // this.dailyrecovered.push(d.dailyrecovered);
          // this.dailyactive.push(d.dailyactive);
          // this.totalconfirmed.push(d.totalconfirmed);
          // this.totaldeceased.push(d.totaldeceased);
          // this.totalrecovered.push(d.totalrecovered);
          // this.totalactive.push(d.totalactive);
        });
        this.xTicks(parseInt(this.date.length / 2), this.date.length);
        this.loaded = true
      })
      .catch(err => {
        this.loaded = false
      })
  }
}
</script>

<style>

</style>