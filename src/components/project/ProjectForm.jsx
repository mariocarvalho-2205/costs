import { useState, useEffect } from 'react';
import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from '../form/Select';
import Submit from '../form/Submit.jsx';

function ProjectForm({ btnText }) {
	const [ categories, setCategories ] = useState([])

	useEffect(() => {
		fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
	}, [])


	return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <div>
        <Submit type="submit" text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
