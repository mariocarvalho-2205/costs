import styles from "./Input.module.css";

const Input = ({
	type,
	text,
	name,
	placeholder,
	handleOnChange,
	value
}) => {
	return (
		<div className={styles.form_control}>
			<label htmlFor={name}>{text}:</label>
			<input
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
			></input>
		</div>
	);
};

export default Input;
