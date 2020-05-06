<template>
  <div class="relative">
    <select @change="updated" v-model="selected" class="block appearance-none cursor-pointer w-full bg-white dark-mode:bg-black-lighter text-black dark-mode:text-grey-50 text-xs sm:text-sm py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white dark-mode:focus:bg-black-accent">
      <option class="bg-white dark-mode:bg-black-lighter text-sm" v-for="state in states" :key="state.statecode" :value="state">{{ state.state }}</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-grey-200 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['states', 'selectedState'],
  data() {
    return {
      selected: this.selectedState
    }
  },
  methods: {
    updated() {
      this.$router.push(`/india/state/${this.selected.statecode}`)
    }
  }
}
</script>

<style>

</style>