<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'jobs' }">Jobs</RouterLink>
  </nav>
  <RouterView />
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Forward</button>
  <button @click="redirect">Redirect</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    redirect() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1.5rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
