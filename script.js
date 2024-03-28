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

var NO_BASE = "Nenhuma";

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

function setIntFilter(el_id){
    setInputFilter(document.getElementById(el_id), function(value) {
        return /^\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
}

function setFloatFilter(el_id){
    setInputFilter(document.getElementById(el_id), function(value) {
        return /^[\+\-]?\d*,\d+$/.test(value); // Allow digits and '.' only, using a RegExp
    });
}

setIntFilter("quant-input");


var MATERIAIS = [
    "PLÁSTICO", "VIDRO", "ALUMÍNIO", "METAL",
    "CABOS", "FONTE","PLACA", "YOK", "BORRACHA",
    "LÂMPADA", "ACRÍLICO",
]

var BASES = {
"Nenhuma" : {
    "PLÁSTICO":	 1.50,
    "VIDRO"   : 10.00,
    "ALUMÍNIO":  2.50,
    "METAL"   :  1.00,
    "CABOS"   :  2.00,
    "PLACA"   :  4.50,
    "YOK"     :	 null,
    "BORRACHA":  null,
    "LÂMPADA" :  1.00,
    "ACRÍLICO":  null,	
    "FONTE"	  :  null,
    },
"GEA" : {
    "PLÁSTICO":	 1.50,
    "VIDRO"   : 10.00,
    "ALUMÍNIO":  2.50,
    "METAL"   :  1.00,
    "CABOS"   :  2.00,
    "PLACA"   :  4.50,
    "YOK"     :	 null,
    "BORRACHA":  null,
    "LÂMPADA" :- 1.00,
    "ACRÍLICO":  null,	
    "FONTE"	  :  null,
    },
"CEMPRE" : {
    "PLÁSTICO":	 1.50,
    "VIDRO"   : 10.00,
    "ALUMÍNIO":  2.50,
    "METAL"   :  1.00,
    "CABOS"   :  2.00,
    "PLACA"   :  4.50,
    "YOK"     :	 null,
    "BORRACHA":  null,
    "LÂMPADA" :- 1.00,
    "ACRÍLICO":  null,	
    "FONTE"	  :  null,
    }
}

function newFunction(el_id) {
    console.log(el_id);
}

function to_screen(x){
    let s = x.replace(".", ",");
    return s;
}

function from_screen(s){
    let x = s.replace(",", ".");
    return x;
}

var EQUIPAMENTOS = Object.keys(DADOS);

var Form = document.getElementById('formulario');

/* ----------EQUIPAMENTOS-------- */
var Equip = document.getElementById('equip');
for(let i=0;i<EQUIPAMENTOS.length;i++){
    let equip = EQUIPAMENTOS[i];
    Equip.innerHTML += (
        '<input type="radio" id="' + equip + '" name="equip-input" value="' + equip + '">'+
        '<label for="' + equip + '">' + equip + '</label><br>'
    );
}

/* -------VALORES-------- */
var Valor = document.getElementById('valor');
for(let i=0;i<MATERIAIS.length;i++){
    let mat = MATERIAIS[i];
    let mat_v = mat + '-v';
    let mat_tv = mat + '-tv';
    Valor.innerHTML += (
        '<div class="grid-item">'+
          '<div class="item">'+
            '<span><b>' + mat + '</b><br>R$</span>'+
            '<input class="text-input" type="text" id="' + mat_v + '" value="" onchange="reset_base();">'+
            '<span>/Kg</span>'+
          '</div>'+

          '<b><span>R$ </span><span id="' + mat_tv + '">0.00</span></b>'+
        '</div>'
    );
    setFloatFilter(mat_v);
}
Valor.innerHTML += (
    '<div class="grid-item">'+
          '<div class="item">'+
            '<span><b>Total</b></span>'+
          '</div>'+
          '<b><span>R$ </span><span id="total-tv">0.00</span></b>'+
        '</div>'
);

/* -------MASSA-------- */
var Massa = document.getElementById('massa');
for(let i=0;i<MATERIAIS.length;i++){
    let mat = MATERIAIS[i];
    let mat_m = mat + '-m';
    let mat_p = mat + '-p';
    Massa.innerHTML += (
        '<div class="grid-item">'+
            '<div class="item">'+
                '<span><b>' + mat + '</b></span><br>'+
            '</div>'+
            '<b><span class="value" id="' + mat_m + '">0</span>'+'<span>g</span><br></b>'+
            '<span class="value" id="' + mat_p + '">0,0</span>'+'<span>%</span>'+
        '</div>'
    );
}
Massa.innerHTML += (
    '<div class="grid-item">'+
        '<div class="item">'+
            '<span><b>Total</b></span><br>'+
        '</div>'+
        '<b><span id="total-m">0,0</span><span>Kg</span></b>'+
    '</div>'
);

function get_equip(){
    let equips = document.getElementsByName("equip-input");
    let equip;
    for(let i=0;i<equips.length;i++){
        if (equips[i].checked){
            equip = equips[i].value;
            break;
        }
    }
    return equip;
}

function update_base(){
    let base = document.getElementById("base-input").value;
    if (base === NO_BASE) return;

    load_base();
    update_all();
}

function reset_base(){
    document.getElementById("base-input").value = NO_BASE;
    update_all();
}

function load_base(){
    let base = document.getElementById("base-input").value;
    if (base === NO_BASE) return;
    
    _load_base(base);
    update_all();
}

function _load_base(base){
    for(let i=0;i<MATERIAIS.length;i++){
        let mat = MATERIAIS[i];
        let mat_v = mat + '-v';
        let val = BASES[base][mat];
        if(val === null){
            val = "0,00";
        }else{
            val = to_screen((val.toFixed(2)).toString());
        }
        document.getElementById(mat_v).value = val;
    }
}

_load_base(NO_BASE);

function update_price(){ 
    let equip = get_equip();

    if (equip === undefined) return;

    let equip_dados = DADOS[equip];

    let quant = parseFloat(from_screen(document.getElementById("quant-input").value));

    let total = 0.0;

    for(let i=0;i<MATERIAIS.length;i++){
        let mat = MATERIAIS[i];
        let mat_v = mat + "-v";
        let mat_tv = mat + "-tv";

        let val = parseFloat(from_screen(document.getElementById(mat_v).value));
        if(val === null){
            val = 0.0;
        }

        let mat_m = equip_dados[2*i + 3];

        let tval = val * quant * (mat_m/1000);

        let span_tv = document.getElementById(mat_tv);
        span_tv.innerHTML = to_screen((tval.toFixed(2)).toString());
        total += tval;
    }
    document.getElementById("total-tv").innerHTML = to_screen((total.toFixed(2)).toString());
}

function update_mass(){
    
    let equip = get_equip();

    if (equip === undefined) return;

    let quant = parseInt(document.getElementById("quant-input").value);

    let equip_dados = DADOS[equip];

    let m = 0.0;

    let tempo = equip_dados[2] * quant;

    document.getElementById("tempo-v").innerHTML = (~~tempo).toString();

    for(let j=0;j<MATERIAIS.length;j++){
        let mat = MATERIAIS[j];

        let mat_m = equip_dados[2*j   +3];
        let mat_p = equip_dados[2*j+1 +3];

        let txt_m = document.getElementById(mat + "-m");
        let txt_p = document.getElementById(mat + "-p");

        txt_m.innerHTML = to_screen(((mat_m * quant).toFixed(0)).toString());
        txt_p.innerHTML = to_screen((mat_p.toFixed(1)).toString());

        m += mat_m;
    }
    document.getElementById("total-m").innerHTML = to_screen(((m / 1000).toFixed(1)).toString());
}

function update_all(){
    update_price();
    update_mass();
}

let equip = EQUIPAMENTOS[0]; document.getElementById(equip).checked = true;
update_all();
