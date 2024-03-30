<template>
  <h1>Tag cloud</h1>
  <div>
    {{ uniqueTags }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        tags.value.push(tag);
      });
    });
    let uniqueTags = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });
    return { uniqueTags };
  },
};
</script>

<style></style>
