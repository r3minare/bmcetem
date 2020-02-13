var MATERIAIS = [
    "Plástico", "Metal", "YOK", "Acrílico",
    "Vidro", "Cabos", "Borracha", "Fonte", "Tubo",
    "Alumínio", "Placa", "Lâmpada", "Valor final",
    ]

var BASES = [
"GEA",
"CEMPRE",
"Nenhum",
]

var EQUIPAMENTOS = [
"Monitor CRT Modulo FA 3435",
"Impressora HP Modelo CB412A",
"CPU DELL Modelo DC5M1F",
]

/* ----------EQUIPAMENTOS-------- */
for(let i=1;i<EQUIPAMENTOS.length;i++){
    let S = EQUIPAMENTOS[i];
    $('formulario').insert(
        '<input type="radio" id="'+S+'" name="equipamento" value="'+S+'"> </input>'+
        '<label for="'+S+'">'+S+'</label><br>'
    );
}