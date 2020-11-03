const hamberger = document.querySelector(".hamberger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links li');

hamberger.addEventListener("click" , () => 
{
	navlinks.classList.toggle("open");
}
);