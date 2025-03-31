// Top Carousel Section

let topcarouselindex = 0;
const topcarouseltotalSlides = document.querySelectorAll('.topcarouselslide').length;
const topcarouseldots = document.querySelectorAll('.topcarouseldot');

function topcarouselmoveSlide(step) {
    topcarouselindex += step;
    if (topcarouselindex < 0) topcarouselindex = 0;
    if (topcarouselindex > topcarouseltotalSlides - 3) topcarouselindex = topcarouseltotalSlides - 3;

    topcarouselupdateCarousel();
}

function topcarouselcurrentSlide(n) {
    topcarouselindex = n;
    topcarouselupdateCarousel();
}

    function topcarouselupdateCarousel() {
    const topcarousel = document.querySelector('.top-carousel');
    const topcarouselslideWidth = document.querySelector('.topcarouselslide').offsetWidth;

    // Move the carousel
    topcarousel.style.transform = `translateX(-${topcarouselindex * (100 / 3)}%)`;

    // Update active dot
    topcarouseldots.forEach(topcarouseldots => topcarouseldots.classList.remove('active'));
    topcarouseldots[topcarouselindex].classList.add('active');
}

// Set the first dot as active
topcarouselupdateCarousel();


//Apply Now Carousel section

  let applynowindex = 0;
  const applynowvisibleSlides = 3; // Number of slides visible at a time
  const applynowCarousel = document.querySelector('.apply-now-carousel');
  const applynowslides = document.querySelectorAll('.apply-now-carousel .applynowslide');
  const applynowtotalSlides = applynowslides.length;

  function applynowmoveSlide(step) {
    applynowindex += step;

      // Keep the index within bounds
      if (applynowindex < 0) applynowindex = applynowtotalSlides - applynowvisibleSlides;
      if (applynowindex > applynowtotalSlides - applynowvisibleSlides) applynowindex = 0;

      applynowupdateCarousel();
  }

  function applynowupdateCarousel() {
      const applynowslideWidth = applynowslides[0].offsetWidth + 10; // Include the gap
      applynowCarousel.style.transform = `translateX(-${applynowindex * applynowslideWidth}px)`;
  }

  // Attach event listeners to buttons
  document.getElementById('applynowprevBtn').addEventListener('click', () => applynowmoveSlide(-1));
  document.getElementById('applynownextBtn').addEventListener('click', () => applynowmoveSlide(1));

  // Auto-slide every 3 seconds (optional)
  setInterval(() => applynowmoveSlide(1), 3000);
  applynowupdateCarousel();

  //Shop Now Carousel Container Section

  let shopnowindex = 0;
  const shopnowvisibleSlides = 3; // Number of slides visible at a time
  const shopnowCarousel = document.querySelector('.shop-now-carousel');
  const shopnowslides = document.querySelectorAll('.shop-now-carousel .shopnowslide');
  const shopnowtotalSlides = shopnowslides.length;

  function shopnowmoveSlide(step) {
    shopnowindex += step;

      // Keep the index within bounds
      if (shopnowindex < 0) shopnowindex = shopnowtotalSlides - shopnowvisibleSlides;
      if (shopnowindex > shopnowtotalSlides - shopnowvisibleSlides) shopnowindex = 0;

      shopnowupdateCarousel();
  }

  function shopnowupdateCarousel() {
      const shopnowslideWidth = shopnowslides[0].offsetWidth + 10; // Include the gap
      shopnowCarousel.style.transform = `translateX(-${shopnowindex * shopnowslideWidth}px)`;
  }

  // Attach event listeners to buttons
  document.getElementById('shopnowprevBtn').addEventListener('click', () => shopnowmoveSlide(-1));
  document.getElementById('shopnownextBtn').addEventListener('click', () => shopnowmoveSlide(1));

  // Auto-slide every 3 seconds (optional)
  setInterval(() => shopnowmoveSlide(1), 3000);
  shopnowupdateCarousel();

  //Bumper-offer section

 let bumperofferindex = 0;
 const bumperoffervisibleSlides = 6; // 6 slides visible at a time
 const bumperofferCarousel = document.querySelector('.bumper-offer-carousel');
 const bumperofferslides = document.querySelectorAll('.bumper-offer-carousel .bumperofferslide');
 const bumperoffertotalSlides = bumperofferslides.length;
 
 function bumperoffermoveSlide(step) {
    bumperofferindex += step;
 
     // Prevent out-of-bound scrolling
     if (bumperofferindex < 0) bumperofferindex = 0;
     if (bumperofferindex > bumperoffertotalSlides - bumperoffervisibleSlides) bumperofferindex = bumperoffertotalSlides - bumperoffervisibleSlides;
 
     bumperofferupdateCarousel();
 }
 
 function bumperofferupdateCarousel() {
     const bumperofferslideWidth = bumperofferslides[0].offsetWidth + 10; // Include gap
     bumperofferCarousel.style.transform = `translateX(-${bumperofferindex * bumperofferslideWidth}px)`;
 }
 
 // Attach event listeners to buttons
 document.getElementById('bumperofferprevBtn').addEventListener('click', () => bumperoffermoveSlide(-1));
 document.getElementById('bumperoffernextBtn').addEventListener('click', () => bumperoffermoveSlide(1));
 
 bumperofferupdateCarousel();
 
// Products video grid section

