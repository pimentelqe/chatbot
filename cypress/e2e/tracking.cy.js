describe('consulta de encomenda no ChatBot', () => {
  it('Deve indicar que a encomenda ja foi entregue', () => {
    const codigoDeRastreio = 'PD123456785BR'
    cy.abrirChatBot()

    cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')

    cy.selecionarOpcao('Sim, por favor!')

    cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')

    cy.enviarMensagem(codigoDeRastreio)

    cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`)

    cy.selecionarOpcao('Sim, está certo!')

    cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')

    cy.verificarMensagem(
      'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!',
      7000

    )

  })
  it('Deve indicar que a encomenda esta a caminho', () => {
    const codigoDeRastreio = 'BR987654321BR'
    cy.abrirChatBot()
  
    cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
  
    cy.selecionarOpcao('Sim, por favor!')
  
    cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
  
    cy.enviarMensagem(codigoDeRastreio)
  
    cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`)
  
    cy.selecionarOpcao('Sim, está certo!')
  
    cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
  
    cy.verificarMensagem(
      'A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.',
      7000
  
    )
  })
  
  it('Deve indicar que a encomenda esta em rota de entrega', () => {
    const codigoDeRastreio = 'QW112233445BR'
    cy.abrirChatBot()
  
    cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
  
    cy.selecionarOpcao('Sim, por favor!')
  
    cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
  
    cy.enviarMensagem(codigoDeRastreio)
  
    cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`)
  
    cy.selecionarOpcao('Sim, está certo!')
  
    cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
  
    cy.verificarMensagem(
      'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦',
      7000
  
    )
  
  
  })
  
  it('Deve exibir erro para o codigo de rastreio não encontrado ', () => {
    const codigoDeRastreio = 'AB123456789XY'
    cy.abrirChatBot()
  
    cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
  
    cy.selecionarOpcao('Sim, por favor!')
  
    cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
  
    cy.enviarMensagem(codigoDeRastreio)
  
    cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`)
  
    cy.selecionarOpcao('Sim, está certo!')
  
    cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
  
    cy.verificarMensagem(
      'Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?',
      7000
    )
    cy.selecionarOpcao('Encerrar atendimento')
  
    cy.verificarMensagem(
      'Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar.'
    )
  
  })
})


Cypress.Commands.add('abrirChatBot', () => {

  cy.viewport('iphone-xr')
  cy.visit('/')
  cy.get('button[aria-label="Open Chat"')
    .should('be.visible')
    .click()

  cy.get('.rcb-chat-header span')
    .should('be.visible')
    .and('have.text', 'Sensei')

})

Cypress.Commands.add('verificarMensagem', (mensagemEsperada, timeout = 4000) => {


  cy.contains('.rcb-bot-message', mensagemEsperada, { timeout: timeout })
    .should('be.visible')


})

Cypress.Commands.add('selecionarOpcao', (opcao) => {

  cy.contains('.rcb-options', opcao)
    .click()

})

Cypress.Commands.add('enviarMensagem', (mensagem) => {

  cy.get('textarea[placeholder^="Escreva sua mensagem"')
    .type(mensagem)

  cy.get('.rcb-send-button').click()

})