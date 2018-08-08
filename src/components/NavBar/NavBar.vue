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
            <div class="nav-divider"></div>
            <a href="https://github.com/ForkMaps" target="_blank" class="navbar-link nav-social">
                <i class="fab fa-github"></i>
            </a>
            <!--<a href="https://discord.gg/dcsZdPp" target="_blank" class="navbar-link">
                <i class="fab fa-discord"></i>
            </a>-->
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
        flex-shrink: 0;
        flex-grow: 0;
        align-items: stretch;
        justify-content: center;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
        z-index: 30;
        box-sizing: border-box;
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
    }
    .site-logo {
        height: 32px;
        width: auto;
        margin: 12px 16px;
    }
    .navbar-link {
        padding: 4px 16px;
        color: #E2E1E0;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        border-bottom: 3px solid rgba(0,0,0,0);
        text-align: center;
    }
    .navbar-link:hover {
        border-bottom: 3px solid #33A193;
    }
    .navbar-link.router-link-active,
    .navbar-link.router-link-exact-active {
        cursor: pointer;
        border-bottom: 3px solid #53C1B3;
    }
    .nav-social:hover {
        color: #FFFFFF;
        border-bottom: 3px solid rgba(0,0,0,0);
    }
    .link-image {
        width: 32px;
        height: auto;
        margin-right: 16px;
    }
    .nav-divider {
        width: 1px;
        background-color: #B7B3C0;
        margin: 12px 0px;
    }
    @media screen and (orientation:portrait) {
        .navbar-link {
            padding: 4px 12px;
        }
        .nav-divider {
            display: none;
        }
        .nav-social {
            display: none;
        }
    }
    @media screen and (orientation:landscape) {

    }
</style>
