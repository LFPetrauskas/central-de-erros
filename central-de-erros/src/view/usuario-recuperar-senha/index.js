import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../config/firebase";
import "firebase/auth";
import { DivCard, DivFundo, Form, Button } from "./style";

function UsuarioRecuperarSenha() {
  const [email, setEmail] = useState();

  function recuperarSenha() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(resultado => {
        toast.success(
          `Enviamos um link para seu email ${email} para que você redefina sua senha !`
        );
      })
      .catch(erro => {
        toast.error(`Erro`);
      });
  }

  return (
    <DivFundo>
      <DivCard>
        <Form>
          <h2>
            <i className="fa fa-envelope"></i> Recuperar Senha
          </h2>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Email"
          />

          <Button onClick={recuperarSenha} type="button" className="btn-enviar">
            Recuperar Senha
          </Button>
        </Form>
      </DivCard>
    </DivFundo>
  );
}

export default UsuarioRecuperarSenha;
