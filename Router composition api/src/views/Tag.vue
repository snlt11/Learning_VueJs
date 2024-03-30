<template>
  <h1>Tag {{ tag }}</h1>
  <div v-if="errors">
    {{ errors }}
  </div>
  <div v-if="posts.length" class="layout">
    <div>
      {{ filterPosts }}
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else>
    <h2>loading..</h2>
  </div>
</template>

<script>
import { computed } from "vue";
import getPosts from "../composables/getPosts.js";
export default {
  props: ["tag"],
  setup(props) {
    let { posts, errors, load } = getPosts();
    load();
    let filterPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags?.includes(props.tag);
      });
    });
    return { posts, errors, filterPosts };
  },
};
</script>

<style></style>
