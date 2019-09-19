<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="kodin-white.png" alt="logo" :style="{ width: '50px', height: '50px' }" />
      </nuxt-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-info-circle d-lg-none"></i>
            <span class="nav-link-inner--text">About KODIN</span>
          </a>
          <a href="#solutions" class="dropdown-item">
            <i class="ni ni-bulb-61"></i>
            Solutions
          </a>
          <a href="#team" class="dropdown-item">
            <i class="fa fa-users"></i>
            Team
          </a>
          <a href="#contact" class="dropdown-item">
            <i class="fa fa-envelope"></i>
            Contact
          </a>
        </base-dropdown>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-trophy d-lg-none"></i>
            <span class="nav-link-inner--text">Case studies</span>
          </a>
          <div class="dropdown-menu-inner" v-for="study in caseStudyList" :key="study.title">
            {{ blog }}
            <a :href="`caseStudy/${study.title}`" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ study.title }}</h6>
                <p class="description d-none d-md-inline-block mb-0">{{ study.description }}</p>
              </div>
            </a>
          </div>
        </base-dropdown>

        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="fa fa-trophy d-lg-none"></i>
            <span class="nav-link-inner--text">Blog</span>
          </a>
          <div class="dropdown-menu-inner" v-for="blog in blogList" :key="blog.title">
            <a :href="`blog/${blog.title}`" class="media d-flex align-items-center">
              <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">{{ blog.title }}</h6>
                <p class="description d-none d-md-inline-block mb-0">{{ blog.description }}</p>
              </div>
            </a>
          </div>
        </base-dropdown>
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
          <a href="#contact" rel="noopener" class="btn btn-neutral btn-icon">
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

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  async asyncData({ params, payload }) {
    const blogFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )

    const caseStudyFiles = await require.context(
      '~/assets/content/caseStudy/',
      false,
      /\.json$/
    )
    const blogPosts = blogFiles.keys().map((key) => {
      const res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    const caseStudies = caseStudyFiles.keys().map((key) => {
      const res = caseStudyFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })

    const blogList = []
    const caseStudyList = []
    for (let i; i < blogPosts.length; i++) {
      const blog = await require(`~/assets/content/blog/${blogPosts[i]}.json`)
      blogList.push(blog)
    }

    for (let i; i < caseStudies.length; i++) {
      const caseStudy = await require(`~/assets/content/caseStudy/${caseStudies[i]}.json`)
      caseStudyList.push(caseStudy)
    }
    return { blogList, caseStudyList }
  },
}
</script>
<style></style>
