import { ref } from 'vue';

const THEME_KEY = 'theme';

const isDark = ref(document.documentElement.classList.contains('dark'));

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'default');
  }

  return { isDark, toggleTheme };
}
