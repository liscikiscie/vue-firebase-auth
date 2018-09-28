import Vue from 'vue'
import * as firebase from 'firebase';
import App from './App.vue'
import ApiKeys from './api/apiKeys';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: ApiKeys.firebaseApiKey,
            authDomain: ApiKeys.authDomain,
            databaseURL: ApiKeys.databaseURL,
            projectId: ApiKeys.projectId,
            storageBucket: ApiKeys.storageBucket,
            messagingSenderId: ApiKeys.messagingSenderId
        })
    }
}).$mount('#app');
