function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

cantadas = ['Seu pai é padeiro?\nPq ele é um sonho :)', 'Seu pai é fazendeiro:\nPq ele fez o meu pepino crescer :)',
    'Você não é agua, mas me deixa toda molhadinha ( ͡° ͜ʖ ͡°)', 'Me chama de picolé e vem me chupar (͠≖ ͜ʖ͠≖)',
    'Me cham de Goku e vem botar o pau no meu cu ( ͡° ͜ʖ ͡°)', 'Compra um passarinho e deixa eu ver seu periquito ( ͡ಥ ͜ʖ ͡ಥ)', 
    'Comprei um pizza, vem ver a minha calabresa :)', 'Me chama de árvore e vem pegar na minha madeira (͠≖ ͜ʖ͠≖)', 
    'Você não é glowstone mas ilumina o meu caminho :)', 'Me chama de Netflix e vem viver um filme comigo :)',
    'Tinha dois doces numa mesa, o brigadeiro e o beijinho. O brigadeiro caiu no chão.\nSerá que o beijinho rola? ¯_( ͡° ͜ʖ ͡°)_/¯',
    'Se beleza fosse flor, você seria um campo de girassois :)', 'Queria te desejar noite, porque ser fosse boa, estaríamos juntos <3',
    'Dinheiro me lembra ouro, ouro me lembra ladrão, ladrão me lembra você que roubou meu coração :)', 'As rosas são vermelhas, violetas são azuis,\neu não posso rimar, mas posso namorar você?',
    'Você acredita em amor à primeira vista ou devo passar aqui mais uma vez? (͠≖ ͜ʖ͠≖)', 'Eu perdi meu número de telefone... me empresta o seu? :)',
    'Se vc fosse uma parte do planeta Terra você seria uma das sete maravilhas do mundo :)', 'Sabe o que combina com você? Eu :)', 
    'Você não é GPS quebrado, mas me deixa sem rumo…', 'Me passa seu Instagram? É que a minha mãe falou para eu seguir meu sonho!', 
    'Me chama de pokemon e vem ver minhas pokebolas ( ͡° ͜ʖ ͡°)', 'Se você quiser pode até me chamar de Buzz Lightyear, porque eu sou capaz de levar a nossa relação ao infinito e além :)',
    'Eu não sou Alice, mas com você me sinto no País das Maravilhas :)', 'Sua mão ficaria mais bonita encaixada na minha :)',
    'Meu amor por você é igual à obra do governo. Nunca acaba…', 'Vem ser o Mário do meu Luigi (͠≖ ͜ʖ͠≖)', 
    'Entre Star Wars e Star trek, o que eu queria mesmo era star com você :)', 'Descobri que te amo demais :)',
    'Vamo brincar de núvem, eu fico nú e vc vem ( ͡° ͜ʖ ͡°)', 'Você não é Steven mas é o meu universo :)',
    'Mina, vira socialista e vem socializar sua boca com a minha ( ͡° ͜ʖ ͡°)', 'Eu não faço parte dos Simpsons mas eu já previ meu futuro com você :)']

// function counter(x) {
// 	let i;
// 	let tamf;
// 	for (i = 0; i < cantadas.length; i++) {
// 		tamf = i;
// 	}

// 	console.log(`Vc tem ${tamf} cantadas.`);
// }
// counter(cantadas)


const execute = (bot, msg, args) => {
    msg.channel.send(cantadas[getRandomInt(0, 33)]);
}

module.exports = {
    name: "cantada",
    ajuda: "Conta uma cantada aleatória;",
    execute
}