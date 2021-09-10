import "../scss/styles.scss";
import "regenerator-runtime";
const sectorProjects = document.querySelector(".sector__projects");
const projects = document.querySelectorAll('.project-mixin')
let scrollPosition = 0;


// const handleHoverProject= (event,i) => {
//     const project = projects[i];
//     const preDescription = project.querySelector(".preDescription");
//     const Image = project.style.backgroundImage;
//     project.style.backgroundImage="none";
//     project.style.backgroundColor="rgb(25, 188, 155)"; 
//     preDescription.innerText="hi";    

    
//     project.addEventListener("mouseleave", (e) => {
//         project.style.backgroundImage=Image;
//         project.style.backgroundColor="none"; 
//         preDescription.innerText="";
        

        
//     })


// };
const handleClickProject = (event, i) => {
    const project = projects[i];
    const preDescription = project.querySelector(".preDescription");
    preDescription.innerText="";
    const modalWrapList = document.querySelectorAll('.modal_wrap');
    project.classList.remove('project-mixin__hover');
    const modalWrap = modalWrapList[i];
    modalWrap.style.display ='flex';
    modalWrap.style.cursor = 'initial';
    project.removeEventListener("mouseenter", (event) =>handleHoverProject(event,i));
    const blackBg = document.querySelector('.black_bg')
    blackBg.style.display ='block';
    blackBg.style.cursor = 'pointer';

    blackBg.addEventListener("click", (e) => {
        project.classList.add('project-mixin__hover');
        const evTarget = e.target
        if (!evTarget.classList.contains("modal_wrap")) {
            modalWrap.style.display = "none";
            blackBg.style.display = "none";
        }
    })
};

for (let i = 0; i < projects.length; ++i) {
    let project = projects[i]; 
    project.addEventListener("mouseenter", (event) =>handleHoverProject(event,i));
    project.addEventListener("click", (event) => handleClickProject(event, i));
}




