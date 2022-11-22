// Light/Dark toggle
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.theme-toggle');
const toggleWrapper = document.querySelector('.toggle-wrapper');

const enableDarkMode = () => {
	document.body.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
	document.body.classList.remove('dark-mode');
	localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
	enableDarkMode();
	darkModeToggle.classList.add('enabled');
	toggleWrapper.classList.toggle('enabled');
}

darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	darkModeToggle.classList.toggle('enabled');
	toggleWrapper.classList.toggle('enabled');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
