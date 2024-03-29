<template>
  <form @submit.prevent="addPost">
    <h1>Create</h1>
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Body</label>
    <textarea required v-model="body"></textarea>
    <label>Tags</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
    <div v-for="tag in tags" :key="tag" class="pill">
      {{ tag }}
    </div>

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);

    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    let addPost = async () => {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
    };
    return { title, body, tag, handleKeyDown, tags, addPost };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
}
button {
  display: block;
  margin-top: 30px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 18px;
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
