<template>
  <section id="team" class="section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3">KODIN Team</h2>
          <p class="lead text-muted">
            We are a team of young and passionate people who are inspired by the
            potentials technology brings to the world.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/ngoc.jpeg'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Ngoc Nguyen</span>
                <small class="h6 text-muted"
                  >Founder and Frontend Developer</small
                >
              </h5>
              <div class="mt-3">
                <base-button
                  tag="a"
                  href="https://www.linkedin.com/in/ngocnn/"
                  target="_blank"
                  type="primary"
                  icon="fa fa-linkedin"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://www.facebook.com/ngocnn1104"
                  target="_blank"
                  type="primary"
                  icon="fa fa-facebook"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://github.com/ngocnn1104"
                  target="_blank"
                  type="primary"
                  icon="fa fa-github"
                  rounded
                  icon-only
                ></base-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/long.jpeg'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Long Khoa</span>
                <small class="h6 text-muted"
                  >Co-founder and Software Developer</small
                >
              </h5>
              <div class="mt-3">
                <base-button
                  tag="a"
                  href="https://www.linkedin.com/in/longkhoa91/"
                  target="_blank"
                  type="success"
                  icon="fa fa-linkedin"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://www.facebook.com/thanglongkhoa"
                  target="_blank"
                  type="success"
                  icon="fa fa-facebook"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://github.com/khoathanglong"
                  type="success"
                  icon="fa fa-github"
                  rounded
                  icon-only
                ></base-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div class="px-4">
            <img
              v-lazy="'img/thinh.jpg'"
              class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
              style="width: 200px;"
            />
            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Thinh Nguyen</span>
                <small class="h6 text-muted"
                  >Co-founder and Test Engineer</small
                >
              </h5>
              <div class="mt-3">
                <base-button
                  tag="a"
                  href="https://www.linkedin.com/in/thinh-nguyen-van-73061534/"
                  target="_blank"
                  type="warning"
                  icon="fa fa-linkedin"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://www.facebook.com/nguyenvan.thinh3"
                  target="_blank"
                  type="warning"
                  icon="fa fa-facebook"
                  rounded
                  icon-only
                ></base-button>
                <base-button
                  tag="a"
                  href="https://github.com/nguyenvanthinhhcm"
                  target="_blank"
                  type="warning"
                  icon="fa fa-github"
                  rounded
                  icon-only
                ></base-button>
              </div>
            </div>
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
