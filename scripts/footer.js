fetch('/templates/footer.html')
.then(res => res.text())
.then(text => {
	let script = document.querySelector("script#footer");
	script.insertAdjacentHTML('beforebegin', text);
	script.parentNode.removeChild(script);
});