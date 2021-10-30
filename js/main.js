//Declaración de variables
var cadena, cod, respuesta;

//Declaración de expresiones
var cote = RegExp("(GAUCHE|DROITE|COTE)");
var quoi = RegExp("(QUOI|QU'EST)");
var lumiere = RegExp("(LUMIERE|BLUE|VERT|JAUNE)");

var nettoyer = RegExp("(NETTOYES|DESINFECTES|PROPRES)");
var accent = RegExp("(ACCENT|ORIGINE)");
var petit = RegExp("(PETIT|FORT|JOLI)");
var comprend = RegExp("(COMPREND|COMPRENDS|COMPRENONS)");
var pas = RegExp("(PAS|RIEN)");


function evaluarExpresion() {
  cadena = "Visiteur: " + document.getElementById("txtPregunta").value;
  escribirChat(cadena);
  cadena = cadena.toUpperCase();
  document.getElementById("txtPregunta").value = "";
  cod = 0;

  /*
    document.getElementById("resultado1").innerHTML= tener.test(cadena);
    document.getElementById("resultado2").innerHTML= edad.test(cadena);
  */
  if (lumiere.test(cadena) == true && quoi.test(cadena) == true) {
    cod = 1;
  };
  if (nettoyer.test(cadena) == true) {
    cod = 2;
  };
  if (lumiere.test(cadena) == true && cote.test(cadena)) {
    cod = 3;
  };
  if (accent.test(cadena) == true && petit.test(cadena) == true) {
    cod = 4;
  };
  //Lama a responder
  setTimeout(responder, 1000);
  //responder();
}

function responder() {
  var r = Math.floor((Math.random() * 3) + 1);
  console.log("random " + r);
  console.log("cod " + cod);
  var mensaje;


  switch (cod) {
    
    case 1:
      if (r == 1) {
        mensaje = "            Jojo: ça sert a rien!";

      };
      if (r == 2) {
        mensaje = "             Jojo: Je viens de vous dire!";
      };
      if (r == 3) {
        mensaje = "             Jojo: Elle va servir à vous poursuivre";
      };

      break;

    case 2:
      mensaje = "             Jojo: Oui, on les nettoie avec nous fluides corporels!";
      break;

    case 3:
      mensaje = "             Jojo: A gauche!";
      break;

    case 4:
      mensaje = "             Jojo: Chauviniste de merde!";
      break;

    case 5:

      break;
    default:
      mensaje = "Je ne comprend pas";

  }
  //document.getElementById("respuesta").innerHTML = mensaje;
  escribirChat(mensaje);


}


function escribirChat(texto) {
  document.getElementById("areaChat").value += texto + "\r";



}