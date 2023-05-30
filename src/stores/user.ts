import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Evan You',
    age: 18,
  }),
  getters: {
    doubleAge(): any {
      return this.age * 2;
    }
  },
  actions: {
    setName(name: string): void {
      this.name = name;
    },
    setAge(age: number): void {
      this.age = age;
    }
  }

});
