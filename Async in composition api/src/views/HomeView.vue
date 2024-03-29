<template>
  <div class="home">
    <div v-if="errors">{{ errors }}</div>

    <div v-if="posts.length > 0">
      <PostList :posts="posts"></PostList>
    </div>

    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import { ref } from "vue";
import getPosts from "../composables/getPosts.js";

export default {
  components: {
    Spinner,
    PostList,
  },
  setup() {
    let { posts, errors, load } = getPosts();

    load();
    return { posts, errors };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
