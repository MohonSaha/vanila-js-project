
const images = [
    './Image/img-1.jpg',
    './Image/img-2.jpg',
    './Image/img-3.jpg',
    './Image/img-4.jpg',

]


let imgIndex = 0;
const imgElement = document.getElementById('slider-img');

setInterval(() => {
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 1300)