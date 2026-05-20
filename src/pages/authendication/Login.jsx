import React, { useState, useContext, use } from "react";
import FeildSet from "../../component/common/FeildSet";
import Button from "../../component/ui/Button";
import { api } from "../../lib/api";
import { useLoginApi } from "../../hooks/loginApi";
import { useToast } from "../../context/TostProvider";
import { UserContext } from "../../context/UserInfoContext";

export default function Login() {
  const initialize = { email: "", password: "", common: "" };
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [formdata, setFormdata] = useState(initialize);
  const [error, setError] = useState(initialize);
  const { addToast } = useToast();

  function handleFormdata(key, value) {
    setFormdata((prev) => ({ ...prev, [key]: value }));
    setError((prev) => ({ ...prev, [key]: "" }));
  }

  function handleSubmit() {
    const err = initialize;
    if (!formdata.email) {
      err.email = "Enter the Email";
    }
    if (!formdata.password) {
      err.password = "Enter the Password";
    }
    setError(err);
    if (!err.email && !err.password) {
      useLoginApi(formdata)
        .then((res) => {
          setUserInfo(res);
          console.log(userInfo);
          sessionStorage.setItem("user", JSON.stringify(res));
          addToast("Login successful!", "success");
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message;
          setError((prev) => ({ ...prev, common: errorMessage }));
          addToast(errorMessage, "error");
        });
    }
  }
  return (
    <div>
      <FeildSet
        type={"text"}
        onChange={(e) => {
          handleFormdata("email", e.target.value);
        }}
        errMSg={error.email}
        label={"Email:"}
      />
      <FeildSet
        type={"text"}
        onChange={(e) => {
          handleFormdata("password", e.target.value);
        }}
        errMSg={error.password}
        label={"password:"}
      />
      <div>{error.common}</div>
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </div>
  );
}
