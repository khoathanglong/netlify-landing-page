<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          :src="logo()"
          alt="logo"
          :style="{ width: '50px', height: '50px' }"
        />
      </nuxt-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img src="" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="fa fa-info-circle d-lg-none"></i>
            <span class="nav-link-inner--text">About KODIN</span>
          </a>
          <nuxt-link to="/" class="dropdown-item">
            <i class="ni ni-bulb-61"></i>
            Solutions
          </nuxt-link>
          <nuxt-link to="/" class="dropdown-item">
            <i class="fa fa-cubes"></i>
            Technology
          </nuxt-link>
          <nuxt-link to="/" class="dropdown-item">
            <i class="fa fa-users"></i>
            Team
          </nuxt-link>
        </base-dropdown>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="fa fa-trophy d-lg-none"></i>
            <span class="nav-link-inner--text">Case studies</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-primary rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                <p class="description d-none d-md-inline-block mb-0">
                  Get started with Bootstrap, the world's most popular framework
                  for building responsive sites.
                </p>
              </div>
            </a>
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-warning rounded-circle text-white"
              >
                <i class="ni ni-ui-04"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Components</h5>
                <p class="description d-none d-md-inline-block mb-0">
                  Learn how to use Argon compiling Scss, change brand colors and
                  more.
                </p>
              </div>
            </a>
          </div>
        </base-dropdown>

        <a slot="title" href="#" class="nav-link">
          <i class="fa fa-bookmark d-lg-none"></i>
          <span class="nav-link-inner--text">Blog</span>
        </a>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/kodin.solutions"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.linkedin.com/company/kodin-solutions"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on LinkedIn"
          >
            <i class="fa fa-linkedin"></i>
            <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/kodin_solutions"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href=""
            target="_blank"
            rel="noopener"
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-envelope mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Contact us</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from '@/components/BaseNav'
import BaseDropdown from '@/components/BaseDropdown'
import CloseButton from '@/components/CloseButton'
import whiteLogo from '@/static/logo_kodin_final-09.png'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },

  methods: {
    logo() {
      return whiteLogo
    }
  },
  computed: {
    blogList() {
      return this.$store.state.blogList
    },
    caseStudyList() {
      return this.$store.state.caseStudyList
    }
  }
}
</script>
<style></style>
