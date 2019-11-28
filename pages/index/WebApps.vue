<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2">
          <img src="img/web-applications.jpg" class="img-fluid floating" />
        </div>
        <div class="col-md-6 order-md-1">
          <div class="pr-md-5">
            <icon
              name="fa fa-desktop"
              class="mb-5"
              size="lg"
              type="primary"
              shadow
              rounded
            ></icon>
            <h3>{{ lang.title }}</h3>
            <p>
              {{ lang.description }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge
                    type="primary"
                    circle
                    class="mr-3"
                    icon="fa fa-cogs"
                  ></badge>
                  <h6 class="mb-0">{{ lang.customWebApps }}</h6>
                </div>
              </li>
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge
                    type="primary"
                    circle
                    class="mr-3"
                    icon="fa fa-window-restore"
                  ></badge>
                  <h6 class="mb-0">{{ lang.landingPage }}</h6>
                </div>
              </li>
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge
                    type="primary"
                    circle
                    class="mr-3"
                    icon="fa fa-shopping-cart"
                  ></badge>
                  <h6 class="mb-0">{{ lang.eCommerce }}</h6>
                </div>
              </li>
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge
                    type="primary"
                    circle
                    class="mr-3"
                    icon="fa fa-edit"
                  ></badge>
                  <h6 class="mb-0">{{ lang.cms }}</h6>
                </div>
              </li>
            </ul>
            <base-button
              tag="a"
              href="#case-studies"
              type="primary"
              class="mt-4"
            >
              {{ lang.seeCaseStudy }}
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$t('WebApps')
    }
  }
}
</script>

<style></style>
