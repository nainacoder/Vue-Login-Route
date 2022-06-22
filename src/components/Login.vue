<template>
  <h1>Login</h1>

  <div class="Input">
    <input type="email" v-model="email" placeholder="abc@xyz.com" />
    <input type="password" v-model="password" placeholder="password" />
    <button @click="login" :class="{ disabledButton: !email || !password }">
      Login
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("logged in", this.email, this.password);
      if (this.email && this.password) {
        let result = await axios.post("http://localhost:3000/posts", {
          email: this.email,
          password: this.password,
        });
        console.log(result);
        if (result.status == 201 && this.email && this.password) {
          this.$router.push({ name: "LandingScreen" });
        }
      }

      // .then((result)=>
      // {
      //     console.log(res)
      // })
      // .catch((err)=>{
      //     console.log(err)
      // })
    },
  },
};
</script>
<style>
h1 {
  color: rgb(26, 146, 150);
}
.Input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 20%;
  padding: 20px;
  margin: 20px;
  border: 1px solid aquamarine;
  outline: none;
  border-radius: 10px;
}
Input button {
  padding: 10px;
  width: 10%;
  font-size: 18px;
  font-weight: bold;
  background-color: #919063;
  border: none;
  border-radius: 10px 0 10px 0;
}
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}
</style>