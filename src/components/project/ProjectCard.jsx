import styles from './ProjectCard.module.css'

// import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard ({ id, name, budget, category, handleRemove }) {
    return (
      <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
          <span>Orçamento: R$ </span> {budget}
        </p>
        <p className={styles.category_test}>
          <span></span>Desenvolvimento
        </p>
        <div>
          <p>Editar</p>
          <p>Remover</p>
        </div>
      </div>
    );
}

export default ProjectCard