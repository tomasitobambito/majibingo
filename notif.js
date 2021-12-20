function showNotif(text) { //hacky css shenanigans
	let n=document.getElementById("notif");
	n.innerHTML=text;
	n.style.display="block";
	n.style.opacity="100%"; //instantly force opacity to 100% - doing so right as you set the display property will cancel the fade-in animation.
	
	setTimeout(function() {
		n.style.opacity="0"; //two seconds later, start fading to 0
	}, 2000);
	
	setTimeout(function() {
		n.style.display="none"; //seven seconds later (five after it starts to fade) hide the element. this aligns with the css transition property being set to 5s. this is optional but it's good practice (i think idk)
	}, 7000);
}
