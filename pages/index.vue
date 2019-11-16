<template>
  <div>
    <Intro />
    <Solutions />
    <WebApps />
    <MobileApps />
    <MVP />
    <CaseStudies />
    <WhyKodin />
    <Contact />
  </div>
</template>

<script>
import Intro from './index/Intro'
import Solutions from './index/Solutions'
import WebApps from './index/WebApps'
import MobileApps from './index/MobileApps'
import MVP from './index/MVP'
import CaseStudies from './index/CaseStudies'
import WhyKodin from './index/WhyKodin'
import Contact from './index/Contact'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  name: 'Home',
  components: {
    Intro,
    Solutions,
    WebApps,
    MobileApps,
    MVP,
    CaseStudies,
    WhyKodin,
    Contact
  }
}
</script>

<style lang="scss">
.icon .fa-mobile {
  font-size: 2rem !important;
}

html {
  scroll-behavior: smooth;
}
</style>
