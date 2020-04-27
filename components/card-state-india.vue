<template>
  <div>
    <transition-group name="slide-up" tag="div" class="sm:flex flex-wrap lg:flex-no-wrap items-start justify-around">
      <card v-for="(d) in data" :key="d.type" :cardData="d"></card>
    </transition-group>
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
  props: ['state'],
  data() {
    return {
      data: [],
      updatedAt: null
    }
  },
  methods: {
    getCardData() {
      this.$axios.get('https://api.covid19india.org/data.json')
        .then(res => {
          let d = res.data.statewise;
          let state = this.state;
          d = d.filter(data => data.statecode == state.toUpperCase());
          this.updatedAt = d[0].lastupdatedtime;
          this.data.push(
            { type: 'confirmed', value: formatNumber(d[0].confirmed), deltaValue: formatNumber(d[0].deltaconfirmed) },
            { type: 'active', value: formatNumber(d[0].active), deltaValue: 0 },
            { type: 'recovered', value: formatNumber(d[0].recovered), deltaValue: formatNumber(d[0].deltarecovered) },
            { type: 'deaths', value: formatNumber(d[0].deaths), deltaValue: formatNumber(d[0].deltadeaths) }
          )
          this.$emit('updatedAt', this.updatedAt);
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