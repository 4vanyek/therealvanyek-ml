fetch('/templates/nav.html')
.then(res => res.text())
.then(text => {
	let script = document.querySelector("script#nav");
	script.insertAdjacentHTML('beforebegin', text);
	script.parentNode.removeChild(script);
});