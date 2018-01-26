<template>
<div>
    <h1>LOGIN</h1>
    <form v-on:submit.prevent="handle()" enctype="application/json" method="POST">
        <input type="hidden" name="<i>csrf" v-bind:value="csrftoken" />
        Username:
        <input type="text" placeholder="Enter username" v-model="username">
        Password:
        <input type="text" placeholder="Enter password" v-model="password">
        <button type="submit">LOGIN</button>
    </form>
    <div v-if="pastNames">
        Username: {{ pastNames }}
        Password: {{ pastPass }}
    </div>
</div>
</template>

<script>
var axios = require('axios');

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            pastNames: '',
            pastPass: ''
        }
    },
    methods: {
        handle () {
            //var fd = new FormData();
            //fd.append(this.username, this.password);
            console.log(this.username);
            /*this.$http.post('http://localhost:3000/login', fd).then(function(response) {
                    // success
                    alert('Success');
                }, function (response) {
                    // error 
                });
            */
            var csrfjwt;
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/auth',
                data: {username: this.username, password: this.password},
                headers: {
                    'x-csrf-jwt': csrfjwt
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err.message);
            });
            /*axios.post('http://localhost:3000/api/v1/auth', {username: this.username, password: this.password})
                .then((res) => {
                    console.log(res);
                }).catch((err) => { 
                    console.log(err.message)
                });
                */
            this.pastNames = this.username;
            this.pastPass = this.password;
            this.username = '';
            this.password = '';
        }
    } 
}
</script>

<style>

</style>