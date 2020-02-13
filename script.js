// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

setInputFilter(document.getElementById("quant-input"), function(value) {
    return /^\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

setInputFilter(document.getElementById("tempo-input"), function(value) {
    return /^\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});


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

function reshape(X, max_len){
    let Y = [[]]
    let j = 0;
    for(let i=0; i<X.length; i++){
        if (i < max_len){
            Y[i] 
        }
    }
}

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