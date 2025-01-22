import { FetchBreweriesBase } from '../../services/types';

interface SelectProps {
  label: string;
  options: string[];
  forValue: keyof FetchBreweriesBase;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, options, forValue, onChange }: SelectProps) => {
  return (
    <div>
      <label htmlFor={forValue}>{label}</label>
      <select id={forValue} name={forValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
