<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="p-4 bg-white rounded-lg shadow-md sm:w-64 flex flex-col items-center">
      <h1 class="text-black text-sm mb-4">The page you are looking for does not exists</h1>
      <n-link to="/">
        <span class="btn mr-2 cursor-pointer select-none py-2 px-5 font-normal shadow-md rounded-full bg-black text-white w-28 text-xs text-center">Home Page</span>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>