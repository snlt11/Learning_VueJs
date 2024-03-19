<template>
  <h1>SignUp Form</h1>
  <form action="">
    <label for="email">Email</label>
    <input type="email" required v-model="email" />

    <label for="password">Password</label>
    <input type="password" v-model="password" />

    <label for="role">Roles : </label>
    <select v-model="role">
      <option value="water">Water</option>
      <option value="cola">Cola</option>
    </select>
    
    <div>
      <label for="">Skill</label>
      <input type="text" @keyup="addSkill" v-model="skill" />
      {{ skills }}
    </div>

    <div>
      <input type="checkbox" v-model="accept" />
      <label for="">Accept Terms and Conditions</label>
    </div>

    <button>Submit</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      email: "test@gmail.com",
      password: "",
      role: "water",
      accept: "false",
      skills: [],
      skill: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === ",") {
        this.skills.push(this.skill);
        this.skill = "";
      }
    },
  },
};
</script>

<style></style>
