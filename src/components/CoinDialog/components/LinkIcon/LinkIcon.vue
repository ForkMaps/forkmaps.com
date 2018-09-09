<template>
    <i v-bind:class="iconClass"></i>
</template>

<script>

    export default {
        name: 'linkIcon',
        props: {
            link: String,
            linkType: String
        },
        data: function () {
            return {
                iconClasses: {
                    default: 'fas fa-external-link-square-alt',
                    bitcointalkAnn: 'fab fa-bitcoin',
                    discord: 'fab fa-discord',
                    facebook: 'fab fa-facebook',
                    reddit: 'fab fa-reddit',
                    telegram: 'fab fa-telegram',
                    twitter: 'fab fa-twitter',
                    website: 'fas fa-globe',
                    repo: {
                        bitbucket: 'fab fa-bitbucket',
                        default: 'fas fa-code',
                        github: 'fab fa-github' ,
                        gitlab: 'fab fa-gitlab'
                    }
                }
            }
        },
        computed: {
            iconClass: {
                get () {
                    if (!this.linkType || !this.iconClasses[this.linkType]) {

                        return this.iconClasses.default
                    }

                    if (this.linkType == 'repo') {

                        if (this.link.includes('bitbucket')) {

                            return this.iconClasses.repo.bitbucket;
                        } else if (this.link.includes('github')) {

                            return this.iconClasses.repo.github;
                        } else if (this.link.includes('gitlab')) {

                            return this.iconClasses.repo.gitlab;
                        }
                        return this.iconClasses.repo.default;
                    }

                    if (this.iconClasses[this.linkType]) {

                        return this.iconClasses[this.linkType];
                    }
                }
            }
        }
    };
</script>
