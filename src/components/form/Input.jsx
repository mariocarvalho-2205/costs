import styles from "./Input.module.css";

const Input = ({
	id,
	type,
	text,
	name,
	value,
	placeholder,
	handleOnChange,
}) => {
	return (
		<div className={styles.form_control}>
			<label htmlFor={id}>{text}:</label>
			<input
				id={id}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default Input;
