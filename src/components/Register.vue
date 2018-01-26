<template>
<div>
    <h1>REGISTER</h1>
    <form v-on:submit.prevent="onSubmit">
        Username: <input v-model="username" type="text">
        Password: <input v-model="password" type="password">
        Re-type Password: <input v-model="passReType" type="password">
        <input type="submit" @click="handle">
    </form>
</div>
</template>

<script>
var axios = require('axios');
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            passReType: ''
        }
    },
    methods: {
        handle() {
            axios.post('http://localhost:3000/register', {username: this.username, password: this.password})
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err.message);
            });
            
        }
    } 
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    background-color: beige;
    padding: 5% 0;
    width: 80%;
    margin: 0 auto;
}
input {
    width: 50%;
    margin: 1% auto;
    padding: 1%;
}
</style>