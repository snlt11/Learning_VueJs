<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{ success: theme == 'success', delete: theme == 'delete' }"
    >
      <slot>
        <h1>Default</h1>
      </slot>
      <slot name="links"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "content", "theme"],
  methods: {
    closeModal(){
      this.$emit('closeModal')
    }

  }
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 10px;
}
p {
  font-style: normal;
}
.success {
  background-color: green;
  color: #fff;
}
.delete {
  background-color: crimson;
  color: #fff;
}
</style>
