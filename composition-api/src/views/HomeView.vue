<template>
  <h1>Person One</h1>
  <!-- <p>{{ personOne.name }}</p>
  <p>{{ personOne.age }}</p>
  <button @click="changeOne">Change</button>
  <h1>Person Two</h1>
  <p>{{ personTwo.name }}</p>
  <button @click="changeTwo">TWo Change</button> -->

  <!-- <p>Person {{ one }}</p>
  <p>Person {{ two }}</p>
  <button @click="changeOne">Click One</button>
  <button @click="changeTwo">Click Two</button> -->

  <!-- <input type="text" v-model="search" />
  <div>{{ search }}</div>
  <div v-for="name in filterName" :key="name">
    {{ name }}
  </div> -->
  <button @click="showPosts=!showPosts">Show</button>
  <button @click="posts.pop()">Delete</button>
  <div v-if="showPosts">
    <PostList :posts="posts"></PostList>
  </div>
</template>

<script>
import PostList from "./PostList.vue";
import { computed, reactive, ref } from "vue";

export default {
  components: { PostList },
  setup() {
    let showPosts = ref(true);
    let posts = ref([
      {
        title: "Post title 1",
        body: "test Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit",
        id: 1,
      },
      { title: "Post title 2", body: "Post body", id: 2 },
      { title: "Post title 3", body: "Post body", id: 3 },
    ]);
    return { posts, showPosts };
  },

  // setup() {
  //   let search = ref("");
  //   let names = ref(["aaa", "bbb", "ccc", "dddd", "eeee"]);
  //   let filterName = computed(() => {
  //     return names.value.filter((name) => {
  //       return name.includes(search.value);
  //     });
  //   });
  //   return { names, search, filterName };
  // },
  // setup() {
  //   let personOne = ref({ name: "Aung Aung", age: 11 });
  //   let changeOne = () => {
  //     personOne.value.name = "SU SU";
  //   };
  //   let personTwo = reactive({ name: "Kyaw Gyi", age: 21 });
  //   let changeTwo = () => {
  //     personTwo.name = "Ma Gyi";
  //   };
  //   return { personOne, changeOne, personTwo, changeTwo };
  // },
  // setup() {
  //   let one = ref("one  is one");
  //   let changeOne = () => {
  //     one.value = "one Changed";
  //   };
  //   let two = reactive("two is two");
  //   let changeTwo = () => {
  //     two = "two Changed";
  //   };
  //   return { one, changeOne, two, changeTwo };
  // },
};
</script>

<style></style>
