<template>
  <div>Hello Nuxt!
  </div>
</template>

<script>
import { test } from '~/store'
import { ref, computed } from '@vue/composition-api'
test()
export default defineComponent({
  setup() {
    test()
    const variable = ref(null)
    const comp = computed(() => {
      return variable.value
    })
    return {
      variable,
      comp
    }
  }
})
</script>
