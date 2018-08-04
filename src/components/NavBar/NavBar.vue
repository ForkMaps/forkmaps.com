<template>
    <div class="nav-bar">
        <div class="nav-content">
            <img class="site-logo" src="/static/img/forkmaps_w.svg"/>
            <span class="app-title"></span>

            <router-link to="/" class="navbar-link" exact>
                <div class="link-wrapper">
                    <span>Coin List</span>
                </div>
            </router-link>
            <!--
            <div class="link-wrapper">
                <router-link to="/tree" class="navbar-link" exact>Tree View</router-link>
            </div>
            -->
            <router-link to="/forkMap" class="navbar-link" exact>
                <div class="link-wrapper">
                    <span>Fork Map</span>
                </div>
            </router-link>
            <div style="width: 1px; background-color: #B7B3C0; margin: 12px 0px;"></div>
            <a href="https://github.com/ForkMaps" target="_blank" class="navbar-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        data () {
            return {}
        }
    };
</script>

<style scoped>
    .nav-bar {
        background-color: #343534;
        display: flex;
        flex-direction: row;
        border-bottom: 3px solid #343534;
        flex-shrink: 0;
        flex-grow: 0;
        align-items: stretch;
        justify-content: center;
        padding-top: 3px;
    }
    .nav-content {
        max-width: 1100px;
        display: flex;
        flex-shrink: 0;
        flex-grow: 1;
        flex-direction: row;
    }
    .app-title {
        flex: 1;
        font-size: 20px;
        color: #FFFBFC;
        font-weight: 500;
        padding: 16px;
    }
    .site-logo {
        height: 36px;
        width: auto;
        margin: 12px 16px;
    }
    .navbar-link {
        padding: 4px 16px;
        color: #F2F1F0;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: center;
    }
    .navbar-link:hover {
        color: #CFCBCC;
    }
    .navbar-link.router-link-active,
    .navbar-link.router-link-exact-active {

        cursor: pointer;
        box-shadow: 0px 3px #53C1B3;
    }
    .link-image {
        width: 32px;
        height: auto;
        margin-right: 16px;
    }
</style>
