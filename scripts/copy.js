// use a class selector if available 
let blocks = document.querySelectorAll("precopy");

blocks.forEach(block => {

  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {

    let button = document.createElement("button");
	button.classList.add("copy-button");
    
    button.innerHTML = `<i class="fa-solid fa-copy"></i>`;
    
    block.appendChild(button);

    button.addEventListener("click", async () => {
    
      await copyCode(block);
      
    });

  }

});

async function copyCode(block) {

	const copyIconClass = "fa-solid fa-copy";
	const copiedIconClass = "fa-solid fa-check";
  
	let code = block.querySelector("pre");
	let text = code.innerText;
  
	await navigator.clipboard.writeText(text);
  
	// get button reference
	let button = block.querySelector("button");
  
	button.innerHTML = `<i class="${copiedIconClass}"></i>`;
  
	setTimeout(() => {
	  button.innerHTML = `<i class="${copyIconClass}"></i>`;
	}, 1000);
  
  }