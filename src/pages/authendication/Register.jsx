import React from "react";
import FeildSet from "../../component/common/FeildSet";
import Button from "../../component/ui/Button";
import { useState } from "react";
import { useRegisterApi } from "../../hooks/loginApi";
import { useToast } from "../../context/TostProvider";

const feilds = [
  { name: "user_name", label: "User Name", type: "text" },
  { name: "email", label: "Email", type: "text" },
  { name: "password", label: "Password", type: "password" },
  { name: "conformPassword", label: "Cnform Password", type: "password" },
];

export default function Register() {
  const initialState = {
    user_name: "",
    email: "",
    password: "",
    conformPassword: "",
    common: "",
  };

  const [formdata, setFormdata] = useState(initialState);
  const [error, setError] = useState(initialState);
  const { addToast } = useToast();

  function handleFormdata(key, value) {
    setFormdata((prev) => ({ ...prev, [key]: value }));
    setError((prev) => ({ ...prev, [key]: "", common: "" }));
  }

  function handleSubmit() {
    for (const key in formdata) {
      if (!formdata[key] && key !== "common") {
        setError((prev) => ({ ...prev, [key]: `Enter the ${key}` }));
      }
    }
    if (formdata.password !== formdata.conformPassword) {
      setError((prev) => ({
        ...prev,
        conformPassword: "Password and Conform Password should be same",
      }));
    }
    let flag = true;
    for (const key in error) {
      if (error[key] && key !== "common") {
        flag = false;
        break;
      }
    }
    if (flag) {
      const { conformPassword, common, ...apiData } = formdata;
      useRegisterApi(apiData)
        .then((res) => {
          addToast("Registration successful!", "success");
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message ;
          setError((prev) => ({ ...prev, common: errorMessage }));
          addToast(errorMessage, "error");
        });
    }
  }

  return (
    <div>
        {feilds.map((feild) => (    
            <FeildSet
                key={feild.name}
                type={feild.type}
                onChange={(e) => handleFormdata(feild.name, e.target.value)}
                errMSg={error[feild.name]}
                label={feild.label}
            />
        ))}
      <label>{error.common}</label>
      <Button onClick={() => handleSubmit()}>Register</Button>
    </div>
  );
}
