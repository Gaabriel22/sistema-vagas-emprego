const vagas = []

function listarVagas() {
    if (vagas.length === 0) {
        alert("Nenhuma vaga de emprego disponível no momento.")
    } else {
        vagas.forEach(function (vaga, index) {
            alert("Índice: " + index + "\nNome: " + vaga.nome + "\nQuantidade de inscritos " + vaga.candidatos.length)
        })
    }
}

function criarVaga() {
    const nomeVaga = prompt("Digite o nome da vaga:")
    const descricao = prompt("Escreva a descrição da vaga:")
    const data = prompt("Digite a data limite da vaga (dd/mm/aaaa):")

    const novaVaga = {
        nome: nomeVaga,
        descricao: descricao,
        dataLimite: data,
        candidatos: []
    }

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nomeVaga + "\nDescrição: " + descricao + "\nData limite: " + data
    )

    if (confirmacao) {
        vagas.push(novaVaga)
        alert("Vaga salva com sucesso!")
    } else {
        alert("Voltando ao menu...")
    }
}

function visualizarVaga(indiceVaga) {
    if (vagas.length === 0 || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Vaga não encontrada")
        return
    }

    const vaga = vagas[indiceVaga]
    alert("Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite + "\nCandidatos: " + vaga.candidatos)
}

function inscreverCandidato(nomeCandidato, indiceVaga) {
    if (vagas.length === 0 || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Vaga não encontrada")
        return
    }

    const vaga = vagas[indiceVaga]

    const confirmacao = prompt("Confirma a inscrição de " + nomeCandidato + " na vaga " + vaga.nome + "? (Sim/Não)")

    if (confirmacao === "Sim") {
        vaga.candidatos.push(nomeCandidato)
        alert("Candidato " + nomeCandidato + " inscrito na vaga " + vaga.nome)
    } else {
        alert("Inscrição cancelada")
    }
}

function excluirVaga(indiceVaga) {
    if (vagas.length === 0 || indiceVaga < 0 || indiceVaga >= vagas.length) {
        alert("Vaga não encontrada")
        return
    }

    const vaga = vagas[indiceVaga]

    const confirmacao = prompt("Confirma a exclusão da vaga " + vaga.nome + "? Todos os candidatos inscritos serão removidos. (Sim/Não)")

    if (confirmacao === "Sim") {
        vagas.splice(indiceVaga, 1)
        alert("Vaga " + vaga.nome + " excluída com sucesso.")
    } else {
        alert("Exclusão cancelada.")
    }
}

function exibirMenu() {
    return prompt(
        "Sistema de vagas de emprego\n" +
        "Escolha uma opção a seguir:\n" +
        "1. Listar vagas\n" +
        "2. Criar uma vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "3":
                const indiceVisualizar = prompt("Digite o índice da vaga que deseja visualizar:");
                visualizarVaga(indiceVisualizar)
                break
            case "4":
                const nomeCandidato = prompt("Digite o nome do candidato:")
                const indiceInscrever = prompt("Digite o índice da vaga:")
                inscreverCandidato(nomeCandidato, indiceInscrever)
                break
            case "5":
                const indiceExcluir = prompt("Digite o índice da vaga que deseja excluir:")
                excluirVaga(indiceExcluir)
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }

    } while (opcao !== "6")
}

executar()