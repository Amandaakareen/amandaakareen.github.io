import { useState } from "react";
import styles from "./styles.css";
import img from "./imagens/fotooficial.png";
import img2 from "./imagens/fotoAmanda.png";
import img3 from "./imagens/fotooficial2.png";
import js from "./imagens/js2.png";
import html from "./imagens/html.png";
import css from "./imagens/css.png";
import react from "./imagens/React-icon.png";
import git from "./imagens/git.png";

export function App() {
  const [text, setText] = useState("");

  function handleText(element) {
    if (element === "javascript") {
      setText(
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
      );
    } else if (element === "html") {
      setText(
        "O HTML é uma das linguagens de marcação mais comumente utilizadas. Trata-se de um sistema projetado para processar, definir e exibir textos ao incorporar anotações de tags e de caracteres dentro de arquivos estilizados. Isso permite que a manipulação do texto seja mais fácil para o computador."
      );
    } else if (element === "css") {
      setText(
        "Css é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>."
      );
    } else if (element === "react") {
      setText(
        "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. "
      );
    } else if (element === "git") {
      setText(
        "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. "
      );
    }
  }

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <h1>Amanda Karen</h1>
          <div className="menu">
            <a href="#inicio">Início</a>
            <a href="#Sobremim">Sobre mim</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Habilidades">Habilidades</a>
          </div>
        </div>
      </div>
      <div className="divpai">
        <div id="inicio" className="testando">
          <div className="inicio">
            <header>
              <h2>Oi, eu sou </h2>
              <h1>Amanda Karen.</h1>
              <h3>Desenvolvedora Front-end</h3>
              <a href="https://www.linkedin.com/in/amanda-karen-247b66241">
                Linkdin
              </a>
              <a href="https://github.com/Amandaakareen">Github</a>
            </header>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="conteiner">
          <div id="Sobremim" className="sobre">
            <img src={img2} alt="" />
            <div>
              <h1>Sobre mim</h1>
              <h2>
                Meu nome é Amanda, sou estudante do curso de Análise e
                Desenvolvimento de Sistemas, atualmente estou cursando o segundo
                semestre. Sou apaixonada por desenvolvimento front-end, entre
                meus conhecimentos estão React, html, css e JavaScript.
              </h2>
            </div>
          </div>

          <div id="Projetos" className="projetos">
            <div className="classimg">
              <h1 id="Projetos">Projetos</h1>
              <img src={img3} alt="" />
            </div>
            <div className="links">
              <a href="https://github.com/Amandaakareen/Todolist">Todolist</a>
              <a href="">em breve</a>
              <a href="">em breve</a>
              <a href="">em breve</a>
              <a href="">em breve</a>
              <a href="">em breve</a>
            </div>
          </div>
          <div id="Habilidades" className="Habilidades">
            <h1>Habilidades</h1>
            <div>
              <img src={js} onMouseOver={() => handleText("javascript")} />
              <img src={html} onMouseOver={() => handleText("html")} />
              <img src={css} onMouseOver={() => handleText("css")} />
              <img src={react} onMouseOver={() => handleText("react")} />
              <img src={git} onMouseOver={() => handleText("git")} />
            </div>
            <div className="divhabilidades">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
