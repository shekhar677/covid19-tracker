<template>
  <div class="relative">
    <select @change="updated" v-model="selected" class="block appearance-none cursor-pointer w-full bg-white border border-grey-200 text-black text-xs sm:text-sm py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white">
      <option class="bg-white text-sm" v-for="district in districts" :key="district" :value="district">{{ district }}</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-grey-200 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['districts', 'selectedDistrict', 'state'],
  data() {
    return {
      selected: this.selectedDistrict
    }
  },
  methods: {
    updated() {
      this.$router.push(`/india/${this.state}/${this.selected}`)
    }
  }
}
</script>

<style>

</style>