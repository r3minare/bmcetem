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


var DADOS = {
    "Monitor CRT Modelo FA 3435": ["Modelo", "MITSUBISHI", 48.0, null, 0.0, 5937.0, 44.03, 0.0, 0.0, 1469.0, 10.89, 401.0, 2.97, 0.0, 0.0, 1991.0, 14.77, null, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Monitor CRT Modelo C15LA-0": ["Modelo", "LG", 19.0, 1489.0, 14.42, 6467.0, 62.63, 0.0, 0.0, 910.0, 8.81, 479.0, 4.64, 0.0, 0.0, 541.0, 5.24, 420.0, 4.07, 20.0, 0.19, 0.0, 0.0, 0.0, 0.0],
    "Impressora HP Officejet 6310": ["Model Number: SDGOB-0506", "HP", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    "Impressora HP Modelo CB412A": ["S/N: BRBS8B50GG", "HP", 45.0, 1208.0, 22.44, 0.0, 0.0, 0.0, 0.0, 3763.0, 69.91, 6.0, 0.11, 0.0, 0.0, 406.0, 7.54, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Monitor LCD Modelo 740N": ["S/N: HA17HXCL413266P", null, null, 1715.0, 43.12, 453.0, 11.39, 0.0, 0.0, 1055.0, 26.53, 7.0, 0.18, 0.0, 0.0, 215.0, 5.41, 0.0, 0.0, 0.0, 0.0, 4.0, 0.1, 528.0, 13.28],
    "Monitor LCD Modelo W1942PE-PF": ["S/N: BRG0370930", null, null, 901.0, 26.89, 378.0, 11.28, 0.0, 0.0, 1085.0, 32.38, 12.0, 0.36, 0.0, 0.0, 285.0, 8.5, 0.0, 0.0, 0.0, 0.0, 7.0, 0.21, 683.0, 20.38],
    "CPU DELL Modelo DCSM": ["S/N: 2H771G1", "DELL", 25.0, 1156.0, 10.18, 0.0, 0.0, 657.0, 5.79, 6792.0, 59.84, 198.0, 1.74, 1794.0, 15.8, 754.0, 6.64, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "CPU DELL Modelo DCSM1F": ["S/N: 9SSPX4", "DELL", 20.0, 1100.0, 11.68, 0.0, 0.0, 436.0, 4.63, 6469.0, 68.69, 135.0, 1.43, 660.0, 7.01, 618.0, 6.56, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
}

setInputFilter(document.getElementById("quant-input"), function(value) {
    return /^\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

setInputFilter(document.getElementById("tempo-input"), function(value) {
    return /^\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});

var MATERIAIS = [
    "Plástico", "Metal", "YOK", "Acrílico",
    "Vidro", "Cabos", "Borracha", "Fonte",
    "Alumínio", "Placa", "Lâmpada", "Valor final",
    ]

var BASES = [
"GEA",
"CEMPRE",
"Nenhum",
]

var EQUIPAMENTOS = Object.keys(DADOS);

var Form = document.getElementById('formulario');

/* ----------EQUIPAMENTOS-------- */
var Equip = document.getElementById('equip');
for(let i=0;i<EQUIPAMENTOS.length;i++){
    let S = EQUIPAMENTOS[i];
    Equip.innerHTML += (
        '<input type="radio" id="'+S+'" name="equip-input" value="'+S+'"></input>'+
        '<label for="'+S+'">'+S+'</label><br>'
    );
}

/* -------VALORES-------- */
var Valor = document.getElementById('valor');
for(let i=0;i<MATERIAIS.length;i++){
    let S = MATERIAIS[i];
    Valor.innerHTML += (
        '<div class="grid-item">'+
          '<div class="item">'+
            '<span><b>'+
            S+
            '</b></span>'+
          '</div>'+
          '<span>R$ </span>'+
          '<input class="text-input" type="text" value="10"></input>'+
        '</div>'
    );
}

/* -------MASSA-------- */
var Massa = document.getElementById('massa');
for(let i=0;i<MATERIAIS.length;i++){
    let S = MATERIAIS[i];
    Massa.innerHTML += (
        '<div class="grid-item">'+
        '<h4>'+S+'</h4>'+
          '<span class="value" id="'+S+'-m'+'"></span>'+'<span>g</span><br>'+
          '<span class="value" id="'+S+'-p'+'"></span>'+'<span>%</span>'+
        '</div>'
    );
}

function calc(){
    let equips = document.getElementsByName("equip-input");
    let equip;
    for(let i=0;i<equips.length;i++){
        if (equips[i].checked){
            equip = equips[i].value;
            break;
        }
    }
    let quant = parseFloat(document.getElementById("quant-input").value);
    let tempo = parseFloat(document.getElementById("tempo-input").value);

    let equip_dados = DADOS[equip];

    for(let j=0;j<MATERIAIS.length;j++){
        let mat = MATERIAIS[j];

        let mat_m = equip_dados[2*j];
        let mat_p = equip_dados[2*j+1];

        let txt_m = document.getElementById(mat + "-m");
        let txt_p = document.getElementById(mat + "-p");

        txt_m.innerHTML = (mat_m * quant).toString();
        txt_p.innerHTML = (mat_p * quant).toString();
    }
}