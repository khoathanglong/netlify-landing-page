<template>
  <footer class="footer has-cards">
    <div class="container">
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            KODIN
          </div>
          <div class="credits">
            {{ lang.illustrationsBy }}
            <a href="http://www.freepik.com" target="_blank">Freepik</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <base-dropdown
              :title="lang.language"
              direction="up"
              position="right"
              icon="fa fa-globe"
            >
              <li>
                <a href="https://kodin.tech/">{{ lang.english }}</a>
              </li>
              <li>
                <a href="https://kodin.tech/nl/">
                  {{ lang.dutch }}
                </a>
              </li>
            </base-dropdown>
            <!-- <li class="nav-item">
              <nuxt-link to="/" class="nav-link" rel="noopener"
                >About Us</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link" rel="noopener"
                >Blog</nuxt-link
              >
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  computed: {
    lang() {
      return this.$t('AppFooter')
    }
  }
}
</script>
<style lang="scss">
.footer {
  .dropdown-menu {
    padding: 8px;
    font-size: 0.8em;
    line-height: 1.8em;
  }
}
</style>
