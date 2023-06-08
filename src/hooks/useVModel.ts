import { computed, getCurrentInstance, Ref } from "vue";

// 生成useVModel函数的类型定义
// type useVModelFn = (props: any, name: string) => Ref<any>
export function useVModel(props: any, name: string): Ref<any> {
  const emit = getCurrentInstance()?.emit;

  return computed({
    get() {
      return props[name];
    },
     set(val) {
      if (emit) {
        emit(`update:${name}`, val);
      }
     }
  })
}
