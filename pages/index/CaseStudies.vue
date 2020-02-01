<template>
  <section id="case-studies" class="section section-lg">
    <div class="container container-lg text-center">
      <h2 class="display-3">{{ lang.caseStudies }}</h2>
      <p class="lead text-muted">
        {{ lang.subheading }}
      </p>
      <div class="row mt-5">
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://www.babebeauspa.com/"
              target="_blank"
              :title="lang.spaLandingPage"
            >
              <img
                :alt="lang.spaLandingPage"
                src="img/spa.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ lang.spaLandingPage }}</p>
          </div>
        </div>
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
      </div>
      <div class="row mt-5">
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://www.ruiskumestari.fi/"
              target="_blank"
              :title="lang.ruiskumestari"
            >
              <img
                :alt="lang.ruiskumestari"
                src="img/ruiskumestari.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ lang.ruiskumestari }}</p>
          </div>
        </div>
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://www.tamsuchungcu.com/"
              target="_blank"
              :title="lang.tamsuchungcu"
            >
              <img
                :alt="lang.tamsuchungcu"
                src="img/tamsuchungcu.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ lang.tamsuchungcu }}</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://meteorites-landing-map.netlify.com/"
              target="_blank"
              :title="`${lang.dataVisualization} #1`"
            >
              <img
                alt="data visualization"
                src="img/data-visualization.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ `${lang.dataVisualization} #1` }}</p>
          </div>
        </div>
        <div class="col-md-4 mb-5 mb-lg-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://force-directed-graph-kodin.netlify.com/"
              target="_blank"
              :title="`${lang.dataVisualization} #2`"
            >
              <img
                alt="data visualization"
                src="img/force-directed-graph.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ `${lang.dataVisualization} #2` }}</p>
          </div>
        </div>
        <div class="col-md-4 mb-5 mb-lg-0">
          <div class="card card-lift--hover shadow border-0">
            <a
              href="https://heatmap-kodin.netlify.com/"
              target="_blank"
              :title="`${lang.dataVisualization} #3`"
            >
              <img
                alt="data visualization"
                src="img/heatmap.png"
                class="card-img"
              />
            </a>
            <p class="mt-3">{{ `${lang.dataVisualization} #3` }}</p>
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
