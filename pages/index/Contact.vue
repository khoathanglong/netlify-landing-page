<template>
  <section id="contact" class="section section-lg pt-lg-0 section-contact-us">
    <div class="container">
      <div class="row justify-content-center mt--300">
        <div class="col-lg-8 text-center">
          <card gradient="secondary" shadow body-classes="p-lg-5">
            <div
              class="typeform-widget"
              data-url="https://contactkodin.typeform.com/to/NYQa2s"
              style="width: 100%; height: 500px;"
            ></div>
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
      return this.$t('Contact')
    }
  }
}
</script>

<style></style>
