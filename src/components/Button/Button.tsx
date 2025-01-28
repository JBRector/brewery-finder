import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  buttonStyle?: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({
  text,
  onClick,
  buttonStyle = 'primary',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        buttonStyle === 'secondary' ? styles.secondary : ''
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
