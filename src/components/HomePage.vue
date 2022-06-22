<template>
<img alt="Vue logo" src="../assets/logo.png">
<h1>Welcome to home page</h1>
<button @click="loginRoute" >Click here to Login</button>
</template>

<script>
export default{
    name:"HomePage",
    methods:{
        loginRoute(){
            this.$router.push({name:"Login"})
        }
    }
}
</script>
<style>
    
button{
    padding:10px;
    width:20%;
    font-size: 18px;
    font-weight: bold;
    background-color: #00767a;
    border:none;
    border-radius: 10px 0 10px 0;
    color:white
}
</style>