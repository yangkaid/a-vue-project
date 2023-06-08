export function useStorage(key, defaultValue, options = {}) {
  const {
    shallow = false,
    deep = !shallow,
    listenToStorageChanges = true,
    writeDefaults = true,
    events = ['setItem', 'removeItem']
  } = options

  const state = ref(defaultValue)

  const updateStateFromStorage = () => {
    const storageValue = window.localStorage.getItem(key)
    if (storageValue !== null) {
      state.value = deep ? JSON.parse(storageValue) : storageValue 
    } else if (writeDefaults) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue))
      state.value = defaultValue
    }
  }

  watch(state, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep })
  
  if (listenToStorageChanges) {
    events.forEach(evt => {
     window.addEventListener('storage', event => {
      if (event.key === key) {
        updateStateFromStorage()
      }
    }) 
    })
  }
  
  updateStateFromStorage()
  
  return state 
}
