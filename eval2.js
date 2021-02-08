document.getElementById('carouselExampleControls').addEventListener('click', maFonction);

var imageEnCours=document.getElementById('carouselExempleControls').getAttribute('data-image');
console.log(imageEnCours);

if(imageEnCours=='image1'){
    document.getElementById('image1').style.opacity=0;
    document.getElementById('image2').style.opacity=1;
    document.getElementById('carouselExampleControls').setAttribute('data-image', 'image2');
}else if(imageEnCours=='image2'){

document.getElementById('image2').style.opacity=0;
document.getElementById('image3').style.opacity=1;

}
else{
    
    document.getElementById('carouselExampleControls').setAttribute('data-image', 'image3');
    document.getElementById('image3').style.opacity=1;
    document.getElementById('image1').style.opacity=0;
    document.getElementById('carouselExampleControls').setAttribute('data-image', 'image1');
}
