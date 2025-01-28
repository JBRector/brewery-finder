import { FetchBreweriesBase } from '../../services/types';

import styles from './Select.module.css';

interface SelectProps {
  label: string;
  options: string[];
  forValue: keyof FetchBreweriesBase;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, options, forValue, onChange }: SelectProps) => {
  return (
    <div className={styles.select}>
      <label className={styles.select__label} htmlFor={forValue}>
        {label}
      </label>
      <select
        className={styles.select__input}
        id={forValue}
        name={forValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
