// Select elements and convert HTMLCollection to Array
const segmR = Array.from(document.getElementsByClassName("segmR"));
const segmL = Array.from(document.getElementsByClassName("segmL"));
const rings = Array.from(document.getElementsByClassName("ring"));

// Apply styles to segmR elements
segmR.forEach((segm, i) => {
  const deg = 30 * i;
  segm.style.transform = `rotate(${deg}deg)`;
  segm.style.transformOrigin = "bottom left";
});

// Apply styles to segmL elements
segmL.forEach((segm, i) => {
  const deg = -30 * (i + 1);
  segm.style.transform = `rotate(${deg}deg)`;
  segm.style.transformOrigin = "bottom left";
});

// Apply styles to ring elements
rings.forEach((ring, i) => {
  ring.style.width = `${200 - 50 * i}px`;
  ring.style.height = `${40 - 10 * i}px`;
  ring.style.margin = `${10 - 10 * i}px`;
});

// GSAP timelines
const tl1 = gsap.timeline({
  repeat: -1,
  yoyo: true
});

tl1
  .to('.segmR', {
    scale: 0.5,
    rotate: 0,
    mixBlendMode: 'darken',
    duration: 4,
    ease: 'sine.inOut',
  })
  .to('.corolla', {
    xPercent: -49,
    yPercent: 49,
    duration: 4,
    ease: 'sine.inOut',
  }, "<");

const tl2 = gsap.timeline({
  repeat: -1,
  yoyo: true
});

tl2
  .to('.segmL', {
    scale: 0.5,
    rotate: 0,
    mixBlendMode: 'darken',
    duration: 4,
    ease: 'sine.inOut'
  })
  .to('.corolla', {
    xPercent: -49,
    yPercent: 49,
    duration: 4,
    ease: 'sine.inOut'
  }, "<");
  onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
