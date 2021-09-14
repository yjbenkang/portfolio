import "../scss/styles.scss";
import "regenerator-runtime";
const sectorProjects = document.querySelector(".sector__projects");
const projects = document.querySelectorAll('.project-mixin')
let scrollPosition = 0;


const handleHoverProject= (event,i) => {
    const project = projects[i];
    const Image = project.style.backgroundImage;
    const letsee = document.createElement('i');
    project.style.backgroundImage="none";
    project.style.backgroundColor="rgb(25, 188, 155)"; 
    letsee.className="fas fa-search fa-5x";
    letsee.style.position= "absolute";
    letsee.style.right= "42%";
    letsee.style.top="30%";
    project.insertBefore(letsee,project.firstChild);
    project.addEventListener("mouseleave", (e) => {
        project.style.backgroundImage=Image;
        project.style.backgroundColor="none"; 
        letsee.style.display="none";
 
    })
    project.addEventListener("click", (event) => {
        const project = projects[i];
        const modalWrapList = document.querySelectorAll('.modal_wrap');
        project.classList.remove('project-mixin__hover');
        const modalWrap = modalWrapList[i];
        modalWrap.style.display ='flex';
        modalWrap.style.cursor = 'initial';
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
    });

    


};

for (let i = 0; i < projects.length; ++i) {
    let project = projects[i]; 
    project.addEventListener("mouseenter", (event) =>handleHoverProject(event,i));

}




