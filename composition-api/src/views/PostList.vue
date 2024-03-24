<template>
  <h3>Post Lists</h3>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => {
        console.log("mounting");
    });
    onUnmounted(()=>{
        console.log("unmounting");
    });
    onUpdated(()=>{
        console.log("updated");
    })
  },
};
</script>

<style></style>
