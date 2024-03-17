<template>
  <h1 ref="title">{{ title }}</h1>
  <input type="text" ref="name" /><br /><br />
  <button @click="clickHandler">Click Me</button><br /><br />
  <div v-if="showModal">
    <Modal
      :header="header"
      :content="content"
      :theme="theme"
      @closeModal="showModal = false"
    >
      <h1>testing</h1>
      <p>Welcome tester</p>
      <template v-slot:links>
        <a href="http://www.facebook.com">To Facebook</a>
        <a href="http://www.google.com">To Google</a>
      </template>
    </Modal>
  </div>
  <button @click="showModal = true">show Modal</button>
  <div v-if="showModalTwo">
    <Modal theme="delete" @closeModal="showModalTwo = false">
      <h1>Delete</h1>
      <p>Deleted tester</p>
    </Modal>
  </div>
  <button @click="showModalTwo = true">Delete</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  data() {
    return {
      title: "testing",
      header: "header for success",
      content: "content for success",
      theme: "success",
      showModal: false,
      showModalTwo: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    clickHandler() {
      this.$refs.name.focus();
      this.$refs.title.textContent = "ASUS";
    },
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
