import React from "react";
import Select from "../ui/Select";

const statusOptions = [
  { id: "1", label: "To Do" },
  { id: "2", label: "In Progress" },
  { id: "3", label: "Completed" },
];

const priorityOptions = [
  { id: "1", label: "Low" },
  { id: "2", label: "Medium" },
  { id: "3", label: "High" },
];

export default function Table({ data, handleChange }) {

  const Columns = data.length > 0 ? Object.keys(data[0]).map((key) => ({ key }))  : [];

  return (
    <table border="1">
      <thead>
        <tr>
          {Columns.map((col, index) => (
            <th key={index}>{col.key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>

            {Columns.map((col, colIndex) => {

              if (col.key === "priority") {
                return (
                  <td key={colIndex}>
                    <Select
                      options={priorityOptions}
                      value={row[col.key]}
                      onChange={(e) =>handleChange(row.id,"priority",e.target.value)}
                      keyValue="id"
                      label="label"
                    />
                  </td>
                );
              }

              if (col.key === "status") {
                return (
                  <td key={colIndex}>
                    <Select
                      options={statusOptions}
                      value={row[col.key]}
                      onChange={(e) => handleChange(row.id,"status", e.target.value)}
                      keyValue="id"
                      label="label"
                    />
                  </td>
                );
              }

              return (
                <td key={colIndex}> {row[col.key]} </td>
              );
            })}

          </tr>
        ))}
      </tbody>
    </table>
  );
}