import React, { useContext, useState } from "react";
import { FlexColumn } from "../shared/Flex";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../contexts/DashboardContext";
import styled from "styled-components";

// Створюємо стилізований компонент для Auth
const AuthContainer = styled(FlexColumn)`
  width: 100%;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [_, setLocalStorageFormData] = useLocalStorage("userData");
  const navigate = useNavigate();
  const { setUser } = useContext(DashboardContext)!;

  const onSubmit = () => {
    // Перевіряємо пароль і електронну пошту
    if (formData.email === "admin" && formData.password === "admin") {
      setLocalStorageFormData(formData);
      setUser(formData);
      navigate("/dashboard");
    } else {
      alert("Неправильні дані");
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <AuthContainer>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <button onClick={onSubmit}>Увійти</button>
    </AuthContainer>
  );
};
