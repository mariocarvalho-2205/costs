import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css';
import ProjectForm from '../components/project/ProjectForm';

function NewProject () {
  const navigate = useNavigate()

  function creatPost(project) {
    // initialize cost and 
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('Projeto em newProjects', data)
      // redirect
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!'} })
    })
    .catch((err) => console.log(err))
  }

  // console.log(history)

  return (
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={creatPost} btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject