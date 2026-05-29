# Ex.07 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
```
gallery.html

<html>
<head>
    <meta charset="UTF-8">
    <title>Fashion Gallery</title>
    <link rel="stylesheet" href="gallery.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">Elegance in Every Thread</h1>
        <p class="small-text">Elegance · Aura · Allure · Silhouette . Glamzzz</p>

        <div class="image-area">
            <img src="bgimage.jpg" id="photo" alt="universe picture">

            <p class="title" id="title-text">Embellished Gown</p>
            <p class="info" id="info-text">
                A sparkling one-shoulder gown with a bold slit, perfect for red-carpet eleganc
            </p>
        </div>

        <div class="buttons">
            <button onclick="prev()">Previous</button>
            <button onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 6</p>
    </div>

    <footer class="footer">
        &copy; GOKUL B · 212225230076
    </footer>

    <script src="gallery.js"></script>
</body>
</html>
```
```
gallery.css

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background:url(bgimage.jpg)  no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: white;
}
.box {
    width: 100%;
    max-width: 600px;
    margin-left:700px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    margin-top:68px;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 12px;
    margin-bottom: 15px;
    color: #cdd4ff;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #ffd4ec;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ffd4ec;
    color: #2b1022;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #cdd4ff;
}
.footer {
    margin-left:75px;
    font-size: 13px;
    padding: 8px;
    color: #e5e7ff;
}
```
```
gallery.js

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
```


## OUTPUT
![alt text](<Screenshot 2026-05-29 183003.png>)
![alt text](<Screenshot 2026-05-29 183014.png>)
![alt text](<Screenshot 2026-05-29 183026.png>)
![alt text](<Screenshot 2026-05-29 183039.png>)
![alt text](<Screenshot 2026-05-29 183100.png>)
## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
