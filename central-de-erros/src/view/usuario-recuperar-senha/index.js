import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Button, Input, Form, Card, Section, Footer } from "./style";

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
    <Section>
      <Card>
        <h2>
          <i className="fa fa-envelope"></i>{" "}<strong>Recuperar Senha</strong>
        </h2>
        <Form onSubmit={recuperarSenha}>
          <Input
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <Button onClick={recuperarSenha} type="submit">
            Recuperar Senha
          </Button>
        </Form>
      </Card>
      <Footer>
        <Link to="/">Início</Link>
      </Footer>
    </Section>
  );
}

export default UsuarioRecuperarSenha;
