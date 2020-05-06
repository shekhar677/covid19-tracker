<template>
  <div>
    <div v-if="loaded">
      <div class="bg-white dark-mode:bg-black-lighter rounded-card shadow-sm p-2 sm:p-4 md:p-10 md:pb-5 py-6 md:m-3 mt-6">
        <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p class="text-black dark-mode:text-grey-50 sm:text-base md:text-xl font-semibold mb-3 sm:mb-0">Cases Timeline</p>
          <div class="flex flex-wrap items-end sm:mr-5">
            <div class="flex items-center mr-3">
              <span class="bg-brown w-4 h-2 rounded-full mr-1"></span>
              <p class="text-xs2 text-black dark-mode:text-grey-50">Confirmed</p>
            </div>
            <div class="flex items-center mr-3">
              <span class="bg-pink w-4 h-2 rounded-full mr-1"></span>
              <p class="text-xs2 text-black dark-mode:text-grey-50">Active</p>
            </div>
            <div class="flex items-center mr-3">
              <span class="bg-green w-4 h-2 rounded-full mr-1"></span>
              <p class="text-xs2 text-black dark-mode:text-grey-50">Recovered</p>
            </div>
            <div class="flex items-center">
              <span class="bg-orange w-4 h-2 rounded-full mr-1"></span>
              <p class="text-xs2 text-black dark-mode:text-grey-50">Deaths</p>
            </div>
          </div>
        </div>
        <line-chart :chartdata="chartData" :options="options"></line-chart>
      </div>
    </div>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import lineChart from '~/components/charts/line-chart'
import spinner from '~/components/spinner'

export default {
  props: ['countryCode'],
  components: {
    lineChart,
    spinner
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      date: [],
      totalconfirmed: [],
      totaldeceased: [],
      totalrecovered: [],
      totalactive: [],
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
          // yAlign: 'left',
          intersect: false,
          mode: 'index',
          backgroundColor: '#18253C',
          position: 'average',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          bodyFontSize: 10,
          xPadding: 10,
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              let colors = ['#F57B51', '#FF5CA8', '#58DFB6', '#FF5C5C'];
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
        data: this.totalconfirmed.slice(to, from),
        fill: false,
        borderColor: '#F57B51',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#F57B51',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 3
      });
      this.chartData.datasets.push({
        label: 'Active',
        data: this.totalactive.slice(to, from),
        fill: false,
        borderColor: '#FF5CA8',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#FF5CA8',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 3
      });
      this.chartData.datasets.push({
        label: 'Recovered',
        data: this.totalrecovered.slice(to, from),
        fill: false,
        borderColor: '#58DFB6',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#58DFB6',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 3
      });
      this.chartData.datasets.push({
        label: 'Deaths',
        data: this.totaldeceased.slice(to, from),
        fill: false,
        borderColor: '#FF5C5C',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#FF5C5C',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 3
      });
    }
  },
  mounted() {
    this.$axios.get(`https://corona-api.com/countries/${this.countryCode}`)
      .then(res => {
        this.date = []
        this.totalconfirmed = []
        this.totaldeceased = []
        this.totalrecovered = []
        this.totalactive = []

        let data = res.data.data.timeline;
        data.map((d, i) => {
          this.date.push(this.getMonthDate(new Date(d.date)));
          this.totalconfirmed.push(d.confirmed);
          this.totaldeceased.push(d.deaths);
          this.totalrecovered.push(d.recovered);
          this.totalactive.push(d.active);
        });

        this.date.reverse();
        this.totalconfirmed.reverse();
        this.totaldeceased.reverse();
        this.totalrecovered.reverse();
        this.totalactive.reverse();
        this.xTicks(parseInt((this.date.length / 100)*20), this.date.length);
        this.loaded = true
      })
      .catch(err => {
        this.loaded = false
      });
  }
}
</script>

<style>

</style>