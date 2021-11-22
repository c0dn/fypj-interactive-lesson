<template>
  <div
      class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
    <button type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
      Next
      <font-awesome-icon class="ml-3 -mr-1 h-5 w-5" icon="chevron-right"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "NextButton"
}
</script>

<style scoped>

</style>