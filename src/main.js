import Vue from 'vue'
import * as firebase from 'firebase';
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAGdKF6HaQ3j3ti_XJZ4-KsjBOt8x_p8dM',
            authDomain: 'vue-firebase-auth-22681.firebaseapp.com',
            databaseURL: 'https://vue-firebase-auth-22681.firebaseio.com',
            projectId: 'vue-firebase-auth-22681',
            storageBucket: 'vue-firebase-auth-22681.appspot.com',
            messagingSenderId: '48746280970'
        })
    }
}).$mount('#app');
