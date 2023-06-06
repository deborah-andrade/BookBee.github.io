function mobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuList = document.querySelector(".menu ul");
    const menuLinks = document.querySelectorAll(".menu li");
    const activeClass = "active";
  
    if (mobileMenu) {
        handleClick();
    } else {
        return 0;
    }
  
    function handleClick() {
        menuList.classList.toggle(activeClass);
        mobileMenu.classList.toggle(activeClass);
        animateLinks();
    }
  
    function animateLinks() {
        menuLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
  }