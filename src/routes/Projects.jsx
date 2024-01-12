import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import LinkButton from "../components/layout/LinkButton";
import ProjectCard from "../components/project/ProjectCard";
import Message from "../components/layout/Message";
import styles from "./Projects.module.css";

function Projects() {
	const [projects, setProjects] = useState([]);

	const location = useLocation();
	let message = "";
	if (location.state) {
		message = location.state.message;
	}

	useEffect(() => {
		fetch("http://localhost:5000/projects", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log("Projeto em projects", data);
				setProjects(data);
			})
			.catch((err) => console.log("Erro em Projects", err));
	}, []);

	return (
		<div className={styles.project_container}>
			<div className={styles.title_container}>
				<h1>Meus Projetos</h1>
				<LinkButton to="/newproject" text="Criar Projeto" />
			</div>
			{message && <Message type="success" msg={message} />}
			<Container customClass="start">
				{projects.length > 0 &&
					projects.map((project) => (
						<ProjectCard
							name={project.name}
							id={project.id}
							budget={project.budget}
							// category={project.category}
							key={project.id}
						/>
					))}
			</Container>
		</div>
	);
}

export default Projects;
