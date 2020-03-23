/* Este é o estado inicial do reducer de usuário ou seja o estado de usuário 
   deslogado */
const INITIAL_STATE = {
  usuarioEmail: "",
  usuarioLogado: 0,
  usuarioHash: "",
  erros: [
    {
      servidor: "127.0.0.1",
      data: "24/05/2019 10:15",
      titulo: "acceleration.Service.AddCandidate: <forbidden>",
      detalhes:
        'File "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\nFile "/go/pkg/mod/github/sirupsen/logrus@v1.1.0/logger.go" line 228, in (*Logger).Error\n',
      level: "warning",
      eventos: "1000",
      usuario: "<token-usuario>"
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
    // case "SELECT_ERROR":
    //   return { ...state, erroSelecionado: action.payload };
    default:
      return state;
  }
}

export default store;
