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
      id: 1,
      servidor: "dev",
      checked: true,
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
      id: 2,
      servidor: "dev",
      checked: false,
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
      id: 3,
      servidor: "prd",
      checked: false,
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
      id: 4,
      servidor: "hml",
      checked: false,
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
      const restantes = [...state.erros].filter(erro => erro.checked === false);
      return { ...state, erros: [...restantes] };
    case "ARCHIVE_ITEMS":
      const arquivados = [...state.erros].map(erro => {
        if (erro.checked === true && erro.arquivado === false)
          erro.arquivado = true;
        erro.checked = false;
        return erro;
      });
      return { ...state, erros: [...arquivados] };
    case "TOGGLE_CHECK":
      const newErros = [...state.erros];
      newErros.map(erro => {
        if (erro.id === action.payload) {
          erro.checked = !erro.checked;
        }
        return erro;
      });
      return { ...state, erros: [...newErros] };
    default:
      return state;
  }
}

export default store;
