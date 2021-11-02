

  
//Declaración de variables
var cadena, cod, respuesta;

//Declaración de expresiones
var cote = RegExp("(GAUCHE|DROITE|COTE)");
var quoi = RegExp("(QUOI|QU'EST)");
var lumiere = RegExp("(LUMIERE|BLUE|VERT|JAUNE)");
var nettoyer = RegExp("(NETTOYES|DESINFECTES|PROPRES|NETTOYEZ|DESINFECTEZ|LAVES|LAVE)");
var accent = RegExp("(ACCENT|ORIGINE)");
var petit = RegExp("(PETIT|FORT|JOLI|BEL)");
var comprend = RegExp("(COMPREND|COMPRENDS|COMPRENONS)");
var pas = RegExp("(PAS|RIEN)");
var casque = RegExp("(CASQUE|CASQUES|CONFIDENT|AUDIOGUIDE|AUDIO GUIDE)");
var fonctionner = RegExp("(FONCTIONNE|FONCTIONNER|FONCTIONNENT|MARCHER|MARCHENT|MARCHE)");
var groupes = RegExp("(GROUPE|GROUPES|BANDELA)");
var portes = RegExp("(PORTE|PORTES|OUVRENT|OUVRE)");
var billets = RegExp("(BILLET|BILLETS|TICKET|TICKETS|RESERVATION|RESERVATIONS|RESERVE)");
var nombre = RegExp("(1|2|3|4|5|6|UN|DEUX|TROIS|QUATRE|CINQ|SIX)");
var faire = RegExp("(FAIRE|FAIS|FAIT|TOUCHE|TOUCHER)");
var salutation = RegExp("(BONJOUR|BONSOIR)");



function evaluarExpresion() {
  cadena = "Visiteur: " + document.getElementById("txtPregunta").value;
  escribirChat(cadena);
  cadena = cadena.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");;
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
  if (accent.test(cadena) == true && pas.test(cadena) && comprend.test(cadena) == true) {
    cod = 4;
  };
  if (accent.test(cadena) == true && petit.test(cadena) == true) {
    cod = 5;
  };
  if (fonctionner.test(cadena) == true && pas.test(cadena) == true) {
    cod = 6;
  };
  if (groupes.test(cadena) == true) {
    cod = 7;
  };
  if (portes.test(cadena) == true) {
    cod = 8;
  };
  if (salutation.test(cadena) == true) {
    cod = 9;
  };
  if (faire.test(cadena) == true && quoi.test(cadena)) {
    cod = 10;
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
        mensaje = "            Jojo: La lumière ça sert a rien!";

      };
      if (r == 2) {
        mensaje = "             Jojo: Je viens de vous dire!";
      };
      if (r == 3) {
        mensaje = "             Jojo: Elle va servir à vous poursuivre";
      };

      break;

    case 2:
      mensaje = "             Jojo: Oui, on les nettoie avec nous fluides corporels! ";
      break;

    case 3:
      mensaje = "             Jojo: La lumière à gauche!";
      break;

    case 4:
      mensaje = "             Jojo: Chauviniste de merde!";
      break;

    case 5:
      mensaje = "             Jojo: C'est un grand et moche accent!";
      break;

    case 6:
      mensaje = "             Jojo: Mettez votre casque et sortez doucement par la porte du milieu";
      break;

    case 7:
      mensaje = "             Jojo: La chatelefa Bandela s'occupe des gropes mais probablement elle ne va pas vous répondre, ou elle vous répondra l'année prochaine. En tout cas, ne vous plaignez pas, elle est bien aimée et protegée";
      break;

    case 8:
      mensaje = "             Jojo: Les portes s'ouvrent seules, avancez, cognez-vous la gueule s'il faut";
      break;
    
    case 9:
        mensaje = "             Jojo: Bonjour et bienvenue à cette belle aventure";
        break;
    case 10:
        mensaje = "             Jojo: Je viens de vous dire, vous faites rien, vous touchez juste le plus et le moins si vous voulez régler le son";
        break;

    case 11:
      break;
    default:
      if (r == 1) {
        mensaje = "            Jojo: Je ne comprend pas, mais ne vous plaignez pas et faites attention, vous serez toujours perdant";

      };
      if (r == 2) {
        mensaje = "             Jojo: Je ne comprend pas, reformulez votre message, on peux encore contruire des beaux souvenirs ensemble!";
      };

  }
  //document.getElementById("respuesta").innerHTML = mensaje;
  escribirChat(mensaje);


}


function escribirChat(texto) {
  document.getElementById("areaChat").value += texto + "\r";



}