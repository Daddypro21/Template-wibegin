
let popup = document.querySelector('.overlay');
let close = document.querySelector('.close');
function popupToggle(){
	if(popup.style.display ==='none'){
		popup.style.display='block'
	}else{
		popup.style.display='none'
	}
}

function popupClose(){
	if(popup.style.display ==='block'){
		popup.style.display='none'
	}else{
		popup.style.display ='block'
	}
}