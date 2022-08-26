import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import { apiURL } from "../constans";
import { useNavigate } from "react-router-dom";
type LoginPageBodyType = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string | null>(null);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueLogin = event.target.value;
    setLogin(valueLogin);
    setErrorLogin(null);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePassword = event.target.value;
    setPassword(valuePassword);
    setErrorPassword(null);
  };

  const navigate = useNavigate();

  let objectForm = {
    username: login,
    password: password,
  };

  const loginHandler = (body: LoginPageBodyType) => {
    axios
      .post(`${apiURL}/auth/login`, body)
      .then((response) => {
        let token = response.data.accessToken
        localStorage.setItem("token", token)
        if (response.status === 201) {
          navigate("/profile");
        } 
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onClick = () => {
    if (login.length > 15) {
      setErrorLogin("maximum number of characters 15");
    } else if (password.trim().length === 0) {
      setErrorPassword("fucking idiot!");
    } else {
      loginHandler(objectForm);
    }
  };
  return (
    <div>
      <Box
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
            id="my-input"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {errorLogin ? errorLogin : " Enter your login"}
          </FormHelperText>
        </FormControl>
        <FormControl error={!!errorPassword}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            error={password.trim() === ""}
            value={password}
            onChange={onChangePassword}
            id="my-input"
            type="password"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            {errorPassword ? errorPassword : "Confirm the password"}
          </FormHelperText>
        </FormControl>
        <Button onClick={onClick} variant="contained" endIcon={<SendIcon />}>
          Login
        </Button>
      </Box>
    </div>
  );
};
