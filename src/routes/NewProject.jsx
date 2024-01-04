import styles from './NewProject.module.css';
import ProjectForm from '../components/project/ProjectForm';

const NewProject = () => {
  return (
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <ProjectForm />
    </div>
  )
}

export default NewProject