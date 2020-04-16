<template>
    <div class="container">
        <template v-if="user.loggedIn">
            <div style="padding: 50px">
                <h1> Nama : {{user.data.displayName}}</h1>
            </div>
            <button type="click" @click.prevent="signOut">Keluar</button>
        </template>
        <template v-else>
            <h1>Anda Durung login!</h1>
        </template>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
    computed: {
        ...mapGetters({
            // map `this.user` to `this.$store.getters.user`
            user: "user"
        })
    },
    methods: {
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({
                        name: "Home"
                    });
                });
        }
    }
};
</script>