function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const piadas = ["Havia dois caminhões voando e um caiu. Pq o outro continuou voando?\n\nPq era caminhao pipa :)", 
    "Pq ha uma cama elastica no Polo norte?\n\nPara o urso Polar :)", "Sabe como faz pra transformar um giz numa cobra?\n\nPonha o giz na água, ele vira uma gizboia :)",
    "Pq o Batman colocou seguro no carro?\n\nPq não queria que Robin :)", "Qual animal não gosta do amanhã?\n\nO rinocer-ontem :)",
    "qual língua os cães falam?\n\nLatim :)", "O que é uma mulher grávida para os canibais?\n\nKinder ovo :)", "Qual o doce favorito dos canibais?\n\nPé de moleque :)",
    "Quais são as pessoas mais honestas do mundo?\n\nOs cadeirantes! Pq eles nuncam te passam a perna :)", "O que aconteceu com o ferro de passar roupa que caiu da mesa?\n\nFicou passando mal :)",
    "Qual a comida favorita do faraó?\n\nA faraófa :)", "Qual o estado do Brasil que queria ser carro\n\nSer jipe :)", "Qual é o pai das aves?\n\nO Paipagaio :)",
    "Qual a cidade que quando chove molha os bêbados?\n\nBar-sem-lona :)", "O que o lápiz disse para o papel:\n\nVocê está me desapontando :)", 
    "O que o pagodeiro foi fazer na igreja?\n\nCantar PaGod :)", 'Sabe o que é um pontinho verde no Polo Norte?\n\nUm pingreen :)',
    'Sabe o que é um ponto vermelho num lago?\n\nUm jacared :)', 'Onde os mamões vão passar as férias?\n\nEles vão papaya :)', 
    'Qual a diferença entre um cavalo e um palhaço?\n\nUm palhaço gosta de palhaçada e o cavalo de palhacrua ;)', 'Que nome se dá pra uma ferramenta perdida?\n\nFoice ;)',
    'Sabe qual o rei dos queijos?\n\nO reiqueijão :)', 'Cebolinha: *Coltei* o dedo!\n\nCascão: * chora *\n\nCebolinha:Ô Cascão! Fui eu quem se machucou!\n\nCascão: É que cebola cortada me faz chorar!',
    'Qual o nome do médico que veio do futuro?\n\nO extermina-a-dor-do-futuro ;)', 'O que é a maconha enrola no jornal?\nBaseado em fatos reais :)',
    'Um caipira chega à casa de um amigo que está assistindo tv e pergunta\n\n- E aí? Firme?\n\nEntão o outro responde:\n\n- Não, só futebor.',
    'Por que Napoleão era sempre chamado para as festa na França?\n\nÈ porque ele era Bom Na Party :)', 'Por que o pinheiro não se perde na floreta?\n\nÉ porque ele tem uma pinha :)',
    'Então quando foi que os americanos comeram carne plea primeira vez?\n\nQuando chegou Cristóvão Com Lombo ;)', 
    ' que acontece quando chove na Inglaterra?\n\nVira Inglalama ;)']   


// function counter(x) {
//         let i;
//         let tamf;
//         for (i = 0; i < piadas.length; i++) {
//                 tamf = i;
//         }

//         console.log(`You have ${tamf} jokes.`);
// }

// counter(piadas)


const execute = (bot, msg, args) => {
    return msg.channel.send(piadas[29]) // getRandomInt(0, 30)
}


module.exports = {
    name: "piada",
    ajuda: "Conta uma piada aleatória;",
    execute
}
