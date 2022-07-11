fetch(
  "https://raw.githubusercontent.com/janneszilling/jahresprojekt/gh-pages/data/projects.json"
)
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("projectsData", JSON.stringify(data));
  })
  .catch((error) => {
    console.log("error: " + error);
  });

let projectsData = JSON.parse(sessionStorage.getItem("projectsData"));
console.log(projectsData) || [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function appendGrid() {
  let grid = document.getElementById("grid");
  let item = "";
  let roomname = document.getElementById("room-name").innerText;
  for (let i = 0; i < projectsData.length; i++) {
    if (
      projectsData[i].vorschaubild != "" &&
      projectsData[i].raum == roomname
    ) {
      item += `
            <div onclick="openModal(this.id)" id="${projectsData[i].id}" 
            class="item" style="background-image: url('assets/${projectsData[i].id}/${projectsData[i].vorschaubild}');"><h2 class="project-grid-title">${projectsData[i].titel}</h2></div>`;
    } else if (
      projectsData[i].vorschaubild == "" &&
      projectsData[i].raum == roomname
    ) {
      switch (getRandomInt(5)) {
        case 0:
          bgColor = "#e5556e";
          break;
        case 1:
          bgColor = "#e43d59";
          break;
        case 2:
          bgColor = "#a4243b";
          break;
        case 3:
          bgColor = "#94bcb3";
          break;
        case 4:
          bgColor = "#7a9a91";
          break;
        case 5:
          bgColor = "#6d8881";
          break;
        default:
          bgColor = "#7a9a91";
      }
      item += `
            <div onclick="openModal(this.id)" id="${projectsData[i].id}" style="background-color: ${bgColor}" class="item"><h2 class="project-grid-title">${projectsData[i].titel}</h2></div>`;
    }
  }
  grid.innerHTML = item;
}

function openModal(clicked_id) {
  project = projectsData[clicked_id - 1];
  if (project.id === clicked_id) {
    let modal = document.getElementById("modal");
    let overlay = document.getElementById("overlay");

    let title = document.getElementById("modal-title");
    title.innerText = project.titel;

    let description = document.getElementById("modal-description");
    description.innerText = project.beschreibung;

    let author = document.getElementById("author");
    author.innerText =
      "Studierende: " + String(project.urheber).replace(/,/g, ", ");

    //Bilder Carousel
    const carouselContainer = document.getElementById("carousel-container");
    const carouselSlide = document.getElementById("carousel-slide");

    let imagesBlock = "";
    let bilder = project.bilder;

    for (let i = 0; i < bilder.length; i++) {
      imagesBlock += `<img src="${bilder[i]}"></img>`;
    }

    if (bilder != "") {
      carouselSlide.innerHTML = imagesBlock;
      carouselContainer.style.display = "flex";
    } else {
      carouselContainer.style.display = "none";
      carouselSlide.innerHTML = "";
    }

    const carouselImages = document.querySelectorAll(".carousel-slide img");

    const prevBTN = document.getElementById("prev-BTN");
    const nextBTN = document.getElementById("next-BTN");

    let counter = 0;
    const size = 728;

    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    console.log(carouselImages.length);

    nextBTN.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) {
        return;
      }
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    prevBTN.addEventListener("click", () => {
      if (counter <= 0) {
        return;
      }
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    console.log(bilder);
    //Bilder Carousel

    //Video
    const videoContainer = document.getElementById("video-container");
    let videoBlock = "";
    let video = project.videos;

    for (let i = 0; i < video.length; i++) {
      videoBlock += `<iframe id="video-player"
                                src="${String(video[i]).replace(
                                  "watch?v=",
                                  "embed/"
                                )}">
                            </iframe>`;
    }

    console.log(video);

    if (video != "") {
      videoContainer.innerHTML = videoBlock;
      videoContainer.style.display = "block";
    } else {
      videoContainer.style.display = "none";
      videoContainer.innerHTML = "";
    }
    //Video

    //Audio
    const audioContainer = document.getElementById("audio-container");
    let audioBlock = "";
    let audio = project.audios;

    for (let j = 0; j < audio.length; j++) {
      audioBlock += `<audio controls>
                                <source src="${audio[j]}">
                                Your browser does not support the audio element.
                            </audio>`;
    }

    if (audio != "") {
      audioContainer.innerHTML = audioBlock;
      audioContainer.style.display = "block";
    } else {
      audioContainer.style.display = "none";
      audioContainer.innerHTML = "";
    }
    //Audio

    modal.classList.add("active");
    overlay.classList.add("active");
    console.log(
      "HTML-Item-ID: " +
        clicked_id +
        " Array-ID: " +
        project.id +
        " Array-Titel: " +
        project.titel +
        " Array-Urheber: " +
        project.urheber
    );
  } else {
    console.log(false);
    return;
  }
}

function closeModal() {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

window.onload = appendGrid;
