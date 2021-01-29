<template>
    <div id="home-banner">
        <b-container fluid>
            <div class="jumbotron-div">
                <b-row class="jumb-container">
                    <b-col class="lb-img-section">
                        <img :src="require('@/assets/images/logo.png')">
                    </b-col>
                    <b-col>
                        <div class="lb-text-section">
                            <h3> Series A Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin enim lorem, ut elementum tellus sollicitudin ut. Proin sit amet lectus sed libero suscipit commodo sit amet ut velit. Nulla a varius massa. Phasellus pharetra cursus diam id venenatis. 
                            </p>
                        </div>
                    </b-col>
                    
                </b-row>
                 <b-row class="jumb-container">
                    <b-col  style="height: 65px;text-align: right;padding-right: 50px;">
                        <a href="#" style="text-decoration: underline;   font-weight: bold; color: #CB43A4;">See next-series</a>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>
<style scoped>
    .container-fluid{
        padding: 0px;
    }
    #home-banner{
        padding-bottom: 40px;
    }
    .lb-text-section h3{
        padding-top: 70px;
        font-weight: bold;
        font-family:monospace;  
    }
    .lb-text-section p{
        padding-top: 30px;
        max-width: 70%;
    } 
    @media (max-width:40rem) {
        .lb-img-section img{
            padding:0px;
            width: 250px;

        }
        
    }
/* 
    #learning-banner{
        padding-top:60px;
        padding-bottom: 60px;
    }

    .lb-text-section h3{
        padding-top: 20px;
        text-transform: uppercase; 
        font-weight: bold;
        letter-spacing: 8px; 
        font-family:monospace;  
    }
    .lb-text-section h5{
        font-weight: bold;
        padding-top: 25px;
        padding-bottom: 20px;
    }
    .lb-img-section{
        text-align: center;
    }
    .lb-text-section p{
        max-width: 70%;
    } */
    .lb-img-section img{
        padding: 50px;
    }
    .jumb-container{
        margin-left: 0px;
        margin-right: 0px;
    }
</style>