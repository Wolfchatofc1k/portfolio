// =========================================================
// DAVID SANTOS — PORTFÓLIO
// SCRIPT.JS
// =========================================================


document.addEventListener("DOMContentLoaded", () => {


    // =====================================================
    // FILTROS DOS PROJETOS
    // =====================================================

    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project-item");


    if (filters.length && projects.length) {

        projects.forEach(project => {

            project.style.transition =
                "opacity .3s ease, transform .3s ease";

        });


        filters.forEach(filter => {

            filter.addEventListener("click", () => {

                // Remover estado ativo
                filters.forEach(item => {
                    item.classList.remove("active");
                });


                // Ativar filtro
                filter.classList.add("active");


                const selectedCategory =
                    filter.dataset.filter;


                projects.forEach(project => {

                    const projectCategory =
                        project.dataset.category;


                    const shouldShow =
                        selectedCategory === "all" ||
                        projectCategory === selectedCategory;


                    if (shouldShow) {

                        project.style.display = "";

                        requestAnimationFrame(() => {

                            project.style.opacity = "1";
                            project.style.transform =
                                "translateY(0)";

                        });

                    } else {

                        project.style.opacity = "0";
                        project.style.transform =
                            "translateY(20px)";


                        setTimeout(() => {

                            if (
                                selectedCategory !== "all" &&
                                project.dataset.category !== selectedCategory
                            ) {

                                project.style.display = "none";

                            }

                        }, 300);

                    }

                });

            });

        });

    }



    // =====================================================
    // SCROLL SUAVE
    // =====================================================

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    // =====================================================
    // ANIMAÇÕES AO ENTRAR NO ECRÃ
    // =====================================================

    const animatedElements =
        document.querySelectorAll(
            `
            .service-card,
            .project-card,
            .project-item,
            .skill,
            .software-item,
            .timeline-item,
            .contact-card
            `
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach((element, index) => {

            element.classList.add("scroll-hidden");

            element.style.transitionDelay =
                `${Math.min(index * 0.06, 0.3)}s`;

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {
            element.classList.add("visible");
        });

    }



    // =====================================================
    // EFEITO SUAVE DO RATO NO HERO
    // =====================================================

    const hero =
        document.querySelector(".hero");


    const heroMark =
        document.querySelector(".hero-mark");


    if (
        hero &&
        heroMark &&
        window.innerWidth > 700
    ) {

        hero.addEventListener("mousemove", event => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;


            heroMark.style.transform =
                `
                translate(
                    ${x * 18}px,
                    ${y * 18}px
                )
                `;

        });


        hero.addEventListener("mouseleave", () => {

            heroMark.style.transform =
                "translate(0, 0)";

        });

    }



    // =====================================================
    // EFEITO DO RATO NOS PROJETOS
    // =====================================================

    const projectImages =
        document.querySelectorAll(".project-image");


    if (window.innerWidth > 700) {

        projectImages.forEach(image => {

            image.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        image.getBoundingClientRect();


                    const x =
                        (event.clientX - rect.left) /
                        rect.width;


                    const y =
                        (event.clientY - rect.top) /
                        rect.height;


                    const moveX =
                        (x - 0.5) * 8;


                    const moveY =
                        (y - 0.5) * 8;


                    const img =
                        image.querySelector("img");


                    if (img) {

                        img.style.transform =
                            `
                            scale(1.045)
                            translate(
                                ${moveX}px,
                                ${moveY}px
                            )
                            `;

                    }

                }
            );


            image.addEventListener(
                "mouseleave",
                () => {

                    const img =
                        image.querySelector("img");


                    if (img) {

                        img.style.transform =
                            "";

                    }

                }
            );

        });

    }



    // =====================================================
    // HEADER — PEQUENA ALTERAÇÃO AO FAZER SCROLL
    // =====================================================

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        let lastScroll = 0;


        window.addEventListener(
            "scroll",
            () => {

                const currentScroll =
                    window.scrollY;


                if (currentScroll > 40) {

                    navbar.classList.add(
                        "navbar-scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "navbar-scrolled"
                    );

                }


                lastScroll =
                    currentScroll;

            },
            {
                passive: true
            }
        );

    }



    // =====================================================
    // ANIMAÇÃO DO HERO
    // =====================================================

    const heroContent =
        document.querySelector(".hero-content");


    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform =
            "translateY(25px)";


        requestAnimationFrame(() => {

            heroContent.style.transition =
                "opacity .8s ease, transform .8s ease";


            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";

        });

    }



    // =====================================================
    // ANO AUTOMÁTICO NO FOOTER
    // =====================================================

    const footerYear =
        document.querySelector(".footer-bottom span");


    if (footerYear) {

        const currentYear =
            new Date().getFullYear();


        footerYear.textContent =
            `© ${currentYear} David Santos. Todos os direitos reservados.`;

    }


});