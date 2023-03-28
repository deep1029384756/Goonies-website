const loaderHeading = document.querySelector(".loading__heading");
const loaderText = document.querySelector(".loading__text");
const loader = document.querySelector(".loading__loader");
const homeTitle = document.querySelector(".home__title");
const loading = document.querySelector(".loading");
const galleryButton = document.querySelector(".gallery__button");


let count = 0;
var counter = setInterval(()=>{
  //console.log(count)
  if(count < 101){
    loaderText.textContent = `${count} %`;
    loader.style.top = `${100-count}vh`;
    count++;
  }else{
    clearInterval(counter)
    //loading.classList.add("hide")
  }
},40);


// scroll trigger
gsap.set(".home_bgimg", {
  top: "50%",
  left: "40%",
  xPercent: -50,
  yPercent: -40,
});

gsap.registerPlugin(ScrollTrigger);

const timelineHome = gsap.timeline({
  scrollTrigger: {
     trigger: ".home", 
     scrub: 1,
		pin: true, 
  }
});

timelineHome
  .to(".home_bgimg1", {
   // opacity : 0,
    scale: 1.5
  }, "sameTime")
  .to(".home_bgimg", {
   // opacity : 0,
    scale: 1.5 
  }, "sameTime")


  // opacoty
  gsap.to(".home__images",{
    opacity:0,
    duration:2,
    scrollTrigger:{
      trigger:".plot",
      scrub:2,
      start:"top 90%",
      end:"top 20%"
    }
  })
  
//plot line
gsap.to(".plot__line",{
  height:200,
  duration:2,
  scrollTrigger:{
    trigger:".plot",
    scrub:2
  }
})

//title opacity
gsap.to(".home__title",{
  opacity: 0,
  duration :2,
  ease: 'none',
  scrollTrigger: {
    trigger: '.home__title',
    start: 'top',
    //end: 'top',
    scrub: 1,
  //  pin:true
  }
})

//fiex para
gsap.to(".page1",{
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:".plot",
    scrub:1
  }
})
//danger
gsap.to(".danger",{
  x:-130,
  duration:2,
  scrollTrigger:{
    trigger:".coin",
    scrub :1,
    start:"top 90%",
    end:"top 0%",
    toggleActions : "start resume"
   // markers:true
  }
})

gsap.fromTo(".danger",{x:-130},{
  x:15,
  duration:2,
  scrollTrigger:{
    trigger:".stories",
    scrub :1,
    start:"top 90%",
    end:"top 0%",
   // toggleActions : "start resume"
   // markers:true
  }
})

//plot para
gsap.from(".plot__par",{
  opacity: 0,
  duration:2,
  ease:'none',
  scrollTrigger : {
    trigger: ".plot",
    start : "top 90%",
    end:"top 30%",
    scrub :3,
  }
})
gsap.to(".plot__par",{
  opacity:0,
//  y:300,
  duration:1,
  ease:'none',
  scrollTrigger : {
    trigger: ".goonies",
    start : "top 90%",
    end:"top 20%",
    scrub :3,
  }
})

// dot
//opacity
gsap.to(".header__dot" ,{
  opacity :1,
  duration :2,
  scrollTrigger : {
    trigger: ".plot",
    scrub:1,
  }
})
//for goonies

gsap.to(".header__dot",{

  x :320,
  duration:2,
  scrollTrigger : {
    trigger :".plot",
    scrub:1,
  }
})
document.querySelector(".header__dot").style.color = "blue";
//for stories
gsap.fromTo(".header__dot",{x:320},{
  x:660,
  duration:2,
  scrollTrigger:{
    trigger:".coin",
    scrub:2
  }
})

//for gallery
gsap.fromTo(".header__dot",{x:660},{
  x:980,
  duration:2,
  scrollTrigger:{
    trigger:".hand",
    scrub:2
  }
})

//coin section
//text opacity
ScrollTrigger.create({
  trigger:".coin1",
  start:"top 20%",
  end: "top 90%",
  scrub:10
})
gsap.from(".coin__text",{
 opacity: 1,
 duration:10,
 ease:"none",
 scrollTrigger :{
  trigger : ".coin__text",
  start:"top 90%",
  end: "top 20%",
  scrub:10
 }
})

//coin1 animation

gsap.to(".coin1",{
  y:-600,
  scrollTrigger : {
    trigger: ".coin",
    scrub:1,
  }
})

// //coin2 animation

gsap.to(".coin2",{
  rotation: 360,
  y:650,
  scrollTrigger : {
    trigger: ".coin",
    scrub:1,
  }
})

//coin3 animation
gsap.to(".coin3",{
  y:550,
  rotation:320,
  scrollTrigger : {
    trigger: ".coin",
    scrub:3,
  }
})

//coin3 animation
gsap.to(".coin4",{
  y:-550,
  rotation:320,
  scrollTrigger : {
    trigger: ".coin",
    scrub:3,
  }
})

