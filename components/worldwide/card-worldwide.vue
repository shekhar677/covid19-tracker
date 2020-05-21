<template>
  <div>
    <transition-group name="slide-up" tag="div" v-if="data" class="sm:flex flex-wrap lg:flex-no-wrap justify-around">
      <card v-for="(d) in data" :key="d.type" :cardData="d"></card>
    </transition-group>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import card from '~/components/card';
import spinner from '~/components/spinner';

export default {
  components: {
    card,
    spinner
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    formatNumber(num) {
      let number = num.toString();
      return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    getCardData() {
      this.$axios.get('https://corona-api.com/countries')
        .then(res => {
          let confirmed = 0;
          let active = 0;
          let recovered = 0;
          let critical = 0;
          let deaths = 0;

          res.data.data.forEach(d => {
            if (d.code !== 'IN' || d.code !== 'in') {
              confirmed += d.latest_data.confirmed;
              active += parseInt(d.latest_data.confirmed - d.latest_data.recovered - d.latest_data.deaths);
              recovered += d.latest_data.recovered;
              critical += d.latest_data.critical;
              deaths += d.latest_data.deaths;
            }
          });
          this.data.push(
            { type: 'confirmed', value: this.formatNumber(confirmed), deltaValue: 0 },
            { type: 'active', value: this.formatNumber(active), deltaValue: 0 },
            { type: 'recovered', value: this.formatNumber(recovered), deltaValue: 0 },
            { type: 'critical', value: this.formatNumber(critical), deltaValue: 0 },
            { type: 'deaths', value: this.formatNumber(deaths), deltaValue: 0 }
          );
        })
        .catch(err => {
          this.data = null
        });
    }
  },
  mounted() {
    this.getCardData();
  }
}
</script>

<style>

</style>