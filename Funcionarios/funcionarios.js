const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const paisChina = p => p.pais === 'China'
const mulheresChinesas = m => m.genero === 'M'
const menorSalario = (menor, f) => {
    return menor.salario < f.salario ? menor : f
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const filtro = funcionarios.filter(paisChina).filter(mulheresChinesas).reduce(menorSalario)
    console.log(filtro)
})


//const salario = s => 

//const filtro = funcionarios.filter(mulheresChinesas)