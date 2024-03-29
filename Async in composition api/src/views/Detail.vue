<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getSinglePost from "../composables/getSinglePost.js";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getSinglePost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
