//LOGAR NO SISTEMA
const formLogin = document.getElementById("form-login");

function salvarLocalStorage(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function acessarLocalStorage(chave) {
  const dados = localStorage.getItem(chave);

  if (dados) {
    return JSON.parse(dados);
  }

  return false;
}

async function validarLogin(emailParametro, passwordParametro) {
  try {
    const { data } = await axios.post("http://localhost:5555/login", {
      acesso: emailParametro,
      senha: passwordParametro,
    });

    console.log(data);

    if (data.usuario) {
      salvarLocalStorage("usuario-logado", data.usuario);
    }

    window.location.href = "../home.html";
  } catch (error) {
    console.log(error);
  }
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;


  validarLogin(email, password);
});

function checkUsuarioLogado() {
  const usuario = acessarLocalStorage("usuario-logado");

  if (usuario) {
    window.location.href = "../home.html";
  }
}

checkUsuarioLogado();
