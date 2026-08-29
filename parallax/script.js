// API -> INTERSECTIONOBSERVER
//OU
// GSAP+ SCROLLTIGGER


  gsap.registerPlugin(scrollTrigger);

  gsap.to("h1",{y:100,scrollTrigge:{
    trigger:".divPai",
    start: "0% 0%",
    end:"100% 100%",
    scrub: 10,
    markers: true
    }
  })