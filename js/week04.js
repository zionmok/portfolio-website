
// place js in here


window.onload = () => {
    
    
    const folderPrefix = "/assets/images/";

    let images = [];
    for (let i = 1; i <= 8; i++){
      images.push( 'week04/jiaxiang-0' + i + '.png');
    }


    let carouselNumber = 0;
    let carouselBody = document.getElementById("carousel-inner-" + carouselNumber);
    for (let i = 0; i < images.length; i++){

      let div = document.createElement("div");
      let img = document.createElement("img");
      div.className = ("carousel-item " + (i == 0? "active": ""));
      div.setAttribute("data-interval", "999999")
      const imagePath = folderPrefix + images[i];
      img.src = imagePath;
      img.className = "d-block w-100 no-radius"
      div.appendChild(img);
      carouselBody.appendChild(div);
      
    }



    carouselNumber = 1;
    carouselBody = document.getElementById("carousel-inner-" + carouselNumber);
 
    images = [];
    for (let i = 1; i <= 13; i++){
      images.push( 'week02/deck-' + i + '.jpg');
    }
    
    for (let i = 0; i < images.length; i++){
      let div = document.createElement("div");
      let img = document.createElement("img");
      div.className = ("carousel-item " + (i == 0? "active": ""));
      div.setAttribute("data-interval", "999999")
      const imagePath = folderPrefix + images[i];
      img.src = imagePath;
      img.className = "d-block w-100 no-radius"
      div.appendChild(img);
      carouselBody.appendChild(div);
    }


    carouselNumber = 2;
    carouselBody = document.getElementById("carousel-inner-" + carouselNumber);
 
    images = [];
    for (let i = 1; i <= 2; i++){
      images.push( 'week04/worksheet-' + i + '.jpg');
    }
    
    for (let i = 0; i < images.length; i++){
      let div = document.createElement("div");
      let img = document.createElement("img");
      div.className = ("carousel-item " + (i == 0? "active": ""));
      div.setAttribute("data-interval", "999999")
      const imagePath = folderPrefix + images[i];
      img.src = imagePath;
      img.className = "d-block w-100 no-radius"
      div.appendChild(img);
      carouselBody.appendChild(div);
    }



//lightbox zoom
    let all = document.getElementsByClassName("zoom"),
    lightbox = document.getElementById("lightbox");

if (all.length>0) { for (let i of all) {
  i.onclick = () => {
    let clone = i.cloneNode();
    clone.className = "";
    lightbox.innerHTML = "";
    lightbox.appendChild(clone);
    lightbox.className = "show";
  };
}}

lightbox.onclick = () => {
  lightbox.className = "";
};



  };
  

 
