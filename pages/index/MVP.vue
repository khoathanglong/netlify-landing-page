<template>
  <section class="section section section-shaped my-0 overflow-hidden mvp">
    <div class="shape shape-style-1 bg-gradient-warning shape-skew">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container py-0">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-lg-2 ml-lg-auto">
          <div class="position-relative pl-md-5">
            <img
              src="img/prototyping.png"
              class="img-center img-fluid floating"
              :style="{ 'max-width': '400px' }"
            />
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="d-flex px-3">
            <div>
              <icon
                name="fa fa-rocket"
                size="lg"
                class="bg-gradient-white"
                color="warning"
                shadow
                rounded
              ></icon>
            </div>
            <div class="pl-4">
              <h3 class="text-white">{{ lang.title }}</h3>
              <p class="text-white">
                {{ lang.description }}
              </p>
              <base-button tag="a" href="#case-studies" class="mt-4">
                {{ lang.seeCaseStudy }}
              </base-button>
            </div>
          </div>
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="fa fa-paint-brush"
                  gradient="warning"
                  color="white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">{{ lang.prototypes.title }}</h5>
                <p>
                  {{ lang.prototypes.description }}
                </p>
              </div>
            </div>
          </card>
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="fa fa-thumbs-up"
                  gradient="warning"
                  color="white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">{{ lang.mvp.title }}</h5>
                <p>
                  {{ lang.mvp.description }}
                </p>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$t('MVP')
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  .mvp img {
    max-height: 300px;
  }
}
</style>
