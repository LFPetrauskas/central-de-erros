import React from "react";
import {
  Container,
  LogoContainer,
  DataUserContainer,
  ImgDataUserContainer,
  LinkContainer
} from "./styles";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../config/firebase";
import { toast } from "react-toastify";

import imagelogo from "../../images/buglogo.png";

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      toast.warn("deslogado");
    })
    .catch(function(error) {
      toast.warn("deu bosta");
    });
}

function NavBar() {
  const usuarioLogado = useSelector(state => state.usuarioLogado);
  const usuarioEmail = useSelector(state => state.usuarioEmail);
  const usuarioHash = useSelector(state => state.usuarioHash);

  if (usuarioLogado === 0) return <Redirect to="/" />;
  return (
    <Container>
      <ImgDataUserContainer>
        <LogoContainer>
          <Link to="/home"><img src={imagelogo} alt="Logotipo" /></Link>
        </LogoContainer>
        <DataUserContainer>
          <h4><span>Bem vindo</span> <strong>{usuarioEmail}</strong>.
          </h4>
          <h5>
            <span>Seu token é :</span> <strong className="token">{usuarioHash}</strong>
          </h5>
        </DataUserContainer>
      </ImgDataUserContainer>
      <LinkContainer></LinkContainer>
    </Container>
  );
}

export default NavBar;
