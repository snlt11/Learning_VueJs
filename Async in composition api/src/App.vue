<template>
  <!-- <Navbar></Navbar> -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
// import Navbar from "./components/Navbar.vue";

export default {
  // components: { Navbar },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
