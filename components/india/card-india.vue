<template>
  <div>
    <transition-group name="slide-up" tag="div" v-if="data.length" class="sm:flex flex-wrap lg:flex-no-wrap justify-around">
      <card v-for="(d) in data" :key="d.type" :cardData="d"></card>
    </transition-group>
    <spinner v-else class="m-3"></spinner>
  </div>
</template>

<script>
import card from '~/components/card';
import spinner from '~/components/spinner';
import { formatNumber } from '~/helper/helper-functions'

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
    getCardData() {
      this.$axios.get('https://api.covid19india.org/data.json')
        .then(res => {
          let d = res.data.statewise[0];
          this.data.push(
            { type: 'confirmed', value: formatNumber(d.confirmed), deltaValue: formatNumber(d.deltaconfirmed) },
            { type: 'active', value: formatNumber(d.active), deltaValue: 0 },
            { type: 'recovered', value: formatNumber(d.recovered), deltaValue: formatNumber(d.deltarecovered) },
            { type: 'deaths', value: formatNumber(d.deaths), deltaValue: formatNumber(d.deltadeaths) }
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