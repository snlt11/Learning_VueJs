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
      jobs: [
        { id: "1", title: "one", detail: "one one" },
        { id: "2", title: "two", detail: "two two" },
        { id: "3", title: "three", detail: "three three" },
      ],
    };
  },
};
</script>

<style></style>
