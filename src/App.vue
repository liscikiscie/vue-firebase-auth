<template>
    <div id="app">
        <SignUp/>
    </div>
</template>

<script>
    import SignUp from './components/User/SignUp.vue';

    let App = {
        name: 'app',
        components: {
            SignUp
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
