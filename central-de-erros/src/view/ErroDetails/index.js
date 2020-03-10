import React from "react";
import {
  AsideComponent,
  DivCard,
  MainComponent,
  SectionErro,
  Rodape
} from "./style";
import NavBar from "../../components/navbar";
import "./style";

const erro = {
  servidor: "127.0.0.1",
  data: "24/05/2019 10:15",
  titulo: "acceleration.Service.AddCandidate: <forbidden>",
  detalhes:
    'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
  level: "error",
  eventos: "1000",
  usuario: "<token-usuario>"
};

function ErroDetails() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      }}
    >
      <button>Voltar</button>
      <DivCard>
        <h1>
          Erro no {erro.servidor} em {erro.data}
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
            <p>{erro.level}</p>
            <h3>Eventos</h3>
            <p>{erro.eventos}</p>
            <h3>Coletado por</h3>
            <p>{erro.usuario}</p>
          </AsideComponent>
        </SectionErro>
      </DivCard>
      <Rodape>Central de Erros</Rodape>
    </div>
  );
}

export default ErroDetails;
