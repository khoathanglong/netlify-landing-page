<template>
  <section id="contact" class="section section-lg pt-lg-0 section-contact-us">
    <div class="container">
      <div class="row justify-content-center mt--300">
        <div class="col-lg-8 text-center">
          <card gradient="secondary" shadow body-classes="p-lg-5">
            <h4 class="mb-1">{{ lang.title }}</h4>
            <p class="mt-0">
              {{ lang.beforeEmail }}
              <a href="mailto:example@email.com">example@emai.com</a>
              {{ lang.afterEmail }}
            </p>
            <img src="img/contact.png" class="img-fluid" alt="" />
            <!-- <base-input
                class="mt-5"
                alternative
                placeholder="Your name"
                addon-left-icon="fa fa-user"
              >
              </base-input>
              <base-input
                alternative
                placeholder="Email address"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  name="name"
                  rows="4"
                  cols="80"
                  placeholder="Type a message..."
                ></textarea>
              </base-input>
              <base-button type="default" round block size="lg">
                Send Message
              </base-button> -->
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
