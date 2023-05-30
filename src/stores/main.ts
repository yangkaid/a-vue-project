import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(): any {
      return this.count * 2
    }
  },
  actions: {
    increment(): void {
      this.count++
    }
  }
})
