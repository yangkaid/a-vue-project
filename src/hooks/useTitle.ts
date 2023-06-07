import { MaybeRef } from "@vueuse/core";
import { ref, watch } from "vue";

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  const title = ref(newTitle || document.title)
  watch(title, t => {
    if (t !== null) {
      document.title = t
    }
  },
    {
      immediate: true
    }
  )
  return title
}
