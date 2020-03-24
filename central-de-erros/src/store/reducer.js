/* Este é o estado inicial do reducer de usuário ou seja o estado de usuário 
   deslogado */
const INITIAL_STATE = {
  usuarioEmail: "",
  usuarioLogado: 0,
  usuarioHash: "",
  mostrarArquivados: false,
  propriedadeOrdem: "",
  texto: "",
  filtro: "",
  servidorFiltro: "",
  selected: {},
  erros: [
    {
      servidor: "dev",
      ip: "127.0.0.1",
      data: "24/05/2019 10:15",
      titulo: "acceleration.Service.AddCandidate: <forbidden>",
      detalhes:
        // 'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
        'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" l',
      level: "warning",
      eventos: "1000",
      usuario: "<token-usuario>",
      arquivado: false
    },
    {
      servidor: "dev",
      ip: "127.0.0.1",
      data: "24/05/2019 10:15",
      titulo: "acceleration.Service.AddCandidate: <forbidden>",
      detalhes:
        // 'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
        'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" l',
      level: "warning",
      eventos: "100",
      usuario: "<token-usuario>",
      arquivado: false
    },
    {
      servidor: "prd",
      ip: "127.0.0.1",
      data: "24/05/2019 10:15",
      titulo: "acceleration.Service.AddCandidate: <forbidden>",
      detalhes:
        // 'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
        'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" l',
      level: "debug",
      eventos: "10",
      usuario: "<token-usuario>",
      arquivado: false
    },
    {
      servidor: "hml",
      ip: "127.0.0.1",
      data: "24/05/2019 10:15",
      titulo: "acceleration.Service.AddCandidate: <forbidden>",
      detalhes:
        // 'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
        'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" l',
      level: "error",
      eventos: "1",
      usuario: "<token-usuario>",
      arquivado: false
    }
  ]
};

function store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        usuarioLogado: 1,
        usuarioEmail: action.usuarioEmail,
        usuarioHash: action.usuarioHash
      };
    case "LOG_OUT":
      return {
        ...state,
        usuarioLogado: 0,
        usuarioEmail: null,
        usuarioHash: null
      };
    case "FILTER_BY_SERVER":
      const servidorFiltro = action.payload;
      return { ...state, servidorFiltro };
    case "ORDER_BY":
      const propriedadeOrdem = action.payload;
      return { ...state, propriedadeOrdem };
    case "BUSCA_POR":
      const { texto, filtro } = action.payload;
      return { ...state, texto, filtro };
    case "ALTERNA_EXIBICAO_ARQUIVADOS":
      return { ...state, mostrarArquivados: !state.mostrarArquivados };
    case "DELETE_ITEMS":
      const itensDeletar = Object.keys(state.selected);
      let restantes = [...state.erros];
      restantes = restantes.filter((erro, index) => {
        let deveManter = true;
        for (let i = 0; i < itensDeletar.length; i++) {
          if (itensDeletar[i] === index.toString()) {
            deveManter = false;
            break;
          }
        }
        return deveManter;
      });
      return { ...state, erros: [...restantes] };
    case "ARCHIVE_ITEMS":
      const itensArquivar = Object.keys(state.selected);
      let arquivados = [...state.erros];
      arquivados = arquivados.filter((erro, index) => {
        for (let i = 0; i < itensArquivar.length; i++) {
          if (itensArquivar[i] === index.toString()) {
            erro.arquivado = true;
            break;
          }
        }
        return erro;
      });
      return { ...state, erros: [...arquivados] };
    case "SET_SELECTED":
      return { ...state, selected: { ...action.payload } };
    default:
      return state;
  }
}

export default store;
