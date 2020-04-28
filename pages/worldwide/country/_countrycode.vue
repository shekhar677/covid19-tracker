<template>
  <div class="p-3 sm:py-8 sm:px-6 md:px-12 min-h-screen">
    <div class="mb-6 text-black flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <p class="text-xs2 mb-5 sm:mb-0 sm:text-xs font-semibold select-none">
        <n-link to="/"><span class="mr-1 cursor-pointer hover:underline text-black">Home</span></n-link>
        <span>/</span>
        <span class="ml-1 text-black">{{ countryName }}</span>
      </p>
      <div>
        selection option
      </div>
    </div>
    <div class="mb-8">
      <h1 class="text-black text-2xl sm:text-4xl font-semibold">{{ countryName }}</h1>
      <p class="text-black text-xs2 sm:text-xs">Last updated {{ fromNow(updated_at) }}</p>
    </div>
    <div class="mb-8">
      <card-country :countryCode="$nuxt.$route.params.countrycode"></card-country>
    </div>
    <country-timeline-worldwide :countryCode="$nuxt.$route.params.countrycode"></country-timeline-worldwide>
    <country-daily-timeline-worldwide :countryCode="$nuxt.$route.params.countrycode"></country-daily-timeline-worldwide>
  </div>
</template>

<script>
import cardCountry from '~/components/worldwide/card-country-worldwide'
import countryTimelineWorldwide from '~/components/worldwide/country-timeline-worldwide'
import countryDailyTimelineWorldwide from '~/components/worldwide/country-daily-timeline-worldwide'
import moment from 'moment'

export default {
  components: {
    cardCountry,
    countryTimelineWorldwide,
    countryDailyTimelineWorldwide
  },
  asyncData({ route, $axios }) {
    return $axios.get(`https://corona-api.com/countries/${route.params.countrycode}`)
      .then(res => {
        return { countryName: res.data.data.name, updated_at: res.data.data.updated_at }
      })
      .catch(err => {
        return { countryName: route.params.countrycode, updated_at: '' }
      })
  },
  methods: {
    fromNow(date) {
      return moment(date).fromNow()
    }
  }
}
</script>

<style>

</style>