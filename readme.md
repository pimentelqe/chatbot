# 📌 Cypress Test Automation

Este repositório contém testes automatizados utilizando **Cypress** para validar funcionalidades de uma aplicação ChatBot fazendo tracking em entregas dos Correios.

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end
- JavaScript / TypeScript
- Node.js

## 📂 Estrutura do Projeto
```
📁 cypress
 ┣ 📂 e2e        # Testes automatizados
 ┣ 📂 fixtures   # Dados mockados
 ┣ 📂 support    # Comandos e configurações
 ┣ 📂 videos     # Vídeos gerados dos testes
```

## ▶️ Como Executar os Testes

### 1️⃣ Instalar dependências
```sh
npm install
```

### 2️⃣ Executar no modo interativo
```sh
npx cypress open
```

### 3️⃣ Executar no modo headless (com gravação de vídeo)
```sh
npx cypress run
```

## 🎥 Vídeo do Teste
Após a execução dos testes no modo **headless**, um vídeo será gerado automaticamente na pasta `cypress/videos`. Você pode visualizar um exemplo abaixo:

![Vídeo do Teste](cypress/videos/tracking.cy.js.mp4)

⚠️ **Importante:** O GitHub não exibe vídeos diretamente no README. Para compartilhar, faça o upload do vídeo em uma plataforma como YouTube ou Google Drive e insira o link aqui.

## 🛠️ Configuração Adicional
Caso queira desativar a gravação de vídeos, edite o arquivo `cypress.config.js`:
```js
module.exports = {
  video: false,
};
```

## 📌 Contribuição
Sinta-se à vontade para contribuir! Envie um **pull request** ou abra uma **issue** para melhorias. 😊

---

🚀 **Vamos automatizar!**

