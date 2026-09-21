document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PREMIUM LOADER
    ========================================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add("hide");
            }
        }, 2000);
    });


    /* =========================================
       HERO TYPEWRITER — FULL LOOP
    ========================================= */

    const heroTitle = document.getElementById("hero-title");
    const heroRole = document.getElementById("hero-role");

    const nameText = "Hi, I'm Hadi";
    const roleText = "Frontend Developer";

    let nameIndex = 0;
    let roleIndex = 0;

    function typeName() {

        if (!heroTitle) return;

        if (nameIndex < nameText.length) {

            heroTitle.textContent +=
                nameText.charAt(nameIndex);

            nameIndex++;

            setTimeout(typeName, 100);

        } else {

            setTimeout(typeRole, 600);
        }
    }


    function typeRole() {

        if (!heroRole) return;

        if (roleIndex < roleText.length) {

            heroRole.textContent +=
                roleText.charAt(roleIndex);

            roleIndex++;

            setTimeout(typeRole, 80);

        } else {

            setTimeout(deleteRole, 1800);
        }
    }


    function deleteRole() {

        if (!heroRole) return;

        if (roleIndex > 0) {

            roleIndex--;

            heroRole.textContent =
                roleText.substring(0, roleIndex);

            setTimeout(deleteRole, 60);

        } else {

            setTimeout(deleteName, 500);
        }
    }


    function deleteName() {

        if (!heroTitle) return;

        if (nameIndex > 0) {

            nameIndex--;

            heroTitle.textContent =
                nameText.substring(0, nameIndex);

            setTimeout(deleteName, 60);

        } else {

            setTimeout(typeName, 500);
        }
    }


    typeName();


    /* =========================================
       MOBILE MENU
       ACCESSIBILITY + ESCAPE SUPPORT
    ========================================= */

    const menuBtn =
        document.querySelector(".menu-btn");

    const navbar =
        document.querySelector(".navbar");


    if (menuBtn && navbar) {

        navbar.id = "main-navigation";


        function closeMobileMenu() {

            navbar.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }


        function openMobileMenu() {

            navbar.classList.add("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "true"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        }


        menuBtn.addEventListener("click", () => {

            const isOpen =
                navbar.classList.contains("active");

            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();
            }
        });


        const navLinks =
            document.querySelectorAll(".navbar a");


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                closeMobileMenu();
            });
        });


        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {

                closeMobileMenu();
            }
        });
    }


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const header =
        document.querySelector(".header");


    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");
        }
    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =========================================
       ACTIVE NAVBAR
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar a");


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");
            }
        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");
            }
        });
    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );


    updateActiveNav();


    /* =========================================
       SCROLL PROGRESS
    ========================================= */

    const progressBar =
        document.getElementById("scroll-progress");


    function updateScrollProgress() {

        if (!progressBar) return;


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {

            progressBar.style.width = "0%";

            return;
        }


        const scrollPercent =
            (scrollTop / documentHeight) * 100;


        progressBar.style.width =
            scrollPercent + "%";
    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".about, .skill-card, .service-card, .project-card, .contact-box, .contact-form"
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");
    });


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        "IntersectionObserver" in window &&
        !prefersReducedMotion
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    });
                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");
        });
    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    let backToTop =
        document.getElementById("backToTop");


    if (!backToTop) {

        backToTop =
            document.createElement("button");

        backToTop.id = "backToTop";

        backToTop.type = "button";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        backToTop.innerHTML =
            '<i class="fas fa-arrow-up" aria-hidden="true"></i>';

        document.body.appendChild(backToTop);
    }


    function updateBackToTop() {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");
        }
    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    updateBackToTop();


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior:
                prefersReducedMotion
                    ? "auto"
                    : "smooth"
        });
    });


    /* =========================================
       BUTTON RIPPLE EFFECT
    ========================================= */

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                if (prefersReducedMotion) return;


                const ripple =
                    document.createElement("span");

                ripple.classList.add("ripple");


                const rect =
                    this.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                ripple.style.left =
                    x + "px";

                ripple.style.top =
                    y + "px";


                this.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 600);
            }
        );
    });


    /* =========================================
       HERO IMAGE MOUSE EFFECT
    ========================================= */

    const heroImage =
        document.querySelector(
            ".home-image img"
        );


    if (heroImage) {

        document.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <= 700 ||
                    prefersReducedMotion
                ) {
                    return;
                }


                const x =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 10;


                const y =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 10;


                heroImage.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );


                heroImage.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );
            }
        );
    }


    /* =========================================
       REAL CONTACT FORM — FORMSPREE
    ========================================= */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const button =
                    contactForm.querySelector(".btn");


                if (!button) return;


                const originalText =
                    button.textContent.trim();


                button.disabled = true;

                button.textContent =
                    "Sending...";


                try {

                    const response =
                        await fetch(
                            contactForm.action,
                            {
                                method: "POST",

                                body:
                                    new FormData(
                                        contactForm
                                    ),

                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    if (response.ok) {

                        button.textContent =
                            "Message Sent ✓";


                        contactForm.reset();


                        setTimeout(() => {

                            button.disabled =
                                false;

                            button.textContent =
                                originalText;

                        }, 2000);


                    } else {

                        button.textContent =
                            "Failed to Send";


                        setTimeout(() => {

                            button.disabled =
                                false;

                            button.textContent =
                                originalText;

                        }, 2500);
                    }


                } catch (error) {

                    button.textContent =
                        "Connection Error";


                    setTimeout(() => {

                        button.disabled =
                            false;

                        button.textContent =
                            originalText;

                    }, 2500);
                }

            }
        );
    }


    /* =========================================
       PROJECT CARD Z-INDEX
    ========================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "20";
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";
            }
        );
    });


    /* =========================================
       SERVICES 3D TILT
    ========================================= */

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );


    serviceCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth <= 700 ||
                    prefersReducedMotion
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -5;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 5;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";
            }
        );
    });

});