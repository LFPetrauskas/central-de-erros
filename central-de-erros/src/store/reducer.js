/* Este é o estado inicial do reducer de usuário ou seja o estado de usuário 
   deslogado */
const INITIAL_STATE = {
  usuarioEmail: '',
  usuarioLogado: 0,
  usuarioHash: '',
  erros: [{
    level: "teste",
    descricao: "teste",
    eventos: "teste"
  }],
  erroSelecionado: null
};

function store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail, usuarioHash: action.usuarioHash }
    case 'LOG_OUT':
      return { ...state, usuarioLogado: 0, usuarioEmail: null, usuarioHash: null }
    case 'SELECT_ERROR':
      return {...state, erroSelecionado: action.payload };
    default:
      return state;
  }
}

export default store;