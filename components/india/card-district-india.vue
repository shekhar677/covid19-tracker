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
  props: ['district', 'state'],
  data() {
    return {
      data: [],
      updatedAt: null
    }
  },
  methods: {
    getCardData() {
      this.$axios.get('https://api.covid19india.org/v2/state_district_wise.json')
        .then(res => {
          let data= res.data;
          let state = this.state;
          let district = this.district;
          let manipulatedData;

          data.forEach(d => {
            if (d.state.toLowerCase() == state.toLowerCase()) {
              d.districtData.forEach(dis => {
                if (dis.district.toLowerCase() == district.toLowerCase()) {
                  manipulatedData = dis
                }
              })
            }
          })

          this.data.push(
            { type: 'confirmed', value: formatNumber(manipulatedData.confirmed), deltaValue: formatNumber(manipulatedData.delta.confirmed) },
            { type: 'active', value: formatNumber(manipulatedData.active), deltaValue: 0 },
            { type: 'recovered', value: formatNumber(manipulatedData.recovered), deltaValue: formatNumber(manipulatedData.delta.recovered) },
            { type: 'deaths', value: formatNumber(manipulatedData.deceased), deltaValue: formatNumber(manipulatedData.delta.deceased) }
          )
        })
        .catch(err => {
          this.data = []
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