//key animation
gsap.from(".key",{
  rotation: 90,
 // y:-650,
  duration:5,
  scrollTrigger : {
    trigger: ".key",
    scrub:1,
    start:"top 90%",
    end: "top 20%",
  }
})

//hands section
gsap.from(".hand__hands",{
  y:100,
  duration :5,
  scrollTrigger:{
    trigger:".hand__hands",
    scrub:2
  }
})

gsap.from(".hand__danger",{
  scale:0.5,
  duration: 5,
  scrollTrigger:{
    trigger:".hand__danger",
    scrub:2
  }
})

  //footer

gsap.from(".footer__line",{
  height:300,
  duration:1,
  scrollTrigger:{
    trigger:".footer",
    scrub:2,
    start:"top 90%",
    end:"top 10%"
  }
})

gsap.to(".footer__row1",{
  opacity:1,
  duration:1,
  scrollTrigger:{
    trigger:".footer",
    scrub:1,
    //markers:true,
    start:"top 60%",
    end:"top 20%"
  }
})

//gallery
gsap.from(".opacity",{
  opacity:0,
  duration:10,
  scrollTrigger:{
    trigger:".gallery",
    scrub:7,
    start:"top 90%",
    end:"top 10%"
  }
})

gsap.from(".opacity1",{
  opacity:0,
  duration:10,
  scrollTrigger:{
    trigger:".gallery",
    scrub:10,
    start:"top 80%",
    end:"top 10%"
  }
})


var galleryTimeline = gsap.timeline({
  //play:true,
  // paused:true,
  id:"nav",
  scrollTrigger:{
   // paused:true,
    trigger:".gallery",
 //   scrub:2
  }
});
galleryTimeline.from(".anim",{
  id:"nav1",
  //paused:true,
  height:100,
  width:100,
  x:200,
  duration:3,
},"sametime").from(".anim1",{
  //paused:true,
  height:50,
  width:50,
  x:200,
  duration:3,
},"sametime1").from(".anim3",{
  //paused:true,
  height:20,
  width:10,
  y:200,
  duration:1
},"sametime")
galleryTimeline.from(".anim4",{
  //paused:true,
  height:100,
  width:100,
  x:200,
  duration:3,
},"sametime2").from(".anim5",{
  //paused:true,
  height:50,
  width:50,
  x:200,
  duration:3,
},"sametime").from(".anim6",{
  //paused:true,
  height:20,
  width:10,
  y:200,
  duration:1
},"sametime1")
galleryTimeline.from(".anim7",{
  //paused:true,
  height:100,
  width:100,
  x:200,
  duration:3,
},"sametime").from(".anim8",{
  //paused:true,
  height:50,
  width:50,
  x:200,
  duration:3,
},"sametime1").from(".anim9",{
  //paused:true,
  height:20,
  width:10,
  y:200,
  duration:1
},"sametime")
galleryTimeline.from(".anim10",{
  //paused:true,
  height:100,
  width:100,
  x:200,
  duration:3,
},"sametime2").from(".anim11",{
  //paused:true,
  height:50,
  width:50,
  x:200,
  duration:3,
},"sametime").from(".anim12",{
  //paused:true,
  height:20,
  width:10,
  y:200,
  duration:1
},"sametime2")

galleryTimeline.pause(2);
//var paused = galleryTimeline.from(".anim1",{}).paused();

