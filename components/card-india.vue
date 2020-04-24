<template>
  <div>
    <div v-if="data" class="flex items-start justify-around">
      <card v-for="(d, i) in data" :key="i" :cardData="d"></card>
    </div>
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
    formatNumber(number) {
      number=number.toString();
      var lastThree = number.substring(number.length-3);
      var otherNumbers = number.substring(0,number.length-3);
      if(otherNumbers != '')
        lastThree = ',' + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      return res
    },
    getCardData() {
      this.$axios.get('https://api.covid19india.org/data.json')
        .then(res => {
          let d = res.data.statewise[0];
          this.data.push(
            { type: 'confirmed', value: this.formatNumber(d.confirmed), deltaValue: this.formatNumber(d.deltaconfirmed) },
            { type: 'active', value: this.formatNumber(d.active), deltaValue: 0 },
            { type: 'recovered', value: this.formatNumber(d.recovered), deltaValue: this.formatNumber(d.deltarecovered) },
            { type: 'deaths', value: this.formatNumber(d.deaths), deltaValue: this.formatNumber(d.deltadeaths) }
          )
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