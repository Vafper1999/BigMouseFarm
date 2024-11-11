document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.option-btn');
    const mainImage = document.getElementById('product-image'); // ตรวจสอบให้ตรงกับ id ของภาพใน HTML

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newImageSrc = button.getAttribute('data-image');

            if (mainImage) {
                // ทำให้ภาพปัจจุบันจาง
                mainImage.classList.add('fade-out');
                
                // เปลี่ยนภาพหลังจากทำให้ภาพปัจจุบันจาง
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.classList.remove('fade-out');
                    mainImage.classList.add('fade-in'); // ทำให้ภาพใหม่แสดงผล
                }, 500); // เวลาที่ตรงกับ transition ของ CSS
            }
        });
    });

    // สไลด์โชว์อัตโนมัติสำหรับโพสต์บน Facebook
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000); // เปลี่ยนสไลด์ทุกๆ ... วินาที
    }
});