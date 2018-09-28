<template>
    <div class="profile">
        <form @submit.prevent="updateProfile">
            <h2>Update Profile</h2>
            <input v-model="displayName" placeholder="Your name">
            <input v-model="photoURL" placeholder="Your photo url">
            <button @click="updateProfile">Update Profile</button>
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
                photoURL: null
            }
        },
        methods: {
            updateProfile() {
                this.authUser.updateProfile({
                    displayName: this.displayName,
                    // photoURL: this.photoURL
                })
            }
        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                this.authUser = user;
                if ( user ) {
                    this.displayName = user.displayName;
                    // this.photoURL = user.photoURL
                }
            })
        }
    };
    export default Profile
</script>

<style scoped>

</style>
