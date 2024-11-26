// 1 - instalação
// console.log(axios)

/**
 * Fun o que faz um request GET para a API
 * https://jsonplaceholder.typicode.com/users
 * e retorna os dados da resposta
 * @returns {Promise<Array<Object>>}
 */
const getData = async() => {
    try {
        // 4 - definindo headers
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            headers: {
                "Content-Type": "application/json",
                custom: "header",
            },
        })
        console.log(response)

        return response.data
    }catch (error) {
        console.log(error)
    }
}

getData()

// 3 - imprimindo dados na tela
const container = document.querySelector('#user-container')
/**
 * Fun o que imprime na tela os dados
 * @returns {void}
 */
const printData = async () => {
    /**
     * Armazena os dados obtidos com a fun o getData
     * @type {Promise<Array<Object>>}
     */
    const data = await getData()

    console.log(data)

    /**
     * Percorre o array de objetos e cria os elementos HTML
     * necess rios para imprimir na tela
     */
    data.forEach((user) => {
        /**
         * Cria o elemento div que vai conter as informa es do usu rio
         * @type {HTMLDivElement}
         */
        const div = document.createElement('div')

        /**
         * Cria o elemento h2 que vai conter o nome do usu rio
         * @type {HTMLHeadingElement}
         */
        const nameElement = document.createElement('h2')
        nameElement.textContent = user.name
        div.appendChild(nameElement)

        /**
         * Cria o elemento p que vai conter o email do usu rio
         * @type {HTMLParagraphElement}
         */
        const emailElement = document.createElement('p')
        emailElement.textContent = user.email
        div.appendChild(emailElement)
        container.appendChild(div)
    });
}

printData()

