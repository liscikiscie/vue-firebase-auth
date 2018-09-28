<template>
    <div id="app">
        <SignUp/>
        <SignIn/>
    </div>
</template>

<script>
    import SignUp from './components/User/SignUp.vue';
    import SignIn from './components/User/SignIn.vue';

    let App = {
        name: 'app',
        components: {
            SignUp,
            SignIn
        }
    };
    export default App;
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
