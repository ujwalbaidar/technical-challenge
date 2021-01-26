<template>
    <div class="home">
        <Banner/>
        <VirtualEvents/>
        <LearningBanner/>
        <DownloadableGuide/>
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home/Banner.vue'
import DownloadableGuide from '@/components/home/DownloadableGuides.vue'
import LearningBanner from '@/components/home/LearningBanner.vue'
import VirtualEvents from '@/components/home/VirtualEvents.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    DownloadableGuide,
    LearningBanner,
    VirtualEvents
  }
}
</script>
