// pegando o elemento amount
const amount = document.getElementById('amount')

// Manipulando o input amount para treceber somente números
amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})