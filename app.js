// MDN
// DOMContentLoaded ইভেন্টটি যখন স্টাইলশীট, চিত্র এবং সাবফ্রেম লোডিং শেষ হওয়ার জন্য অপেক্ষা না করে প্রাথমিক HTML নথিটি সম্পূর্ণরূপে লোড এবং পার্স করা হয় তখন সক্রিয় হয়৷
// স্টাইলশীট এবং ছবিগুলির মতো সমস্ত নির্ভরশীল সংস্থান সহ পুরো পৃষ্ঠাটি লোড হয়ে গেলে লোড ইভেন্টটি চালু হয়৷


const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener('click', function(){
     if(!btn.classList.contains("slide")){
          btn.classList.add('slide');
          video.pause();
     }else{
          btn.classList.remove("slide");
          video.play();
     }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load',function(){
     preloader.classList.add('hide-preloader');
})