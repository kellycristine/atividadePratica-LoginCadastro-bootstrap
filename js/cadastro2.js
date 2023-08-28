//CRIAR 
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
const cadastroNovo = document.getElementById("create-form");

checkLogged();


cadastroNovo.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(password.length < 4) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }
    
    saveAccount( {
        login: email,
        password: password,
        recados: []
    });


alert("Conta criada com sucesso");
 // Redirect to login page
 window.location.href = "../login.html";

});

function checkLogged() {
if(session) {
    sessionStorage.setItem("logged", session);
    logged = session;
}

if(logged) {
    saveSession(logged, session);

window.location.href = "../login.html";

}
}

function saveAccount(data) {
localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
if(saveSession) {
    localStorage.setItem("session", data);
}

sessionStorage.setItem("logged", data);
}

function getAccount(key) {
const account = localStorage.getItem(key);

if(account) {
    return JSON.parse(account);
}

return"";
}