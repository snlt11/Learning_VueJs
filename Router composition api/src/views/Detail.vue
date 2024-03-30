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
import { useRoute } from "vue-router";
import Spinner from "../components/Spinner.vue";
import getSinglePost from "../composables/getSinglePost.js";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route = useRoute();
    // console.log(route.params.id);
    let { post, error, load } = getSinglePost(route.params.id);
    load();
    return { post, error };
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
