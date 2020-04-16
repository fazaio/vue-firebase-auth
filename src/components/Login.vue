<template>
    <div class="container center">
        <h1>{{ error }}</h1>
        <form action="#" @submit.prevent="submit">
            <input type="email" v-model="form.email" placeholder="nama"><br><br>
            <input type="password" v-model="form.password" placeholder="password"><br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null
        };
    },
    methods: {
        submit() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                    this.$router.replace({ name: "Dashboard" });
                })
                .catch(err => {
                    this.error = err.message;
                });
        }
    }
};
</script>