import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";

/* Importação do Estilo feito com Styled Components */
import {
  Container,
  LogoContainer,
  LoginForm,
  InputContainer,
  ButtonForm,
  FooterLogin
} from "./styles";
import { useSelector, useDispatch } from "react-redux";

import imagelogo from "../../images/buglogo.png";

import firebase from "../../config/firebase";
import "firebase/auth";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const dispatch = useDispatch();

  function logar() {
    if (!email) {
      toast.error("Email não informado !");
    } else if (!senha) {
      toast.error("Senha não informada !");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(resultado => {
          // Recebe os Dados do usuário autenticado
          const usuario = firebase.auth().currentUser;
          const idusuario = usuario.uid;
          toast.success("Login efetuado com sucesso !");
          // Grava as alterações no store
          dispatch({
            type: "LOG_IN",
            usuarioEmail: email,
            usuarioHash: idusuario
          });
        })
        .catch(erro => {
          toast.error("Email e/ou senha inválidos !");
        });
    }
  }

  return (
    <Container>
      {useSelector(state => state.usuarioLogado) > 0 ? (
        <Redirect to="/home" />
      ) : null}
      <LogoContainer>
        <img src={imagelogo} alt="logotipo" />
      </LogoContainer>
      <LoginForm onSubmit={logar}>
        <h1>
          <i className="fa fa-lock"></i> Faça Login
        </h1>
        <h5>
          Bem vindo à <strong>Central de Erros !</strong>
        </h5>
        <hr />
        <InputContainer>
          <div>
            <span>
              <i className="fa fa-envelope"></i>
            </span>
          </div>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="inputEmail"
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <div>
            <span>
              <i className="fa fa-key"></i>
            </span>
          </div>
          <input
            onChange={s => setSenha(s.target.value)}
            type="password"
            id="inputPassword"
            placeholder="Senha"
          />
        </InputContainer>
        <ButtonForm onClick={logar} type="submit">
          Logar
        </ButtonForm>
        <Link to="usuariorecuperarsenha">Esqueceu a senha ?</Link>
      </LoginForm>
      <FooterLogin>
        <Link to="novousuario">Quero Cadastrar</Link>
      </FooterLogin>
    </Container>
  );
}

export default Login;
