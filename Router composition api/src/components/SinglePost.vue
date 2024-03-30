<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ cutBody }}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">{{
        tag
       }}</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    let cutBody = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { cutBody };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 15px;
  font-size: 14px;
}
</style>
