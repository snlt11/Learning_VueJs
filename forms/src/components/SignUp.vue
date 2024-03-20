<template>
  <form action="" @submit.prevent="submit">
    <h1>SignUp Form</h1>
    <label for="email">Email</label>
    <input type="email" required v-model="email" />

    <label for="password">Password</label>
    <input type="password" v-model="password" required />
    <p class="error" v-if="errorMessage">{{errorMessage}}</p>
    <label for="role">Roles : </label>
    <select v-model="role">
      <option value="water">Water</option>
      <option value="cola">Cola</option>
    </select>

    <div>
      <label for="">Skill</label>
      <input type="text" @keyup.alt="addSkill" v-model="skill" />
    </div>
    <div v-for="skill in skills" :key="skill">
      <p>
        {{ skill }}
        <span class="cross" @click="deleteSkill(skill)">&#10006;</span>
      </p>
    </div>

    <div>
      <input type="checkbox" v-model="accept" />
      <label for="">Accept Terms and Conditions</label>
    </div>
    <div class="align">
      <button class="create">Create Account</button>
    </div>
  </form>
</template>

<script>
import { errorMessages } from "vue/compiler-sfc";

export default {
  data() {
    return {
      email: "test@gmail.com",
      password: "",
      role: "water",
      accept: "false",
      skills: [],
      skill: "",
      errorMessage: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.skill) {
        this.skills.push(this.skill);
        this.skill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((loopSkill) => {
        return loopSkill != skill;
      });
    },
    submit() {
      if (this.password.length < 8) {
        this.errorMessage = "Password must be at least 8 characters";
      }
    },
  },
};
</script>

<style></style>
