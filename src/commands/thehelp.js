const execute = (bot, msg, args) => {
    let string = "===== LISTA DE COMANDOS =====\n\n";
    bot.commands.forEach((command) => {
        if (command.ajuda) {
            string += `**${process.env.PREFIX}${command.name}**: ${command.ajuda}\n`;
        }
    })
    return msg.channel.send(string);
};



module.exports = {
    name: "ajuda",
    ajuda: "uhhhhhhhh, meio óbvio o que esse comando faz, né?",
    execute
};