<template>
  <section id="solutions" class="section section-lg pt-lg-0 mt--200">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="py-5">
                <icon name="fa fa-desktop" type="primary" rounded class="mb-4">
                </icon>
                <h6 class="text-primary text-uppercase">
                  {{ lang.wepapps.title }}
                </h6>
                <p class="description mt-3">
                  {{ lang.wepapps.description }}
                </p>
                <div>
                  <badge type="primary" rounded>{{
                    lang.wepapps.wepapp
                  }}</badge>
                  <badge type="primary" rounded>{{
                    lang.wepapps.landingPage
                  }}</badge>
                  <badge type="primary" rounded>{{ lang.wepapps.cms }}</badge>
                  <badge type="primary" rounded>{{
                    lang.wepapps.eCommerce
                  }}</badge>
                </div>
                <base-button
                  tag="a"
                  href="#case-studies"
                  type="primary"
                  class="mt-4"
                >
                  {{ lang.seeCaseStudy }}
                </base-button>
              </card>
            </div>
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="py-5">
                <icon name="fa fa-mobile" type="success" rounded class="mb-4">
                </icon>
                <h6 class="text-success text-uppercase">
                  {{ lang.mobileApps.title }}
                </h6>
                <p class="description mt-3">
                  {{ lang.mobileApps.description }}
                </p>
                <div>
                  <badge type="success" rounded>{{
                    lang.mobileApps.mobileApp
                  }}</badge>
                  <badge type="success" rounded>{{
                    lang.mobileApps.android
                  }}</badge>
                  <badge type="success" rounded>{{
                    lang.mobileApps.ios
                  }}</badge>
                  <badge type="success" rounded>{{
                    lang.mobileApps.windows
                  }}</badge>
                </div>
                <base-button
                  tag="a"
                  href="#case-studies"
                  type="success"
                  class="mt-4"
                >
                  {{ lang.seeCaseStudy }}
                </base-button>
              </card>
            </div>
            <div class="col-lg-4">
              <card class="border-0" hover shadow body-classes="py-5">
                <icon name="fa fa-rocket" type="warning" rounded class="mb-4">
                </icon>
                <h6 class="text-warning text-uppercase">
                  {{ lang.mvp.title }}
                </h6>
                <p class="description mt-3">
                  {{ lang.mvp.description }}
                </p>
                <div>
                  <badge type="warning" rounded>{{ lang.mvp.prototype }}</badge>
                  <badge type="warning" rounded>{{
                    lang.mvp.wireframing
                  }}</badge>
                  <badge type="warning" rounded>{{ lang.mvp.uiUx }}</badge>
                  <badge type="warning" rounded>{{ lang.mvp.mvp }}</badge>
                </div>
                <base-button
                  tag="a"
                  href="#case-studies"
                  type="warning"
                  class="mt-4"
                >
                  {{ lang.seeCaseStudy }}
                </base-button>
              </card>
            </div>
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
      return this.$t('Solutions')
    }
  }
}
</script>

<style></style>
