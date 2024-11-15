import './Projects.css'
import { IoLogoGithub } from "react-icons/io";

function Projects({ projects }) {
	return (
		<>
			<div className="projects">
			<h1 id='proj'>Projects</h1>
			{
			projects.map((project) => {
				return (
					<div className="project-card">
						<img src={project.img} alt="Project" className="project-image" />
						<div className='project-header'>
							<h2 className="project-title">{project.title}</h2>
							<a href={"https://github.com/HetarthJain/" + project.github} className="project-link">
							<IoLogoGithub />							</a>
						</div>
						<h4 className="project-description">{project.des}</h4>
						<p className="project-stack">{project.stack}</p>

					</div>
				)
			})}
			</div>
			</>
	);
}
export default Projects;
