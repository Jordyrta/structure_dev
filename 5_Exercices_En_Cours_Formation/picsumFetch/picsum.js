let mainSelector = document.querySelector("main");
let bodySelector = document.querySelector("body");
let sectionCreation;
let asideCreation;
let textCreation;
let buttonCreation;
let articleCreation;
let imgCreation;

fetch("https://picsum.photos/v2/list?page=1&limit=4")
  .then((response) => {
    return response.json();
  })
  .then((photos) => {
    photos.forEach((photo) => {
      createElements();
      fillElements(photo.download_url, photo.author, photo.url);
      appendElements();
      buttonCreation.addEventListener("click", function(){
        document.location.href=photo.url;
      })
    });
});

function createElements() {
  sectionCreation = document.createElement("section");
  asideCreation = document.createElement("aside")
  textCreation = document.createElement("p");
  buttonCreation = document.createElement("button");
  imgCreation = document.createElement("img");
  articleCreation = document.createElement("article")
}

function fillElements(photoUrl, photoAuthor) {
  console.log("hello");
  textCreation.textContent = photoAuthor;
  buttonCreation.textContent = "Visit";
  imgCreation.src = photoUrl;
}

function appendElements() {
  mainSelector.append(sectionCreation);
  sectionCreation.append(asideCreation);
  asideCreation.append(textCreation);
  asideCreation.append(buttonCreation);
  sectionCreation.append(articleCreation);
  articleCreation.append(imgCreation);
}


/*
<section>
  <aside>
    <p>Alejandro Escamilla</p>
    <button>Visit</button>
  </aside>
  <article>
    <img src="https://picsum.photos/id/0/5000/3333" alt="">
  </article>
  </section>
*/
