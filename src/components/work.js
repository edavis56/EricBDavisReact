import projectOne from "./../images/MarvelvsDC.png";
import projectTwo from "./../images/codeQuiz.png";
import projectThree from "./../images/weatherApp.jpg";


function Project(link, title, pic, gitLink) {
  return { link, title, pic, gitLink };
}

const firstProject = Project(
  "https://awonka.github.io/Project1-Hero-VS/",
  "Marvel VS DC",
  projectOne,
);

const projectList = [
  Project(
    "https://edavis56.github.io/Homework-Four/",
    "Code Quiz",
    projectTwo,
  ),
  Project(
    " https://edavis56.github.io/crazyGoodWeatherApp/",
    "Weather Dashboard",
    projectThree,
  ),
  
];

function projectComponent(p) {
  return (
    <div key={`${p.title.replace(" ", "")}`}>
      <div className="project">
        <a className="no-line" href={p.link}>
          <h1>{p.title}</h1>
          
          <img src={p.pic} alt={`${p.title}`} />
        </a>
      </div>
    </div>
  );
}

function RecentProjects() {
  return (
    <section id="work">
      <h1 className="section-title">Recent Projects</h1>
      <div className="section-details">
        <div className="first-project">{projectComponent(firstProject)}</div>
        <div className="other-projects">
          {projectList.map(projectComponent)}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
