<template>
    <div id="virtual-events">
        <b-container fluid>
            <div class="banner-section">
                <div class="divider-section">
                    <h3 class="divider-header"> <span>virtual events </span></h3>
                    <div class="divider-sub-header">
                        <p class="text-muted">Upcoming virtual events you can take part in:</p>
                    </div>
                    <div class="virtual-event-section">
                          <b-row>
                            <b-col v-for="n in 3" :key="n" md="4" class="mb-2">
                                <div class="event-card">
                                    <div class="event-card-title">
                                        <p>
                                            Virtual Yoga class with
                                            <br>
                                            Gemma Habington
                                        </p>
                                    </div>
                                    <div class="event-card-date">
                                        <h2>
                                            {{19+n}}
                                            <br>
                                            
                                        </h2>
                                        <p>NOV</p>
                                    </div>
                                    <button class="mt-3" style="background-color:#eb2187; float: right; border: none;  border-top-left-radius: 20%30px;"><a href="#" style="font-family: monospace; color: white;"> More information</a></button>
                                    
                                </div>
                            </b-col>
                          </b-row>
                    </div>
                    
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'VirtualEvents'
}
</script>

<style scoped>
    .divider-sub-header p{
        padding-top: 20px;
        font-family:monospace;  
        font-weight: bold;
    }
    .event-card {
        background-color:#4c1b63; 
        border-radius: 10px; 
        height:100%
    }
    .event-card-title {
        width: 70%; float:left
    }
    .event-card-title p{
        padding-top:40px;
        padding-left: 20px;
        color: #f2eeee;
    }
    .event-card-date {
        width: 30%; 
        float:left;
        text-align: right;
        padding: 20px;
    }
    .event-card h2 {
        font-family: monospace; 
        color: white;
        font-size: 3rem;
    }
    .event-card p {
        font-family: monospace; 
        color: white;
    }
    @media(max-width: 1000px){
        .event-card-date h2 {
            font-size: 3vw;
        }
    }
</style>