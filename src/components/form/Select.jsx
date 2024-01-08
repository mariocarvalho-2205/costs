import styles from "./Select.module.css";

function Select ({
	id,
	text,
	name,
	value,
    options,
	handleOnChange,
}) {
	return (
		<div className={styles.form_control}>
			<label htmlFor={id}>{text}:</label>
			<select name={name} id={id}>
				{options.map((option) => (
                	<option value={option.id} key={option.id}>{option.name}</option>
				))}
            </select>
		</div>
	);
};

export default Select;
