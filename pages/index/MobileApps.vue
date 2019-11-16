<template>
  <section class="section bg-secondary">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6">
          <div class="border-0">
            <img
              v-lazy="'img/mobile-applications.png'"
              class="img-fluid floating"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="pl-md-5 text-success">
            <icon
              name="fa fa-mobile"
              class="mb-5"
              size="lg"
              type="success"
              shadow
              rounded
            ></icon>

            <h3 class="text-success">Mobile Applications</h3>
            <p>
              Having a modern, user-friendly mobile application is the key to
              your business growth. With our experience in creating
              cross-platform and native mobile apps, we can help you reach more
              users and customers all over the world.
            </p>
            <base-button
              tag="a"
              href="#case-studies"
              type="success"
              class="mt-4"
            >
              See case study
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
