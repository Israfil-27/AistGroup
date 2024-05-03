const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const usersData = await response.json();
    usersData.forEach(element => {
        console.log(element.url);
    });
}
images()
// let currentIndex = 0;

// function showImage(index) {
//     const carouselImage = document.querySelector('.carousel-image img');
//     carouselImage.src = images[index];
// }

// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage(currentIndex);
// });

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
// });

// showImage(currentIndex);
