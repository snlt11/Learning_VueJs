<template>
  <div v-if="job">
    <h1>Job Title {{ job.title }}</h1>
    <h3>Job Details {{ job.details }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      job: null,
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((err) => {
        console.log(err.message());
      });
  },

  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>
