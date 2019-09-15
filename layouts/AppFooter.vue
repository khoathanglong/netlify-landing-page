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
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" rel="noopener"
                >About Us</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link" rel="noopener"
                >Blog</nuxt-link
              >
            </li>
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
  }
}
</script>
<style></style>
