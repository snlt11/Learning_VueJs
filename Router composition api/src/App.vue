<template>
  <Navbar></Navbar>
  <RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  components: { Navbar },
};
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
