import styles from './ProjectCard.module.css'

function ProjectCard ({ id, name, budget, category, handleRemove }) {
    return (
        <>
            <p>{id}{name}{budget}{category}</p>
        </>
    )
}

export default ProjectCard