export const state = () => ({
  blogList: [],
  caseStudyList: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogList = list
  },
  setCaseStudyList(state, list) {
    state.caseStudyList = list
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getCaseStudyList')
  },

  async getBlogPosts({ commit }) {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  },
  async getCaseStudyList({ commit }) {
    const files = await require.context(
      '~/assets/content/caseStudy/',
      false,
      /\.json$/
    )
    const caseStudyList = files.keys().map((key) => {
      const res = files(key)
      console.log(res)
      res.slug = key.slice(2, -5)
      return res
    })
    console.log('caseStudyList', caseStudyList)
    await commit('setCaseStudyList', caseStudyList)
  }
}
