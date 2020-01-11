<template>
<div id="app">
  <dogForm />
</div>
</template>
<script>
import dogForm from "@/views/dogForm";

export default {
  name: "app",
  components: {
    dogForm
  }
};
</script>
<style scoped>
#app {
  display: inline;
}
</style>
