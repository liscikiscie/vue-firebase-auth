<template>
    <div class="singIn__wrapper">
        <div class="authForm">
            <form @submit.prevent="singIn">
                <h2>Sign in</h2>
                <input type="email" v-model="email" placeholder="Type your email">
                <input type="password" v-model="password" placeholder="Type your password">
                <button>Sign in</button>
            </form>
        </div>
    </div>
</template>

<script>
    import * as firebase from 'firebase';

    let SignIn = {
        name: 'SignIn',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            singIn() {
                firebase.auth().signInWithEmailAndPassword(
                    this.email,
                    this.password
                    )
                    .catch(error => alert(error.message));
                this.password = '';
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user;
            })
        }
    };
    export default SignIn;
</script>

<style scoped>

</style>
