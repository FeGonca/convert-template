// Cotação de moedas do dia
const USD = 5.83
const EUR = 6.38
const GBP = 7.48

// Obtendo os elementos
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando o input amount para treceber somente números
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break    
        default:
            break;
    }
}

// Função para converter a moeda
/**
 * 
 * @param {Number} amount 
 * @param {Number} price 
 * @param {String} symbol 
 */
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = R$${formatCurrencyBRL(price)}`

        // Realizando o calculo e atribuindo ao elemento result
        result.textContent = `${formatCurrencyBRL(amount * price).replace('R$', '')} Reais`

        // Aplica a classe que exibe o footer
        footer.classList.add('show-result')

    } catch (error) {
        console.log(error)
        // Remove a clasee do footer removendo o erro
        footer.classList.remove('show-result')
        alert('Não foli possível converter. Tente novamente mais tarde.')
    }
}

// Formata a moeda em Real Brasileiro
/**
 * 
 * @param {Number} value Valor para ser convertido em real brasileiro
 * @returns Number
 */
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}