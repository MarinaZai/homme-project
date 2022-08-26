import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { apiURL } from "../constans";

type RegistrationBodyType = {
  username: string;
  password: string;
  email: string;
};

export const RegistrationPage = () => {
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<
    string | null
  >(null);

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueLogin = event.target.value;
    setLogin(valueLogin);
    setErrorLogin(null);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target.value;
    setEmail(valueEmail);
    setErrorEmail(null);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target.value;
    setPassword(valuePassword);
    setErrorPassword(null);
  };

  const onChangePasswordConfirm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valuePasswordConfirm = event.target.value;
    setPasswordConfirm(valuePasswordConfirm);
    setErrorPasswordConfirm(null);
  };

  let objectForm = {
    username: login,
    email: email,
    password: password,
  };

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const registrationHandler = (body: RegistrationBodyType) => {
    axios
      .post(`${apiURL}/auth/registration`, body)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(
          err.response.data[0]?.message || err.response.data.message[0]
        );
      });
  };
  
  const onClick = () => {
    if (login.length > 15) {
      setErrorLogin("maximum number of characters 15");
    } else if (!isValidEmail(email)) {
      setErrorEmail("invalid email");
    } else if (password.trim().length === 0) {
      setErrorPassword("fucking idiot!");
    } else if (password !== passwordConfirm) {
      setErrorPasswordConfirm("Passwords do not match");
    } else {
      registrationHandler(objectForm);
    }
  };
  
  return (
    <div>
      <Box
        component="form"
        padding="20px 0 0 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <FormControl error={!!errorLogin}>
          <InputLabel htmlFor="my-input">Login</InputLabel>
          <Input
            error={login.trim() === ""}
            value={login}
            onChange={onChangeLogin}
            id="login"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {errorLogin ? errorLogin : " Enter your login"}
          </FormHelperText>
        </FormControl>
        <FormControl error={!!errorEmail}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            error={email.trim() === ""}
            value={email}
            onChange={onChangeEmail}
            id="email"
            type="email"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {" "}
            {errorEmail ? errorEmail : " Enter your email"}
          </FormHelperText>
        </FormControl>
        <FormControl error={!!errorPassword}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            error={password.trim() === ""}
            value={password}
            onChange={onChangePassword}
            id="password"
            type="password"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {errorPassword ? errorPassword : "Confirm the password"}
          </FormHelperText>
        </FormControl>
        <FormControl error={!!errorPasswordConfirm}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            error={passwordConfirm.trim() === ""}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            id="passwordConfirm"
            type="password"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {errorPasswordConfirm
              ? errorPasswordConfirm
              : "Confirm the password"}
          </FormHelperText>
        </FormControl>
        <Button onClick={onClick} variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
      <NavLink to="/login">Already registered. Login to the site.</NavLink>
    </div>
  );
};
