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
                    href=""
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="fa fa-envelope"
                  >
                    Contact us
                  </base-button>
                  <base-button
                    tag="a"
                    href=""
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-bulb-61"
                  >
                    Our solutions
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
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
            <img src="img/theme/promo-1.png" class="img-fluid floating" />
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
                We make sure your end users enjoy unique and delightful
                experience digging through your websites / web applications. Our
                solutions tailor to your business requirements, and not limited
                to:
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
            <div class="card bg-default shadow border-0">
              <img
                v-lazy="'img/theme/img-1-1200x1000.jpg'"
                class="card-img-top"
              />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon
                    points="0,52 583,95 0,95"
                    class="fill-default"
                  ></polygon>
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    class="fill-default"
                  ></polygon>
                </svg>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon
                name="fa fa-mobile"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>

              <h3>Mobile Applications</h3>
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
              <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
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
                <h4 class="display-3 text-white">MVP Development</h4>
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
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">KODIN Team</h2>
            <p class="lead text-muted">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Ryan Tompson</span>
                  <small class="h6 text-muted">Web Developer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-2-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Romina Hadid</span>
                  <small class="h6 text-muted">Marketing Strategist</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Alexander Smith</span>
                  <small class="h6 text-muted">UI/UX Designer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-4-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">John Doe</span>
                  <small class="h6 text-muted">Founder and CEO</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-dribbble"
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
            <h2 class="display-3 text-white">Build something</h2>
            <p class="lead text-white">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice.
            </p>
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
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Building tools</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-ruler-pencil"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Grow your market</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-atom"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Launch time</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Want to work with us?</h4>
              <p class="mt-0">Your project is very important to us.</p>
              <base-input
                class="mt-5"
                alternative
                placeholder="Your name"
                addon-left-icon="ni ni-user-run"
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
</style>
