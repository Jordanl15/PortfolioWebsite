
document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("main-header");


    if (window.scrollY > header.offsetHeight - 50) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
});

document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); 
});



window.addEventListener('scroll', function() {

    const controls = [
        {control: document.getElementById('distortion'), path: '01. Dist/DST-', imageCount: 71},
        {control: document.getElementById('output'), path: '01. Out/OUT-', imageCount: 71},
        {control: document.getElementById('comp'), path: '01. Comp/CMP-', imageCount: 71},
        {control: document.getElementById('tone'), path: '01. Tone/TON-', imageCount: 71},
        {control: document.getElementById('filter'), path: '01. SC/SC-', imageCount: 71},
        {control: document.getElementById('type'), path: '01. Type/TYP-', imageCount: 71},
        {control: document.getElementById('meter_led_r'), path: '01. ALL Leds/Meter IN-OUT/MTR-', imageCount: 71},
        {control: document.getElementById('meter_led_l'), path: '01. ALL Leds/Meter IN-OUT/MTR-', imageCount: 71},
        {control: document.getElementById('gr_led_l'), path: '01. ALL Leds/GR Leds/GR-', imageCount: 71},
        {control: document.getElementById('gr_led_r'), path: '01. ALL Leds/GR Leds/GR-', imageCount: 71},
        {control: document.getElementById('tube'), path: '01. Tube/TUB-', imageCount: 71}

    ];

    const offset = 200; 

    const scrollPosition = Math.max(0, this.window.scrollY - offset);
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    

    
    controls.forEach(e => {
        updateImages(e.path, e.imageCount, scrollPosition, pageHeight, e.control)
    });
    
    
});



function updateImages(path, totalImages, scrollPosition, pageHeight, control)
{
    const imageIndex = Math.min(totalImages - 1, Math.floor((scrollPosition / pageHeight) * (totalImages * 2))); // Double the speed

    const formattedIndex = (imageIndex + 1).toString().padStart(3, '0');
    console.log(formattedIndex)
    const imagePath = `/Assets/Images/${path}${formattedIndex}.png`;

    control.src = imagePath;

    console.log(imagePath);

}







const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll(".carousel-item");

let indexOfActive = 2; 


function showItems() {
 
    carouselItems.forEach(item => {
        item.classList.remove('carousel-item-active');
        item.style.display = 'none'; 
        item.style.opacity = '0.3'; 
        item.style.zIndex = '1'; 
        item.style.transform = 'scale(0.8)'; 
    });

   
    let prevIndex = (indexOfActive - 1 + carouselItems.length) % carouselItems.length;
    let nextIndex = (indexOfActive + 1) % carouselItems.length;


    carouselItems[prevIndex].style.display = 'block';  
    carouselItems[indexOfActive].style.display = 'block';
    carouselItems[nextIndex].style.display = 'block';


    carouselItems[indexOfActive].classList.add('carousel-item-active');
    carouselItems[indexOfActive].style.opacity = '1';  
    carouselItems[indexOfActive].style.zIndex = '2';  
    carouselItems[indexOfActive].style.transform = 'scale(1)'; 
}


document.getElementById('carousel-button-prev').addEventListener('click', function() {

    indexOfActive = (indexOfActive - 1 + carouselItems.length) % carouselItems.length;
    showItems();
});

document.getElementById('carousel-button-next').addEventListener('click', function() {

    indexOfActive = (indexOfActive + 1) % carouselItems.length;
    showItems();
});


showItems();





