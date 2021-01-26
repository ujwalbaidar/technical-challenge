<template>
    <div id="nav">
        <b-navbar toggleable="lg"  type="dark" variant="info">
            <div class="navbar-left-side"></div>
            <div class="navbar-right-side">
                <b-navbar-nav class="ml-auto">
                    
                        <router-link v-for="routerdata in routerdatas" :key="routerdata.id" :to="routerdata.link" custom v-slot="{ navigate }">
                            <b-nav-item>
                            <span @click="navigate" @keypress.enter="navigate">{{routerdata.name}} </span>
                            </b-nav-item>
                        </router-link>
                    
                </b-navbar-nav> 
            </div>
           
        </b-navbar>
        <div class="nav-seperator"></div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                routerdatas:[
                    // {
                    //     id: 7,
                    //     name: "Home",
                    //     link: "/"
                    // },
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
    #nav, .navbar{
        padding: 0%;
    }
    .navbar{
        background-color: #543d6b !important;
    }
    #nav a{
        text-decoration: none;
        color: #ffffff;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    .navbar-left-side {
        float: left;

        background-image: url('../../assets/images/navbar.png');
        
        background-size: 100% 100%;
        height: 75px;
        width: 30%;
    }
    .navbar-right-side {
        float: right;
        width: 70%;
        
    }
    .navbar-right-side ul{
        float: right;
        padding-left: 20px;
    }

    .navbar-right-side ul li{
        padding-left: 60px;
        padding-right: 60px;
    }

    .header-area {
        position: fixed;
        left: 0;
        right: 0;
        height: 100%;
    }

    .nav-seperator{
        background-color: #e5e5e5;
        height: 8px;
    }
</style>