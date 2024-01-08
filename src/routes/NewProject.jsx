// import { useHistory } from 'react-router-dom'
import styles from './NewProject.module.css';
import ProjectForm from '../components/project/ProjectForm';

function NewProject () {
  // const history = useHistory('')

  function creatPost(project) {
    // initialize cost and 
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      // redirect
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