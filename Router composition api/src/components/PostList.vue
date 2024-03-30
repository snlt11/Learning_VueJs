<template>
  <h3>Post Lists</h3>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {},
};
</script>

<style></style>
