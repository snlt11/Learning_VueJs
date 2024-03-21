<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'jobDetail', params: { id: job.id } }">
      <p>
        {{ job.title }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.jobs = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message());
      });
  },
};
</script>

<style></style>
