<template>
    <div id="app">
        <nav-bar/>
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
    name: 'App',
    components: {
      'nav-bar': NavBar
    },
    created () {
        this.$store.dispatch('loadCoins')
    }
}
</script>

<style>
#app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
body {
    margin: 0px;
    padding: 0px;
}
.main-content {
    width: 100%;
    background-color: #FFFAFA;
    display: flex;
    flex-grow: 1;
}
</style>
