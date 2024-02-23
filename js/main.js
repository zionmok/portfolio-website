// place js in here


  document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });

  function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

// navbar
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.padding = "8px 0px";
  } else {
    document.getElementById("navbar").style.padding = "40px 50px";
  }
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