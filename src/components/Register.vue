<template>
    <div class="container">
        <form action="#" @submit.prevent="submit">
            <div class="center">
                <div class="ps"><input v-model="form.name" placeholder="nama" type="text"></div>
                <div class="ps"><input v-model="form.email" placeholder="email" type="text"></div>
                <div class="ps"><input v-model="form.password" placeholder="password" type="password"></div>
            </div>
            <button type="submit">Daftar</button>
        </form>
    </div>
</template>
<script>
import firebase from "firebase";

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            },
            error: null
        }
    },
    methods: {
        submit() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(data => {
                    data.user
                        .updateProfile({
                            displayName: this.form.name
                        })
                        .then(() => {});
                })
                .catch(err => {
                    this.error = err.message;
                });

            console.log(this.error)
        }
    }
}
</script>
<style>
.ps {
    margin: 25px 0px;
}
</style>