import React from "react";
import {
  AsideComponent,
  DivCard,
  MainComponent,
  SectionErro,
  Level,
  Button
} from "./style";
import { useHistory } from "react-router";

import imagelogo from "../../images/buglogo.png";
import { LogoContainer } from "../login/styles";

const erro = {
  servidor: "127.0.0.1",
  data: "24/05/2019 10:15",
  titulo: "acceleration.Service.AddCandidate: <forbidden>",
  detalhes:
    'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
  level: "warning",
  eventos: "1000",
  usuario: "<token-usuario>"
};

function ErroDetails() {
  const history = useHistory(); //retirar caso não for usar routes

  function voltar() {
    history.goBack();
  }

  return (
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
          Erro no <strong>{erro.servidor}</strong> em{" "}
          <strong>{erro.data}</strong>
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
  );
}

export default ErroDetails;
