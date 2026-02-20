
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");
        const navOverlay = document.getElementById("navOverlay");
        const closeMenu = document.getElementById("closeMenu");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.add("active");
            navOverlay.classList.add("active");
        });

        closeMenu.addEventListener("click", closeNav);
        navOverlay.addEventListener("click", closeNav);

        function closeNav() {
            navLinks.classList.remove("active");
            navOverlay.classList.remove("active");
            document.body.style.overflow = "auto";
        }

        menuToggle.addEventListener("click", () => {
            navLinks.classList.add("active");
            navOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });


           // زر العودة للأعلى
           const scrollBtn = document.getElementById('scrollTopBtn');
           window.addEventListener('scroll', () => {
               scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
           });
           scrollBtn.addEventListener('click', () => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
           });
   
   
           // زر الطوارئ العائم
   
           const toggleBtn = document.getElementById("emergencyToggle");
           const menu = document.getElementById("emergencyMenu");
   
           toggleBtn.addEventListener("click", () => {
               menu.style.display = menu.style.display === "flex" ? "none" : "flex";
           });
   
           // إغلاق القائمة عند الضغط خارجها
           document.addEventListener("click", function (e) {
               if (!e.target.closest(".floating-wrapper")) {
                   menu.style.display = "none";
               }
           });
   
   
           // إخفاء الهيدر
   
           let lastScrollTop = 0;
           const header = document.querySelector("header");
   
           window.addEventListener("scroll", function () {
   
               const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   
               if (currentScroll > lastScrollTop && currentScroll > 100) {
                   // النزول للأسفل
                   header.classList.add("hide-header");
               } else {
                   // الصعود للأعلى
                   header.classList.remove("hide-header");
               }
   
               lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
           });
   