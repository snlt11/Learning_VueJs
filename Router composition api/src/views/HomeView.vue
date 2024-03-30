<template>
  <div class="home">
    <div v-if="errors">{{ errors }}</div>

    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostList :posts="posts"></PostList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>

    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import { ref } from "vue";
import getPosts from "../composables/getPosts.js";

export default {
  components: {
    TagCloud,
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
.layout {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
}
</style>
