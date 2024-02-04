
/**
 * plugin single mounted
 */

import { filterResponse } from '@/store/utils/mixin'

const mixinVuex = store => {
  store.filterResponse = filterResponse
}

export default mixinVuex
