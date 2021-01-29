<template>
    <div id="app">
        <Header/>
            <div style="min-height: 100vh">
                <router-view/>
            </div>
        <Footer/>
    </div>
</template>

<script>
    import Footer from './components/layout/Footer.vue';
    import Header from './components/layout/Header.vue';
    export default {
        name: 'App',
        components: {
            Footer,
            Header
        }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.banner-section{
    padding-left: 50px;
    padding-right: 50px;
}

.divider-header {
    border-color: #d7d7d7;
    border-style: solid;
    border-width: 0 0 1px;
    height: 10px;
    line-height: 20px;
    text-align:left;
    overflow: visible;
}

.divider-header span {
    background-color: #FFF;
    display: inline-block;
    padding-right: 40px;
    min-height: 20px;
    min-width: 10%;
    letter-spacing: 8px; 
    font-family:monospace; 
    text-transform: uppercase; 
    font-weight: bold;
}

@media(max-width: 40rem){
    .divider-header {
        height: 100%;
    }
   .divider-header span {
       font-size: 3vw;
   } 
    
}

.jumbotron-div {
  background-color: #f4f4f4;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