const videos = document.querySelectorAll(".video");
const muteButtons = document.querySelectorAll(".mute-btn");
const playOverlays = document.querySelectorAll(".play-overlay");
const videoGrid = document.querySelector(".video-grid-item");
videos.forEach((video, index) => {
  video.addEventListener("mouseenter", () => {
      video.play();
      playOverlays[index].style.display = "none";
  });

  video.addEventListener("mouseleave", () => {
      video.pause();
      playOverlays[index].style.display = "block";
  });
});

// Mute/Unmute button functionality
muteButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
      videos[index].muted = !videos[index].muted;
      btn.textContent = videos[index].muted ? "🔇" : "🔊";
  });
});

 //Latest Electronics section

 let latestelectronicsindex = 0;
const latestelectronicsvisibleSlides = 6; // 6 slides visible at a time
const latestelectronicsCarousel = document.querySelector('.latest-electronics-carousel');
const latestelectronicsslides = document.querySelectorAll('.latest-electronics-carousel .latestelectronicsslide');
const latestelectronicstotalSlides = latestelectronicsslides.length;

function latestelectronicsmoveSlide(step) {
    latestelectronicsindex += step;

    // Prevent out-of-bound scrolling
    if (latestelectronicsindex < 0) latestelectronicsindex = 0;
    if (latestelectronicsindex > latestelectronicstotalSlides - latestelectronicsvisibleSlides) latestelectronicsindex = latestelectronicstotalSlides - latestelectronicsvisibleSlides;

    latestelectronicsupdateCarousel();
}

function latestelectronicsupdateCarousel() {
    const latestelectronicsslideWidth = latestelectronicsslides[0].offsetWidth + 10; // Include gap
    latestelectronicsCarousel.style.transform = `translateX(-${latestelectronicsindex * latestelectronicsslideWidth}px)`;
}

// Attach event listeners to buttons
document.getElementById('latestelectronicsprevBtn').addEventListener('click', () => latestelectronicsmoveSlide(-1));
document.getElementById('latestelectronicsnextBtn').addEventListener('click', () => latestelectronicsmoveSlide(1));

latestelectronicsupdateCarousel();


// Home-Lifestyle corner carousel

let homelifestylecornerindex = 0;
const homelifestylecornervisibleSlides = 6; // 6 slides visible at a time
const homelifestylecornerCarousel = document.querySelector('.home-lifestyle-corner-carousel');
const homelifestylecornerslides = document.querySelectorAll('.home-lifestyle-corner-carousel .homelifestylecornerslide');
const homelifestylecornertotalSlides = homelifestylecornerslides.length;

function homelifestylecornermoveSlide(step) {
    homelifestylecornerindex += step;

   // Prevent out-of-bound scrolling
   if (homelifestylecornerindex < 0) homelifestylecornerindex = 0;
   if (homelifestylecornerindex > homelifestylecornertotalSlides - homelifestylecornervisibleSlides) homelifestylecornerindex = homelifestylecornertotalSlides - homelifestylecornervisibleSlides;

   homelifestylecornerupdateCarousel();
}

function homelifestylecornerupdateCarousel() {
   const homelifestylecornerslideWidth = homelifestylecornerslides[0].offsetWidth + 10; // Include gap
   homelifestylecornerCarousel.style.transform = `translateX(-${homelifestylecornerindex * homelifestylecornerslideWidth}px)`;
}

// Attach event listeners to buttons
document.getElementById('homelifestylecornerprevBtn').addEventListener('click', () => homelifestylecornermoveSlide(-1));
document.getElementById('homelifestylecornernextBtn').addEventListener('click', () => homelifestylecornermoveSlide(1));

homelifestylecornerupdateCarousel();

// Curated fashion collection carousel

 let curatedfashioncollectionindex = 0;
const curatedfashioncollectionvisibleSlides = 6; // 6 slides visible at a time
const curatedfashioncollectionCarousel = document.querySelector('.curated-fashion-collection-carousel');
const curatedfashioncollectionslides = document.querySelectorAll('.curated-fashion-collection-carousel .curatedfashioncollectionslide');
const curatedfashioncollectiontotalSlides = curatedfashioncollectionslides.length;

function curatedfashioncollectionmoveSlide(step) {
    curatedfashioncollectionindex += step;

    // Prevent out-of-bound scrolling
    if (curatedfashioncollectionindex < 0) curatedfashioncollectionindex = 0;
    if (curatedfashioncollectionindex > curatedfashioncollectiontotalSlides - curatedfashioncollectionvisibleSlides) curatedfashioncollectionindex = curatedfashioncollectiontotalSlides - curatedfashioncollectionvisibleSlides;

    curatedfashioncollectionupdateCarousel();
}

function curatedfashioncollectionupdateCarousel() {
    const curatedfashioncollectionslideWidth = curatedfashioncollectionslides[0].offsetWidth + 10; // Include gap
    curatedfashioncollectionCarousel.style.transform = `translateX(-${curatedfashioncollectionindex * curatedfashioncollectionslideWidth}px)`;
}

// Attach event listeners to buttons
document.getElementById('curatedfashioncollectionprevBtn').addEventListener('click', () => curatedfashioncollectionmoveSlide(-1));
document.getElementById('curatedfashioncollectionnextBtn').addEventListener('click', () => curatedfashioncollectionmoveSlide(1));

curatedfashioncollectionupdateCarousel();