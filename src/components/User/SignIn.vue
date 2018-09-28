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
        <div class="googleProvider">
            <button @click="singInWithGoogle">SignIn with Google</button>
        </div>
        <Profile/>
    </div>
</template>

<script>
    import * as firebase from 'firebase';
    import Profile from './Profile.vue';

    let SignIn = {
        name: 'SignIn',
        components: {
            Profile
        },
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
            },
            singInWithGoogle() {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                    .catch(error => alert(error.message))
                    .then(data => console.log(data.user,
                        data.credential.accessToken))
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
