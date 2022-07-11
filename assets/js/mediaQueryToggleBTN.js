const mediaQuery = window.matchMedia("(min-width: 1920px)");
let toggleBtn1 = document.getElementById("toggle-btn-1");
let toggleBtn2 = document.getElementById("toggle-btn-2");

function handleWidthChange(evt){
    if(evt.matches){
        toggleBtn2.innerHTML = '';
        toggleBtn1.innerHTML = '<a class="btn toggle-btn" onclick="toggleProjects3DModel()"><span id="mdl" class="toggle-text hover-visual">3D Modell</span><span id="prjcts" class="toggle-text">Räume</span></a>';
    }else{
        toggleBtn1.innerHTML = '';
        toggleBtn2.innerHTML = '<a class="btn toggle-btn" onclick="toggleProjects3DModel()"><span id="mdl" class="toggle-text hover-visual">3D Modell</span><span id="prjcts" class="toggle-text">Räume</span></a>';
    }
}

handleWidthChange(mediaQuery);

mediaQuery.addListener(handleWidthChange);