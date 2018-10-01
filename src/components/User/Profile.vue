<template>
    <div class="profile">
        <form @submit.prevent="updateProfile">
            <h2>Update Profile</h2>
            <input v-model="displayName" placeholder="Your name">
            <input v-model="photoURL" placeholder="Your photo url">
            <button @click="updateProfile">Update Profile</button>
        </form>
        <form @submit.prevent="updateEmail">
            <h2>Update Email</h2>
            <input v-model="email" placeholder="Type your email">
            <button @click="updateEmail">Update Email</button>
        </form>
        <form @submit.prevent="updatePass">
            <h2>Update password</h2>
            <input v-model="newPassword" placeholder="Type your password">
            <button @click="updatePass">Update password</button>
        </form>
    </div>
</template>

<script>
    import * as firebase from 'firebase'

    let Profile = {
        name: 'Profile',
        data() {
            return {
                displayName: null,
                photoURL: null,
                email: '',
                newPassword: null
            }
        },
        methods: {
            updateProfile() {
                this.authUser.updateProfile({
                    displayName: this.displayName,
                    photoURL: this.photoURL
                })
            },
            updateEmail() {
                this.authUser.updateEmail(this.email)
            },
            updatePass() {
                this.authUser.updatePassword(this.password)
                    .then(() => {
                        this.newPassword = null
                    })
                    .catch(error => alert(':/' + error.message))
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user;
                if ( user ) {
                    this.displayName = user.displayName;
                    this.photoURL = user.photoURL;
                    this.email = user.email;
                    this.password = user.password
                }
            })
        }
    };
    export default Profile
</script>

<style scoped>

</style>
