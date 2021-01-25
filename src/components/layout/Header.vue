<template>
    <div id="nav">
        <router-link v-for="routerdata in routerdatas" :key="routerdata.id" :to="routerdata.link">{{routerdata.name}} | </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                routerdatas:[
                    {
                        id: 7,
                        name: "Home",
                        link: "/"
                    },
                    {
                        id: 1,
                        name: "Plans",
                        link: "/plans"
                    },
                    {
                        id: 2,
                        name: "Events",
                        link: "/events"
                    },
                    {
                        id: 3,
                        name: "EAP",
                        link: "/eap"
                    },
                    {
                        id: 4,
                        name: "Wellbeing benefits",
                        link: "/well-being-benefits"
                    },
                    {
                        id: 5,
                        name: "My organisation",
                        link: "/my-organisaion"
                    },
                    {
                        id: 6,
                        name: "Virtual",
                        link: "/virtual"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #nav a{
        text-decoration: none;
    }
</style>