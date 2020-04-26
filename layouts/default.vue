<template>
  <div class="min-h-screen">
    <nav-drawer @drawerEvent="drawerAction"></nav-drawer>
    <div class="content" :class="{ 'sm:ml-48': drawer, 'sm:ml-20': !drawer }">
      <navbar></navbar>
      <div class="main bg-grey relative pb-16 overflow-x-hidden">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import navDrawer from '~/components/navigation-drawer'
import navbar from '~/components/navbar'

export default {
  components: {
    navDrawer,
    navbar
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    drawerAction(status) {
      this.drawer = status
    }
  }
}
</script>

<style>
html {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.content {
  transition: margin 0.3s ease;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
