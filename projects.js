
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        var scrollPosition = window.scrollY; 
        var startScroll = 50; 
        var maxRotation = 90;
        var maxScale = 1.5; 
        var maxScroll = 500; 

       
        var rotation = (scrollPosition > startScroll) ? Math.min(((scrollPosition - startScroll) / 3) % 360, maxRotation) : 0; 


        var translation = (scrollPosition > startScroll && rotation < maxRotation) ? ((scrollPosition - startScroll) / 2) : 0; 


        var scale = (scrollPosition > startScroll) ? Math.min(1 + (scrollPosition - startScroll) / 400, maxScale) : 1; 


        var opacity = Math.min((scrollPosition / (maxScroll / 2)), 1); 


        var transform = 'translate(-50%, -50%) rotate(' + rotation + 'deg) translateY(' + translation + 'px) scale(' + scale + ')';
        

        document.getElementById('dynamic-image').style.transform = transform;
        document.getElementById('info-image').style.transform = transform;
        

        document.getElementById('info-image').style.opacity = opacity;

        var dynamicOpacity = 1 - Math.min(scrollPosition / 300, 1); 
        document.getElementById('dynamic-image').style.opacity = dynamicOpacity;


        document.getElementById('dynamic-image').style.transition = 'opacity 0.1s ease-out'; 

   
        if (rotation >= maxRotation) {
            document.getElementById('dynamic-image').style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out';
            document.getElementById('info-image').style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out';
        } else {
            document.getElementById('dynamic-image').style.transition = 'none'; 
            document.getElementById('info-image').style.transition = 'none'; 
        }


        var leftImage = document.querySelector('.non-dynamic.left');
        var rightImage = document.querySelector('.non-dynamic.right');

        
        if (scrollPosition > startScroll) {
            leftImage.style.opacity = 0;
            rightImage.style.opacity = 0;
        } else {
            leftImage.style.opacity = 1;
            rightImage.style.opacity = 1;
        }

        const frameworkImages = document.querySelectorAll('.framework-icons img');

        
        if (scrollPosition >= 400) {
            frameworkImages.forEach(image => {
                image.classList.add('show');
            });
        } else {
            frameworkImages.forEach(image => {
                image.classList.remove('show'); 
            });
        }
    };
});
