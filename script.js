function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();


var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove", function(dets){
      gsap.to(cursor,{
        left:dets.x +20,
        top:dets.y +20,
      })


      var video = document.querySelector("#page1 video")
video.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        width:"100px",
        height:"20px",
        borderRadius:"50px"
    })
    cursor.innerHTML = "soundOn"
})

var video = document.querySelector("#page1 video")
video.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        width:"20px",
        height:"20px",
        borderRadius:"50%"
    })
    cursor.innerHTML = ""

})

var img1 = document.querySelector("#img1")
img1.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        width:"100px",
        height:"20px",
        borderRadius:"50px"
    })
    cursor.innerHTML = "View"
})

img1.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        width:"20px",
        height:"20px",
        borderRadius:"50%"
    })
    cursor.innerHTML = ""
})

var img2 = document.querySelector("#img2")
img2.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        width:"100px",
        height:"20px",
        borderRadius:"50px"
    })
    cursor.innerHTML = "View"
})

img2.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        width:"20px",
        height:"20px",
        borderRadius:"50%"
    })
    cursor.innerHTML = ""
})




var video1 = document.querySelector("#video1")
video1.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        width:"100px",
        height:"20px",
        borderRadius:"50px"
    })
    cursor.innerHTML = "View"
})

video1.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        width:"20px",
        height:"20px",
        borderRadius:"50%"
    })
    cursor.innerHTML = ""
})


var video2 = document.querySelector("#video2")
video2.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        width:"100px",
        height:"20px",
        borderRadius:"50px"
    })
    cursor.innerHTML = "View"
})

video2.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        width:"20px",
        height:"20px",
        borderRadius:"50%"
    })
    cursor.innerHTML = ""
})













})





var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3,
    }
})

tl.to("#page1 h1",{
    x:-100,
},"anim")

tl.to("#page1 h2",{
   x:100,
},"anim")

tl.to("#page1 video",{
    width:"90%",
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -120%",
        end:"top -130%",
        scrub:3,
    }
})

tl2.to("#main",{
    backgroundColor:"#ffff",
})


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -450%",
        end:"top -300%",
        scrub:3,
    }
})

tl3.to("#main",{
  backgroundColor:"#111"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "470px"
        cursor.style.height = "370px"
        cursor.style.borderRadius="0"
        cursor.style.backgroundImage =`url(${att})`
        cursor.style.mixBlendMode ="normal"
    })


    elem.addEventListener("mouseleave", function(){
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage ="none"
        cursor.style.mixBlendMode ="diffrence"
    })
})

var h4 =document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")

h4.forEach(function(elem){
   elem.addEventListener("mousemove", function(){
         purple.style.display = "block"
         purple.style.opacity = "1"
   })

   elem.addEventListener("mouseleave", function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
})
})