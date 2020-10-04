const http = require("http");
const express = require("express");
const app = express();

app.post("/verificarNome", function (req, res) {
    const tecla_2 = ["a", "b", "c"];
    const tecla_3 = ["d", "e", "f"];
    const tecla_4 = ["g", "h", "i"];
    const tecla_5 = ["j", "k", "l"];
    const tecla_6 = ["m", "n", "o"];
    const tecla_7 = ["p", "q", "r", "s"];
    const tecla_8 = ["t", "u", "v"];
    const tecla_9 = ["w", "x", "y", "z"];

    let teste = "2 222 222 33 66 8 88 777 33";
    let teste2 = teste.split(" ");
    let textoFinal = '';
    for (let i = 0; i < teste.length; i++) {
        if (textoAux === '2')
            textoFinal.concat(tecla_2[aux]);
        else if (textoAux === '3')
            textoFinal.concat(tecla_3[aux]);
        else if (textoAux === '4')
            textoFinal.concat(tecla_4[aux]);
        else if (textoAux === '5')
            textoFinal.concat(tecla_5[aux]);
        else if (textoAux === '6')
            textoFinal.concat(tecla_6[aux]);
        else if (textoAux === '7')
            textoFinal.concat(tecla_7[aux]);
        else if (textoAux === '8')
            textoFinal.concat(tecla_8[aux]);
        else if (textoAux === '9')
            textoFinal.concat(tecla_9[aux]);
    }

    res.send();
});

http.createServer(app).listen(8080, () => console.log("Servidor rodando local na porta 8080"));