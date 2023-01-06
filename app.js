const text = [
    `Eu sou um cérebro, Watson. O resto é mero apêndice.`,
    `Madame Simza: O que você vê?
    Sherlock Holmes: Tudo! Essa é a minha maldição.`,
    `Você vê, mas não observa.`,
    `Os pequenos detalhes são sempre os mais importantes.`,
    `Todos os problemas se tornam infantis depois de explicados.`,
    `O mundo está cheio de coisas óbvias que ninguém jamais observa.`,
    `Se não houver recompensa após a vida, então o mundo é apenas uma brincadeira cruel.`,
    `É um erro grave formular teorias antes de conhecer os fatos. Sem querer, começamos a mudar os fatos para que se adaptem às teorias, em vez de formular teorias que se ajustem aos fatos.`,
    `Par uma mente ampla, nada é pequeno.`,
    `Passo minha vida procurando escapar das coisas banais e corriqueiras da existência.`,
    `Uma vez eliminado o impossível, o que restar, não importa o quão improvável, deve ser a verdade.`,
    `Eu disse faça valer a pena. Quantas oportunidades preciso lhe dar?`,
    `Não há nada mais enganador que um fato óbvio.`,
    `Talvez seja melhor morrer sozinho do que, viver num eterno purgatório. Enfim.`,
    `O sentimento é um defeito químico encontrado no lado perdedor.`,
    `É tão manifesto que fica secreto.`,
    `Sua vida não lhe pertence não ouse tira-la.`,
    `Que melhor lugar para começar uma guerra do que uma conferência de paz.`,
    `Na cidade, a pressão da opinião pública é capaz de fazer o que a lei não consegue.`,
    `Toda minha vida é um esforço para escapar do tédio do cotidiano. Esses pequenos problemas ajudam.`,
    `O meu espírito rebela-se contra a estagnação. Deem-me problemas, muito trabalho, o mais complicado criptograma ou a mais intrincada análise e eu estarei no meu meio.`,
    `Não sabia onde procurar, e assim perdeu tudo que era importante.`,
    `Trabalho é o melhor antídoto para depressão.`,
    `Elementar, meu caro Watson.`
]

const paragrafos = document.getElementById('amount')
const form = document.getElementById('form')
const lorem = document.getElementById('lorem-text')

const handleSubmit = (event) => {
    event.preventDefault()

    const numParagrafos = Number(paragrafos.value)
    const texto = text.slice(0, numParagrafos)

    const result = texto.map((item) => {
        return `<p>${item}</p>`
    }).join('')

    lorem.innerHTML = result
}

form.addEventListener('submit', handleSubmit)
