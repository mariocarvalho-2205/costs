import styles from './ProjectCard.module.css'

// import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard ({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.project_card}>
            <h4>{name}{budget}{category}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={styles.category_test}>
                <span></span> R$ {category}
            </p>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default ProjectCard