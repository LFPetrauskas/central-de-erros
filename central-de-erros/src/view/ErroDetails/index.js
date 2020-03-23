import React from "react";
import {
  AsideComponent,
  DivCard,
  MainComponent,
  SectionErro,
  Level,
  Button,
  Fundo
} from "./style";
import { useHistory, useLocation } from "react-router";

import imagelogo from "../../images/buglogo.png";
import { LogoContainer } from "../login/styles";


function ErroDetails() {
  const history = useHistory();
  const  {state} = useLocation();
  const { erro } = state;

  if (!erro) {
    history.push("/");
  }

  function voltar() {
    history.goBack();
  }

  return (
    <Fundo>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Button onClick={voltar}>Voltar</Button>
        <LogoContainer>
          <img src={imagelogo} alt="logotipo" />
        </LogoContainer>
        <DivCard>
          <h1>
            Erro no <strong>{erro.ip}</strong> em <strong>{erro.data}</strong>
          </h1>
          <hr />
          <SectionErro>
            <MainComponent>
              <h2>Título</h2>
              <p>{erro.titulo}</p>
              <h2>Detalhes</h2>
              <p>{erro.detalhes}</p>
            </MainComponent>
            <AsideComponent>
              <Level>
                <span className={erro.level}>{erro.level}</span>
              </Level>
              <h3>Eventos</h3>
              <p>{erro.eventos}</p>
              <h3>Coletado por</h3>
              <p>{erro.usuario}</p>
            </AsideComponent>
          </SectionErro>
        </DivCard>
      </div>
    </Fundo>
  );
}

export default ErroDetails;
