<template>
  <div v-if="isLoading" class="dialog">
    <div>
      <p>Please wait...</p>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style>
  .loader {
    width: 100%;
    height: 4px;
    background: green;
  }
</style>