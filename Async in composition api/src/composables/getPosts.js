import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let errors = ref("");
  let load = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
      let response = await fetch("http://localhost:3000/posts");
      if (response.status === 404) {
        throw new Error("Post not found");
      }
      let data = await response.json();
      posts.value = data;
    } catch (e) {
      errors.value = e.message;
    }
  };
  return { posts, errors, load };
};
export default getPosts;
