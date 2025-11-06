//SISTEMA FIRABASE DE AUTENTICAÇÃO PARA CADASTRO E LOGIN
import { auth } from "./script-firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Registrar Service Worker (apenas 1 vez)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registrado com sucesso:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error);
      });
  });
}

// Cadastrar usuário
function cadastrar(email, senha) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      alert("Usuário cadastrado!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Fazer login
function login(email, senha) {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      localStorage.setItem('userEmail', email);
      window.location.href = 'home.html';
    })
    .catch((error) => {
      alert('Email ou senha incorretos');
    });
}

// tornar disponível para chamadas do HTML (se precisar)
window.cadastrar = cadastrar;
window.login = login;
