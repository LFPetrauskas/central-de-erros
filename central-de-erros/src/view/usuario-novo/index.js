import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../config/firebase";
import "firebase/auth";
import { Section, Card, Input, Button, Form, Icone, Footer } from "./styles";

function NovoUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function Cadastrar() {
    if (!email) {
      toast.error("Email deve ser informado !");
    } else if (!senha) {
      toast.error("Senha deve ser informada !");
    } else {
      // Faz validações para fazer o cadastro do usuário pegando dados do retorno
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(resultado => {
          toast.success("Usuário Cadastrado com sucesso !");
        })
        .catch(erro => {
          switch (erro.message) {
            case "Password should be at least 6 characters":
              toast.error("A Senha deve ter pelo menos 6 caracteres");

              break;
            case "The email address is already in use by another account.":
              toast.error(
                "Este email já está sendo utilizado por outro usuário!"
              );

              break;
            case "The email address is badly formatted.":
              toast.error("O Formato do email é inválido.");

              break;
            default:
              toast.error(
                "Não foi possível cadastrar. Tente novamente mais tarde!"
              );

              break;
          }
        });
    }
  }

  return (
    <Section>
      <Card>
        <h1>
          <i className="fa fa-user-plus"></i> Cadastro de Usuários
        </h1>
        <hr />
        <Form>
          <Icone>
            <i className="fa fa-envelope"></i>
            <Input
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Icone>

          <Icone>
            <i className="fa fa-key"></i>
            <Input
              onChange={e => setSenha(e.target.value)}
              type="password"
              placeholder="Senha"
            />
          </Icone>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Card>
      <Footer>
        <Link to="/">Início</Link>
      </Footer>
    </Section>
  );
}

export default NovoUsuario;
