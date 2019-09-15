<template>
  <div>
    <div class="position-relative">
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
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  Solving business challenges
                  <span>with modern technology</span>
                </h1>
                <p class="lead  text-white">
                  KODIN helps boost business ideas by developing technological
                  solutions for enterprises' needs.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#contact"
                    class="mb-3 mb-sm-0"
                    type="warning"
                    icon="fa fa-envelope"
                  >
                    Contact us
                  </base-button>
                  <base-button
                    tag="a"
                    href="#solutions"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-bulb-61"
                  >
                    Our solutions
                  </base-button>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  src="img/software-development.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section id="solutions" class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="fa fa-desktop"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">Web Applications</h6>
                  <p class="description mt-3">
                    From static to dynamic web applications, our solutions know
                    no boundaries as long as we understand your business
                    requirements.
                  </p>
                  <div>
                    <badge type="primary" rounded>web app</badge>
                    <badge type="primary" rounded>landing page</badge>
                    <badge type="primary" rounded>cms</badge>
                    <badge type="primary" rounded>e-commerce</badge>
                  </div>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    See case study
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-mobile" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">
                    Mobile Applications
                  </h6>
                  <p class="description mt-3">
                    Our experienced team will help you craft cross-platform and
                    native mobile apps using modern technologies. Android, iOS,
                    or Windows, you just name it!
                  </p>
                  <div>
                    <badge type="success" rounded>mobile app</badge>
                    <badge type="success" rounded>android</badge>
                    <badge type="success" rounded>ios</badge>
                    <badge type="success" rounded>windows</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    See case study
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-rocket" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">
                    MVP Development
                  </h6>
                  <p class="description mt-3">
                    With shorter development time, we will quickly turn your
                    creative ideas into proof of concept and help you win the
                    hearts of your target audience.
                  </p>
                  <div>
                    <badge type="warning" rounded>prototype</badge>
                    <badge type="warning" rounded>wireframing</badge>
                    <badge type="warning" rounded>ui/ux</badge>
                    <badge type="warning" rounded>mvp</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    See case study
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
              <h3>Web Applications</h3>
              <p>
                We make sure your end-users enjoy unique and delightful
                experience digging through your websites and/or web
                applications. Our solutions tailor to your business
                requirements, and not limited to:
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
                    <h6 class="mb-0">Custom web applications</h6>
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
                    <h6 class="mb-0">Landing page</h6>
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
                    <h6 class="mb-0">E-commerce websites</h6>
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
                    <h6 class="mb-0">CMS</h6>
                  </div>
                </li>
              </ul>
              <base-button tag="a" href="#" type="primary" class="mt-4">
                See case study
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                cross-platform and native mobile apps, we can help you reach
                more users and customers all over the world.
              </p>
              <base-button tag="a" href="#" type="success" class="mt-4">
                See case study
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
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
                  Have a brilliant idea but don't know where to start? We got
                  you covered! Our MVP Development solution will assist you
                  through the whole product initiation process.
                </p>
                <base-button tag="a" href="#" class="mt-4">
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
                    Building up from your input and ideas, we craft out
                    clickable prototypes and eye-catching UI designs for the
                    application.
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
                    We won't stop until you are equipped with an MVP to prove
                    your ideas to potential investors and users.
                  </p>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section id="team" class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">KODIN Team</h2>
            <p class="lead text-muted">
              We are a team of young and passionate people who are inspired by
              the potentials technology brings to the world.
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
            <h2 class="display-3 text-white">Why KODIN?</h2>
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
            <h5 class="text-white mt-3">Modern technology</h5>
            <p class="text-white mt-3">
              We always update with the most stable and popular technology to
              deliver maintainable products.
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
            <h5 class="text-white mt-3">Tailor-made solutions</h5>
            <p class="text-white mt-3">
              Not all applications look and function the same way. We take into
              account your specific requirements.
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
            <h5 class="text-white mt-3">On-site support</h5>
            <p class="text-white mt-3">
              We don't believe in long-distance relationships. That's why being
              physically present at your premises during development is a
              priority to us.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Like what you see?</h4>
              <p class="mt-0">
                Drop us a message for partnership possibilities and we will
                reply within 24 hours.
              </p>
              <base-input
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
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss">
.icon .fa-mobile {
  font-size: 2rem !important;
}

html {
  scroll-behavior: smooth;
}
</style>
