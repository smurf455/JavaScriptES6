class Despesa{
    constructor(ano, mes, dia , descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.descricao = descricao
        this.valor = valor     
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == null || this[i] == '' ){
                return false
            }  
        }
        return true
    }
}

//criação da classe que irá armazenar os dados
class Bd{
    //Criacao do método construtor que irá recuperar o id e verificar se ele já existe ou não
    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }

    }
    // Método criado para recuperar o id atual e incrementar +1 no seu valor atual
    getProximoid() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    // Método criado para persistir os dados na storage fazendo também com que os dados que existem no id sejam atualizados, a cada vez que o 
    //método gravar é chamado assim sempre incrementando e atualizando o valor persistente no id
    gravar(d) {
       // 
       let id = this.getProximoid()

       localStorage.setItem(id, JSON.stringify(d))

       localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesas(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

   let despesas = new Despesa(ano.value, mes.value, dia.value, descricao.value, valor.value)

    if(despesas.validarDados()){
      // bd.gravar(despesas)
       document.getElementById('t').innerHTML = 'Informações validadas com sucesso'
       document.getElementById('div_cor').className = 'modal-header text-success'
       document.getElementById('msg').innerHTML = ' Dados cadastrados com sucesso '
       document.getElementById('b').className = 'btn btn-success'
        $('#RegistraModal').modal('show')
    } else{
        document.getElementById('t').innerHTML = 'Verifique suas informações'
        document.getElementById('div_cor').className = 'modal-header text-danger'
        document.getElementById('msg').innerHTML = ' Erro ao cadastrar os dados '
        document.getElementById('b').className = 'btn btn-danger'
        $('#RegistraModal').modal('show')
    }
}

 

