<template>
  <section class="section section-shaped my-0 overflow-hidden">
    <div class="shape shape-style-3 bg-gradient-default shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg pb-300">
      <div class="row text-center justify-content-center">
        <div class="col-lg-10">
          <h2 class="display-3 text-white">{{ lang.title }}</h2>
          <!-- <p class="lead text-white">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice.
            </p> -->
        </div>
      </div>
      <div class="row row-grid mt-5">
        <div class="col-lg-4">
          <icon
            name="ni ni-settings"
            size="lg"
            gradient="white"
            shadow
            round
            color="default"
          ></icon>
          <h5 class="text-white mt-3">{{ lang.modernTech.title }}</h5>
          <p class="text-white mt-3">
            {{ lang.modernTech.description }}
          </p>
        </div>
        <div class="col-lg-4">
          <icon
            name="fa fa-flask"
            size="lg"
            gradient="white"
            shadow
            round
            color="default"
          ></icon>
          <h5 class="text-white mt-3">{{ lang.tailorMade.title }}</h5>
          <p class="text-white mt-3">
            {{ lang.tailorMade.description }}
          </p>
        </div>
        <div class="col-lg-4">
          <icon
            name="fa fa-street-view"
            size="lg"
            gradient="white"
            shadow
            round
            color="default"
          ></icon>
          <h5 class="text-white mt-3">{{ lang.onSiteSupport.title }}</h5>
          <p class="text-white mt-3">
            {{ lang.onSiteSupport.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$t('WhyKodin')
    }
  }
}
</script>

<style></style>
