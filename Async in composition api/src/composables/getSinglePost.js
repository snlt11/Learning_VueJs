import { ref } from "vue";

let getSinglePost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
      let response = await fetch("http://localhost:3000/posts/" + id);
      if (response.statusCode === 404) {
        throw new Error("Couldn't find post");
      }
      let data = await response.json();
      post.value = data;
    } catch (e) {
      error.value = e.message;
    }
  };
  return { post, error, load };
};

export default getSinglePost;
