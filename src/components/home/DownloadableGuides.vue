<template>
    <div id="downloadble-guides">
        <b-container fluid>
            <div class="banner-section">
                <div class="divider-section">
                    <h3 class="divider-header"> <span>downloadable guides </span></h3>
                </div>
                <div class="guide-card">
                    <b-row>
                        <b-col v-for="n in 4 " :key="n">
                            <b-card-group deck class="text-center">
                                <b-card :img-src="require('@/assets/images/downloadable-guides.png')" img-alt="Card image" img-top class="shadow mb-5 bg-white rounded">
                                    <b-card-text>
                                        Going at your
                                        own pace
                                    </b-card-text>
                                    <b-card-text class="download-pdf">
                                        <strong> Download PDF </strong>
                                    </b-card-text>
                                </b-card>
                            </b-card-group>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'DownloadableGuide'
}
</script>

<style scoped>

.banner-section p{
    font-size: x-large;
}
.download-pdf{
    color: #c5739f;
    font-weight: bolder;
}
.guide-card{
    padding-top: 80px;
}

@media(max-width: 40rem){

    .guide-card{
        padding-top: 30px;
    }
}

</style>