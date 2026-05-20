import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext();

export function Select({ children, value, onValueChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <SelectContext.Provider
      value={{ value, onValueChange, isOpen, toggleOpen, closeDropdown }}
    >
      {children}
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children }) {
  const { isOpen, toggleOpen } = useContext(SelectContext);

  return (
    <button
      className={`select-trigger ${isOpen ? "open" : ""}`}
      onClick={toggleOpen}
      type="button"
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder, data = [] }) {
  const { value } = useContext(SelectContext);

  const selectedItem = data.find((item) => item.id === value);
  const displayValue = selectedItem?.label || selectedItem?.user_name;

  return <span className="select-value">{displayValue}</span>;
}

export function SelectContent({ children }) {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className="select-content">
      <div className="select-options">{children}</div>
    </div>
  );
}

export function SelectItem({ value, children, data = {} }) {
  const {
    value: selectedValue,
    onValueChange,
    closeDropdown,
  } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  const handleSelect = () => {
    onValueChange(value);
    closeDropdown();
  };

  return (
    <div
      className={`select-item ${isSelected ? "selected" : ""}`}
      onClick={handleSelect}
      role="option"
      aria-selected={isSelected}
    >
      <span className={`select-item-text ${isSelected && "option-active"}`}>{children}</span>
      
    </div>
  );
}

export function SelectGroup({ label, children }) {
  return (
    <div className="select-group">
      {label && <div className="select-group-label">{label}</div>}
      <div className="select-group-items">{children}</div>
    </div>
  );
}

export function SimpleSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select...",
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} data={options} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.id} value={option.id}>
            {option.label || option.user_name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
