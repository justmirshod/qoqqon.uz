import styles from './SwitchSelector.module.css';

const SwitchSelector = ({ options }) => {
  const handleClick = (event, value) => {
    console.log(event);
    console.log(value);
  };

  return (
    <div className={styles.switch__selector}>
      {options?.map((option) => (
        <button
          key={option?.id}
          className={styles.switch__selector_item}
          onClick={(event) => handleClick(event, option?.value)}
        >
          {option?.translations?.ru?.name}
        </button>
      ))}
    </div>
  );
};

export default SwitchSelector;
