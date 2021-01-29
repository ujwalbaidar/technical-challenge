<template>
    <div class="events">
        <b-container>
            <b-row>
                <div class="event-header">
                    <h1 title="Events">Events</h1>
                </div>
            </b-row>
            <b-row class="pa-ud mt-4" v-for="(event,index) in events" :key="event.id" v-bind:index="index">
                
                <b-card class="shadow-lg mb-3 bg-white rounded" border-variant="light" >
                    <b-row>
                        <b-col :order-lg="index%2==0?1:2" lg="4">
                            <b-card-img  :src="event.path" img-alt="Card image"></b-card-img>
                        </b-col>
                        <b-col :order-lg="index%2==0?2:1" lg="8">
                            <b-card-body>
                                <b-card-title class="text-center">{{event.title}}</b-card-title>
                                <b-card-text align="justify">
                                    {{loremtext}}    
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Events",
    data(){
        return{
            loremtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin enim lorem, ut elementum tellus sollicitudin ut. Proin sit amet lectus sed libero suscipit commodo sit amet ut velit. Nulla a varius massa. Phasellus pharetra cursus diam id venenatis. Morbi efficitur elementum nisi ut vestibulum. Donec eget metus viverra, fermentum quam sed, tempus nibh. Duis purus neque, laoreet ac porta nec, tincidunt vitae quam. Morbi pretium, dolor ut auctor suscipit, enim urna molestie tellus, vitae viverra nunc magna at libero.',
            events:[
                {
                    id:1,
                    title: 'Hiking',
                    path: require('@/assets/images/hiking.jpg')

                },
                {
                    id:2,
                    title: 'Marathon',
                    path: require('@/assets/images/marathon-event.jpg')

                },
                {
                    id:3,
                    title: 'Meditation',
                    path: require('@/assets/images/meditation-event.jpg')

                },
                {
                    id:4,
                    title: 'Yoga',
                    path: require('@/assets/images/yoga-event.png')

                }
            ]
        }
    } 
}
</script>
<style scoped>
    .container{
        margin-left: auto;
        margin-right: auto;
        max-width: 900px;
    }

    .event-header{
        padding-top: 2rem;
        text-align: center;
        width: 100%;
    }
    .pa-ud img{
        width: 100%;
        max-width: 422px;
        height: 100%;
        max-height: 422px;
        border-radius: 25px;
        -moz-box-shadow: 10px 10px 5px #ccc;
        -webkit-box-shadow: 10px 10px 5px #ccc;
        box-shadow: 10px 10px 5px #ccc;
        -moz-border-radius:25px;
        -webkit-border-radius:25px;
        border:2px solid #fff;
    }
    @media(max-width: 991px){
        .pa-ud img{
            width: 100%;
            max-width: 100%;
        }
        
        .card-body p{
            overflow: hidden;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
    }
    
    
</style>