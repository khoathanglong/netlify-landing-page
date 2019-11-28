<template>
  <section id="case-studies" class="section section-lg">
    <div class="container container-lg text-center">
      <h2 class="display-3">{{ lang.caseStudies }}</h2>
      <p class="lead text-muted">
        {{ lang.subheading }}
      </p>
      <div class="row  mt-5">
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://gcheckin.com/"
              target="_blank"
              :title="lang.gCheckin"
            >
              <img alt="GCheckin" src="img/GCheckin.png" class="card-img" />
            </a>
            <p class="mt-3">{{ lang.gCheckin }}</p>
          </div>
        </div>
        <div class="col-md-6 mb-5 mb-lg-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://meteorites-landing-map.netlify.com/"
              target="_blank"
              :title="lang.dataVisualization"
            >
              <img
                alt="data visualization"
                src="img/data-visualization.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ lang.dataVisualization }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$t('CaseStudies')
    }
  }
}
</script>

<style></style>
