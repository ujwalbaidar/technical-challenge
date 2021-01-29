<template>
    <div id="learning-banner">
        <b-container fluid>
            <div class="jumbotron-div">
                <b-row class="jumb-container">
                    <b-col>
                        <div class="lb-text-section">
                            <h3> Learning</h3>
                            <h5>Wellbeing Course Title</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin enim lorem, ut elementum tellus sollicitudin ut. Proin sit amet lectus sed libero suscipit commodo sit amet ut velit. Nulla a varius massa. Phasellus pharetra cursus diam id venenatis. 
                            </p>
                        </div>
                    </b-col>
                    <b-col class="lb-img-section">
                        <img :src="require('@/assets/images/man.png')">
                    </b-col>
                </b-row>
                <b-row class="jumb-container">
                    <b-col style="height: 65px;">
                        <a href="#" style="text-decoration: underline;   font-weight: bold; color: #CB43A4;">See wellbeing course</a>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'LearningBanner'
}
</script>
<style scoped>
    .container-fluid{
        padding: 0px;
    }

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
    }
    .jumb-container{
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 50px;
    }
    @media (max-width:40rem) {
        .lb-img-section img{
            padding:0px;
            width: 250px;

        }
        
    }
</style>