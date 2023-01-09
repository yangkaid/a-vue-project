import { shallowRef } from 'vue';
// 白天主题
const dayTheme = {
  fontSize: '20px',
  fontColor: '#f90',
  background: '#eee',
}
// 夜晚主题
const darkTheme = {
  fontSize: '16px',
  fontColor: '#eee',
  background: '#333',
}

// 粉色主题
const pinkTheme = {
  fontSize: '16px',
  fontColor: '#000',
  background: 'pink',
}

const theme = shallowRef({})
export function useTheme() {
  const localTheme = localStorage.getItem('theme')
  theme.value = localTheme ? JSON.parse(localTheme) : dayTheme
  const setDayTheme = () => {
    theme.value = dayTheme
    localStorage.setItem('theme', JSON.stringify(dayTheme))
  }
  const setDarkTheme = () => {
    theme.value = darkTheme
    localStorage.setItem('theme', JSON.stringify(darkTheme))
  }
  const setPinkTheme = () => {
    theme.value = pinkTheme
    localStorage.setItem('theme', JSON.stringify(pinkTheme))
  }
  return {
    theme,
    setDayTheme,
    setDarkTheme,
    setPinkTheme
  }

}
