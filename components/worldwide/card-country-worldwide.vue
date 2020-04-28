<template>
  <div>
    <transition-group name="slide-up" tag="div" v-if="data" class="sm:flex flex-wrap lg:flex-no-wrap items-start justify-around">
      <card v-for="(d) in data" :key="d.type" :cardData="d"></card>
    </transition-group>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import card from '~/components/card';
import spinner from '~/components/spinner';

export default {
  props: ['countryCode'],
  components: {
    card,
    spinner
  },
  data() {
    return {
      data: [],
    }
  },
  methods: {
    formatNumber(num) {
      let number = num.toString();
      return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    getCardData() {
      this.$axios.get(`https://corona-api.com/countries/${this.countryCode}`)
        .then(res => {
          this.data.push(
            { type: 'confirmed', value: this.formatNumber(res.data.data.latest_data.confirmed), deltaValue: 0 },
            { type: 'active', value: this.formatNumber(res.data.data.latest_data.confirmed - res.data.data.latest_data.recovered - res.data.data.latest_data.deaths), deltaValue: 0 },
            { type: 'recovered', value: this.formatNumber(res.data.data.latest_data.recovered), deltaValue: 0 },
            { type: 'critical', value: this.formatNumber(res.data.data.latest_data.critical), deltaValue: 0 },
            { type: 'deaths', value: this.formatNumber(res.data.data.latest_data.deaths), deltaValue: 0 }
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