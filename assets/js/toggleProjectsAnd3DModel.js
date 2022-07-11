//3D Model and Projects view toggle function
function toggleProjects3DModel() {
    let projectText = document.getElementById("prjcts");
    let modelText = document.getElementById("mdl");
    let unityContainer = document.getElementById("unityContainer");
    let projectsContainer = document.getElementById("projectsContainer");
    let credentials3DModel = document.getElementById("credits-for-3d-model");

    if(projectsContainer.style.display === "none"){
        unityContainer.style.display = "none";
        credentials3DModel.style.display = "none";
        projectsContainer.style.display = "block";
    } else{
        unityContainer.style.display = "block";
        credentials3DModel.style.display = "block";
        projectsContainer.style.display = "none";
    }
    
    modelText.classList.toggle("hover-visual");
    projectText.classList.toggle("hover-visual");
}