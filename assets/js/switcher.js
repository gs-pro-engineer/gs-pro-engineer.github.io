/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/
// Swicher
function toggleSwitcher() {
    var i = document.getElementById('style-switcher');
    if(i.style.left === "-170px") {
		i.style.left = "0px";
	} else {
		i.style.left = "-170px";
	}
};

function setColor(theme) {
    console.log("theme:::", theme);
    document.getElementById('color-opt').href = './assets/css/colors/' + theme + '.css';
    toggleSwitcher(false);
};

function setTheme(theme) {
    document.getElementById('theme-opt').href = './assets/css/' + theme + '.min.css';
    toggleSwitcher(false);
};