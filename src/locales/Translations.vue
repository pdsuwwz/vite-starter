<template>
  <el-dropdown
    class="translations-box"
    :class="{
      'is-dark': dark
    }"
    trigger="click"
    popper-class="translations-box"
    @command="handleChange"
  >
    <span class="icon-outer">
      <!-- Translations<el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon> -->
      <LogoIcon
        :dark="dark"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(localeItem, index) in localesList"
          :key="index"
          :command="localeItem"
        >
          <span class="custom-dropdown-item">
            {{ localeItem.localeName }}
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { localesMapping } from '@/locales'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import LogoIcon from '@/locales/LogoIcon.vue'

export default defineComponent({
  name: 'TranslationsBox',
  components: {
    LogoIcon
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const localesList = ref(localesMapping)
    const handleChange = (targetLocaleItem) => {
      setTimeout(() => {
        const { localeCode } = targetLocaleItem
        router.replace({
          params: {
            ...route.params,
            locale: localeCode
          }
        })
        store.dispatch('UserAccount/setLanguage', {
          locale: localeCode
        })
      })
    }
    return {
      localesList,
      handleChange
    }
  }
})
</script>
<style lang="scss">
.translations-box {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: initial;
  user-select: none;
  &.is-dark {
    color: #495164;
  }
  .icon-outer {
    display: flex;
    align-items: center;
    &:hover > * {
      color: $color-success;
    }
  }
  .custom-dropdown-item {
    white-space: nowrap;
  }
}
</style>
