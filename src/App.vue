<script>
export default {
  mounted() {
    this.$router.afterEach(() => {
      const main = document.getElementById('main-box')
      if (main) {
        main.scrollTop = 0
      }
    })
  }
}
</script>

<template>
  <router-view />
</template>
