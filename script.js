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
"Monitor CRT Modelo FA 3435",
"Monitor CRT Modelo C15L",
"Impressora HP Officejet 6410",
"Impressora HP Modelo CB412A",
"Monitor LCD Modelo 740",
"Monitor LCD Modelo W19",
"CPU DELL Modelo DCSM",
"CPU DELL Modelo DC5M1F",
]

var Form = document.getElementById('formulario');

/* ----------EQUIPAMENTOS-------- */
var Equip = document.getElementById('equip');
for(let i=0;i<EQUIPAMENTOS.length;i++){
    let S = EQUIPAMENTOS[i];
    Equip.innerHTML += (
        '<input type="radio" id="'+S+'" name="equipamento" value="'+S+'"> </input>'+
        '<label for="'+S+'">'+S+'</label><br>'
    );
}

/* -------MATERIAIS-------- */