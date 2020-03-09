import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './style.css';

function NovoSusuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function Cadastrar() {
    if (!email) {
      toast.error('Email deve ser informado !');

    } else if (!senha) {
      toast.error('Senha deve ser informada !');

    } else {
      // Faz validações para fazer o cadastro do usuário pegando dados do retorno
      firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {

        toast.success('Usuário Cadastrado com sucesso !');
      }).catch(erro => {

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            toast.error('A Senha deve ter pelo menos 6 caracteres');

            break;
          case 'The email address is already in use by another account.':
            toast.error('Este email já está sendo utilizado por outro usuário!');

            break;
          case 'The email address is badly formatted.':
            toast.error('O Formato do email é inválido.');

            break;
          default:
            toast.error('Não foi possível cadastrar. Tente novamente mais tarde!');

            break;
        }
      })
    }
  }

  return (
    <div className="form-cadastro">
      <form className="form-login">
        <div className="label-cadastro">
          <h3><i class="fa fa-user-plus"></i> Cadastro de Usuários</h3>
          <hr />
        </div>
        <div >
          <div>
            <span><i class="fa fa-envelope"></i></span>
          </div>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
        </div>


        <div >
          <div>
            <span><i class="fa fa-key"></i></span>
          </div>
          <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" placeholder="Senha" />
        </div>
      </form>
    </div>
  );
};

export default NovoSusuario;