<template>
  <el-config-provider
    :locale="currentLocaleLang"
  >
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, watch } from 'vue'
import { useStore } from 'vuex'

import { useLanguage } from '@/hooks/useLanguage'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.params,
      () => {
        if (route.name === '404') return

        store.dispatch('UserAccount/setLanguage', {
          locale: route.params.locale || 'en'
        })
      }
    )

    return {
      ...useLanguage()
    }
  }
})
</script>

<style lang="scss">
@use '@/styles/index';
</style>
