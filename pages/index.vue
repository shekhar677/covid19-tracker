<script>
export default {
  asyncData({ redirect, store }) {
    redirect(`/${store.getters.currentFetch}`);
  }
}
</script>

<style>

</style>