$(document).ready(function() {
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate(
						{
							scrollTop: target.offset().top
						},
						750,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(':focus')) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
});

// // Select DOM items
// const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".menu");
// const menuNav = document.querySelector(".menu-nav");
// const menuBranding = document.querySelector(".menu-branding");
// const navItems = document.querySelectorAll(".nav-item");

// // Set initial state of menu
// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNav.classList.add("show");
//     menuBranding.classList.add("show");
//     navItems.forEach(item => item.classList.add("show"));

//     // Set Menu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNav.classList.remove("show");
//     menuBranding.classList.remove("show");
//     navItems.forEach(item => item.classList.remove("show"));

//     // Set Menu State
//     showMenu = false;
//   }
// }
