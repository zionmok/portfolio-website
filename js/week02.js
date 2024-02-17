// place js in here


window.onload = () => {
    
    
    const folderPrefix = "/assets/images/";

    // put in images 1 by 1
    // let images = ['week02/deck-1.jpg', 'week02/deck-2.jpg', ];

    // loop starts at i = start 
    // ends at i <= end
    let images = [];
    for (let i = 1; i <= 13; i++){
      images.push( 'week02/deck-' + i + '.jpg');
    }

    let currIndex = 0;
    const carouselNumber = 0;
    const carouselBody = document.getElementById("carousel-inner-" + carouselNumber);
    

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
  

 
