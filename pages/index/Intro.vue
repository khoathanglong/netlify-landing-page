<template>
  <div class="position-relative intro">
    <!-- shape Hero -->
    <section class="section-shaped my-0">
      <div class="shape shape-style-1 shape-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="container shape-container d-flex">
        <div class="col px-0">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="display-3 text-white">
                {{ lang.h1.bold }}
                <span>{{ lang.h1.normal }}</span>
              </h1>
              <p class="lead text-white">
                {{ lang.subheading }}
              </p>
              <div class="btn-wrapper">
                <base-button
                  tag="a"
                  href="#contact"
                  class="mb-3 mb-sm-0"
                  type="warning"
                  icon="fa fa-envelope"
                >
                  {{ lang.contactUs }}
                </base-button>
                <base-button
                  tag="a"
                  href="#solutions"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="ni ni-bulb-61"
                >
                  {{ lang.ourSolutions }}
                </base-button>
              </div>
            </div>
            <div class="col-lg-6 text-center">
              <img
                src="img/software-development.png"
                class="img-fluid"
                alt="software development"
                style="max-height: 380px;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1st Hero Variation -->
  </div>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$t('Intro')
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  .intro {
    .container {
      padding-bottom: 10rem !important;

      .img-fluid {
        margin-top: 5rem;
      }
    }
  }
}
</style>
