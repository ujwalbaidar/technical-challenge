<template>
    <div id="nav">
        <b-container fluid>
            <b-navbar toggleable="lg">
                <b-navbar-brand class="navbar-brand-section">
                    <div class="navbar-brand-inner-section">&nbsp;</div>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" isNav>
                    <b-row class="ml-auto">
                        <b-navbar-nav>
                            <b-nav-item v-for="routerdata in routerdatas" :key="routerdata.id" style="padding-left:10px; padding-right: 10px">
                                <b-col sm="12">
                                    <router-link :to="routerdata.link" custom v-slot="{ navigate }">
                                        <span @click="navigate" @keypress.enter="navigate">{{routerdata.name}} </span>
                                    </router-link>
                                </b-col>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-row>
                    
                </b-collapse>
            </b-navbar>
        </b-container>
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
                        link: "/"
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
    .container-fluid{
        padding: 0px;
    }
    .navbar{
        align-items: normal;
        padding:0px;
        background-color: #4c1b63;
        border-bottom: 10px solid #dbd9d9;
    }
    .navbar-brand-section{
        width: 35%; 
        background-color:#dbd9d9;
        clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
        overflow: hidden;
        position: relative;
    }
    .navbar-brand-inner-section{
        width: 97%;
        background-color: white;
        clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
        padding-top: 0px;
        padding-bottom: 0px;
        height: 100%;
        top: 0px;
        position: absolute;
        padding-left: 0px;
    }
    .navbar a {
        float: left;
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
    }
    .navbar a span{
        color: white;
    }
    @media(max-width:80rem){
        .navbar-brand-section{
            width: 10%; 
            background-color: #4c1b63;
        }
        .navbar-brand-inner-section{
            background-color: #4c1b63;
        }
    }
</style>