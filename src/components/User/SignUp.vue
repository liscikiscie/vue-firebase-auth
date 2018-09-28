<template>
    <div class="singUp__wrapper">
        <div class="userAuth" v-if="authUser">
            <h2>Signed in as {{ authUser.email }}</h2>
        </div>
        <div v-else class="authForm">
            <form @submit.prevent="register">
                <h2>Register</h2>
                <input type="email" v-model="email" placeholder="Type your email">
                <input type="password" v-model="password" placeholder="Type your password">
                <button>Register</button>
            </form>
        </div>
    </div>

</template>

<script>
    import * as firebase from 'firebase';

    let SignUp = {
        name: 'SignUp.vue',
        data() {
            return {
                email: '',
                password: '',
                authUser: null
            }
        },
        methods: {
            register() {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
                    this.email,
                    this.password
                )
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user;
            })
        }
    };
    export default SignUp;
</script>

<style scoped>

</style>
