const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

images.forEach((img,index)=>{

    img.addEventListener('click',()=>{

        currentIndex=index;
        lightbox.style.display='flex';
        lightboxImg.src=img.src;

    });

});

document.querySelector('.close').onclick=()=>{

    lightbox.style.display='none';

};

document.querySelector('.next').onclick=()=>{

    currentIndex=(currentIndex+1)%images.length;
    lightboxImg.src=images[currentIndex].src;

};

document.querySelector('.prev').onclick=()=>{

    currentIndex=(currentIndex-1+images.length)%images.length;
    lightboxImg.src=images[currentIndex].src;

};

function filterImages(category){

    const items=document.querySelectorAll('.image');

    items.forEach(item=>{

        if(category==='all' ||
           item.classList.contains(category)){

            item.style.display='block';

        }else{

            item.style.display='none';

        }

    });

}