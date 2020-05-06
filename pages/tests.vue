<template>
  <div class="min-h-screen p-16">
    <!-- <div v-for="(d, i) in state" :key="i" class="mb-6 bg-grey-100 p-2">
      state: {{d.state}}<br>
      count: {{d.count}}
    </div> -->
    <div v-for="(d, i) in data" :key="i" class="mb-6 bg-grey-100 p-2">
      state: {{d.state}}<br>
      positive: {{d.positive}}<br>
      negative: {{d.negative}}<br>
      totaltested: {{d.totaltested}}<br>
      updatedon: {{d.updatedon}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      state: ''
    }
  },
  mounted() {
    this.$axios.get('https://api.covid19india.org/state_test_data.json')
      .then(res => {
        this.data = res.data.states_tested_data;
        var outObject = res.data.states_tested_data.reduce(function(a, e) {
          // GROUP BY estimated key (estKey), well, may be a just plain key
          // a -- Accumulator result object
          // e -- sequentally checked Element, the Element that is tested just at this itaration

          // new grouping name may be calculated, but must be based on real value of real field
          let estKey = (e['state']); 

          (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
          return a;
        }, {});

        this.data = outObject;
      })
  }
}
</script>

<style>

</style>