//galleryTimeline.paused()
console.log();
// ScrollTrigger.getById("nav").enable();
galleryButton.addEventListener("click",()=>{
  // var c = ScrollTrigger.getById("nav1");
  // c.play();
  //ScrollTrigger. getById("nav1"). enable()
 // ScrollTrigger.getById("nav").toggleActions= "play";
 // galleryTimeline.from(".anim",{}).resume()
  // // galleryTimeline.from(".anim",{
  // //   height:100,
  // //   width:100,
  // //   x:200,
  // //   duration:3,
  // // },"sametime")
  // //.from(".anim1",{
  // //   paused:true,
  // //   height:50,
  // //   width:50,
  // //   x:200,
  // //   duration:3,
  // // },"sametime1").from(".anim3",{
  // //   paused:true,
  // //   height:20,
  // //   width:10,
  // //   y:200,
  // //   duration:1
  // // },"sametime")
  // // galleryTimeline.from(".anim4",{
  // //   paused:true,
  // //   height:100,
  // //   width:100,
  // //   x:200,
  // //   duration:3,
  // // },"sametime2").from(".anim5",{
  // //   paused:true,
  // //   height:50,
  // //   width:50,
  // //   x:200,
  // //   duration:3,
  // // },"sametime").from(".anim6",{
  // //   paused:true,
  // //   height:20,
  // //   width:10,
  // //   y:200,
  // //   duration:1
  // // },"sametime1")
  // // galleryTimeline.from(".anim7",{
  // //   paused:true,
  // //   height:100,
  // //   width:100,
  // //   x:200,
  // //   duration:3,
  // // },"sametime").from(".anim8",{
  // //   paused:true,
  // //   height:50,
  // //   width:50,
  // //   x:200,
  // //   duration:3,
  // // },"sametime1").from(".anim9",{
  // //   paused:true,
  // //   height:20,
  // //   width:10,
  // //   y:200,
  // //   duration:1
  // // },"sametime")
  // // galleryTimeline.from(".anim10",{
  // //   paused:true,
  // //   height:100,
  // //   width:100,
  // //   x:200,
  // //   duration:3,
  // // },"sametime2").from(".anim11",{
  // //   paused:true,
  // //   height:50,
  // //   width:50,
  // //   x:200,
  // //   duration:3,
  // // },"sametime").from(".anim12",{
  // //   paused:true,
  // //   height:20,
  // //   width:10,
  // //   y:200,
  // //   duration:1
  // // },"sametime2")
    galleryTimeline.play()

  console.log("hii")
  galleryTimeline.from(".anim",{
    id:"nav1",
   // paused:true,
    height:100,
    width:100,
    x:200,
    duration:3,
  })
  // },"sametime").from(".anim1",{
  //  // paused:true,
  //   height:50,
  //   width:50,
  //   x:200,
  //   duration:3,
  // },"sametime1").from(".anim3",{
  //  // paused:true,
  //   height:20,
  //   width:10,
  //   y:200,
  //   duration:1
  // },"sametime")
  // galleryTimeline.from(".anim4",{
  //  // paused:true,
  //   height:100,
  //   width:100,
  //   x:200,
  //   duration:3,
  // },"sametime2").from(".anim5",{
  //  // paused:true,
  //   height:50,
  //   width:50,
  //   x:200,
  //   duration:3,
  // },"sametime").from(".anim6",{
  //  // paused:true,
  //   height:20,
  //   width:10,
  //   y:200,
  //   duration:1
  // },"sametime1")
  // galleryTimeline.from(".anim7",{
  // //  paused:true,
  //   height:100,
  //   width:100,
  //   x:200,
  //   duration:3,
  // },"sametime").from(".anim8",{
  //  // paused:true,
  //   height:50,
  //   width:50,
  //   x:200,
  //   duration:3,
  // },"sametime1").from(".anim9",{
  //  // paused:true,
  //   height:20,
  //   width:10,
  //   y:200,
  //   duration:1
  // },"sametime")
  // galleryTimeline.from(".anim10",{
  //   //paused:true,
  //   height:100,
  //   width:100,
  //   x:200,
  //   duration:3,
  // },"sametime2").from(".anim11",{
  //  // paused:true,
  //   height:50,
  //   width:50,
  //   x:200,
  //   duration:3,
  // },"sametime").from(".anim12",{
  //  // paused:true,
  //   height:20,
  //   width:10,
  //   y:200,
  //   duration:1
  // },"sametime2")

})


// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]',{
  speed:5000,
	speedAsDuration: true
});

// // gallery animation
gsap.to(".goonies__col",{y:-150,stagger:0.3,
scrollTrigger:{
  trigger:".goonies",
}
})

//music audio
var callAudio = document.querySelector(".call_audio");
var audioBox =document.querySelector(".home__audio-text");
var audio = new Audio("audio.mp3");
//audio.play();

// callAudio.addEventListener("click",()=>{
//   if(audioBox.classList.contains("show"))audioBox.classList.remove("show")
//   else audioBox.classList.add("show")
// })

var play= document.querySelector(".play");
var pause =  document.querySelector(".pause")
play.addEventListener("click",()=>{
  wavesurfer.playPause();
  document.querySelector(".play").classList.add("hide");
    document.querySelector(".pause").classList.remove("hide");
})
pause.addEventListener("click",()=>{
  wavesurfer.playPause();
  document.querySelector(".play").classList.remove("hide");
    document.querySelector(".pause").classList.add("hide");
})

var music =document.querySelector(".music");
//waves
var wavesurfer = WaveSurfer.create({
  container: '.home__wave',
  waveColor:"#dde5ec",
  progressColor:"grey",
  responsive : true,
  barWidth:4,
  height:50,
  hideScrollbar : true,
  scrollParent:true,
  barRadius : 4,
});

wavesurfer.load("audio.mp3")
var mute =  document.querySelector(".mute")

mute.addEventListener("click",()=>{
  document.querySelector('.nomute').classList.remove("hide")
  mute.classList.add("hide")
  wavesurfer.toggleMute();
})
document.querySelector('.nomute').addEventListener("click",()=>{
  document.querySelector('.nomute').classList.add("hide")
  mute.classList.remove("hide")
  wavesurfer.toggleMute();
})


callAudio.addEventListener("click",()=>{
  audioBox.classList.toggle("show");
})
