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
              <h3 class="text-white">MVP Development</h3>
              <p class="text-white">
                Have a brilliant idea but don't know where to start? We got you
                covered! Our MVP Development solution will assist you through
                the whole product initiation process.
              </p>
              <base-button tag="a" href="#case-studies" class="mt-4">
                See case study
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
                <h5 class="title text-warning">Prototypes</h5>
                <p>
                  Building up from your input and ideas, we craft out clickable
                  prototypes and eye-catching UI designs for the application.
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
                <h5 class="title text-warning">Minimum Viable Products</h5>
                <p>
                  We won't stop until you are equipped with an MVP to prove your
                  ideas to potential investors and users.
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
export default {}
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  .mvp img {
    max-height: 300px;
  }
}
</style>
