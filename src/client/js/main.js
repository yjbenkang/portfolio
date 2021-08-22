import "../scss/styles.scss";
import "regenerator-runtime";
const projects = document.querySelectorAll('.project-mixin')
const sectorProjects = document.querySelector(".sector__projects");
const body = document.querySelector('body');
let scrollPosition = 0;

const handleClickProject = (event, i) => {
    const modalWrapList = document.querySelectorAll('.modal_wrap');
    const modalWrap = modalWrapList[i];
    modalWrap.style.display ='block';
    modalWrap.style.cursor = 'initial';
    const blackBg = document.querySelector('.black_bg')
    blackBg.style.display ='block';
    blackBg.style.cursor = 'pointer';
    // body.style.overflow = 'hidden';

    blackBg.addEventListener("click", e => {
        const evTarget = e.target
        if (!evTarget.classList.contains("modal_wrap")) {
            modalWrap.style.display = "none";
            blackBg.style.display = "none";
            // body.style.removeProperty('overflow');
        }
    })
};

for (let i = 0; i < projects.length; ++i) {
    let project = projects[i]; 
    project.addEventListener("click", (event) => handleClickProject(event, i));
  }


