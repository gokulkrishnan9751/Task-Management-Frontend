export default function Select({value,onChange,options,keyValue,label,}) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select</option>

      {options.map((option) => (
        <option key={option[keyValue]} value={option[keyValue]}>
          {option[label]}
        </option>
      ))}
    </select>
  );
}