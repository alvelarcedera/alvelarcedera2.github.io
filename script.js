const themeButton = document.getElementById('theme-toggle');
let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('portfolio-theme') || 'light';
} catch (error) {
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark-mode', isDark);
  themeButton.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  themeButton.setAttribute('aria-pressed', String(isDark));
}

applyTheme(savedTheme);

themeButton.addEventListener('click', function () {
  const nextTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch (error) {
  }
});
