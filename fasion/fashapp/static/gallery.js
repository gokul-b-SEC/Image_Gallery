var pics = [
    {
        image: "gown.jpg",
        title: "Embellished Gown",
        info: "A sparkling one-shoulder gown with a bold slit, perfect for red-carpet elegance."
    },
    {
        image: "ballgown.jpg",
        title: "Off-Shoulder Ballgown",
        info: "A classic black couture gown with a dramatic flare and vintage elegance."
    },
    {
        image: "jumpsuit.jpg",
        title: "Sequin Jumpsuit",
        info: "A body-hugging, full-sleeve jumpsuit with high-shine sequins for a bold, glamorous look."
    },
    {
        image: "mini.jpg",
        title: "Strapless Mini",
        info: "A sleek metallic mini dress with a fitted silhouette, perfect for a bold runway look."
    },
    {
        image: "cmini.jpg",
        title: "Corset Mini",
        info: "A structured corset-style mini with dramatic puffed skirt for a high-fashion runway look."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();