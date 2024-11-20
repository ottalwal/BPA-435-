document.addEventListener("DOMContentLoaded", function () {});

gsap.to(".digit", {
    top: "-150px",
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
});

gsap.from(".loader-1" , {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
});

gsap.from(".loader-2" , {
    width: 0,
    delay: 1.9,
    duration: 6,
    ease: "power2.inOut",
});

gsap.to(".loader" , {
    background: "none",
    duration: 6,
    duration: 0.1,
});


gsap.to(".loader-2" , 
    {
        x: -75,
        y: 75,
    duration: 0.5,
    },
    "<"
);

gsap.to(".loader" , {
    scale: 500,
    duration: 1,
    delay: 7,
    ease: "power2.inOut"
});

gsap.to(".loader", {
    y: 11250,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});
gsap.to(".loading_screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut"
});
gsap.to(".heroText h1", {
    ease: "power2.inOut",
    duration: 1,
    delay: 9.5,
    y: -45,
    opacity: 1,
})
gsap.to(".heroText h2", {
    ease: "power2.inOut",
    duration: 1,
    delay: 8.5,
    y: -45,
    opacity: 1,
})
