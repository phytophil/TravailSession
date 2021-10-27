document.getElementById("menu_icone_Acc8_1").addEventListener("click", basculeClasseAcc8_1);

function basculeClasseAcc8_1() {
    this.classList.toggle("changement_Acc8");
    var contenuAcc8_1 = document.getElementById("sujets_Acc8_1");
    var lesouMenuAcc8_1 = document.getElementById("items_services_Acc8_1");
    var second_Acc8_1 = document.getElementById("sous_menu_Acc8_1");
	var laBarreAcc8_1 = document.getElementById("navibar_Acc8");
    if (contenuAcc8_1.style.maxHeight){ 		
    contenuAcc8_1.style.maxHeight = null;
    lesouMenuAcc8_1.style.maxHeight = null;
	} else {
    contenuAcc8_1.style.maxHeight = contenuAcc8_1.scrollHeight + "px"; 
    lesouMenuAcc8_1.style.maxHeight = null;	 
    second_Acc8_1.classList.remove("ouvert_Acc8");
  }    
}

document.getElementById("sous_menu_Acc8_1").addEventListener("click", deploieAcc8_1);

function deploieAcc8_1() {
    var contenuAcc8_1 = this.parentElement; 
    var souMenuAcc8_1 = this.nextElementSibling;
    this.classList.toggle("ouvert_Acc8");
    if (souMenuAcc8_1.style.maxHeight){
    souMenuAcc8_1.style.maxHeight = null;
    } else {
    souMenuAcc8_1.style.maxHeight = souMenuAcc8_1.scrollHeight + "px";
    contenuAcc8_1.style.maxHeight = "572px"; 
    }
}

document.getElementById("sous_menu_Acc8_2").addEventListener("click", fullDeploieAcc8_2);

function fullDeploieAcc8_2() {
    var laListeAcc8_2 = this.parentElement; 
    var lastSouMenuAcc8_2 = this.nextElementSibling;
    this.classList.toggle("ouvert_Acc8_2");
    if (lastSouMenuAcc8_2.style.maxHeight){
    lastSouMenuAcc8_2.style.maxHeight = null;
    } else {
    lastSouMenuAcc8_2.style.maxHeight = lastSouMenuAcc8_2.scrollHeight + "px";
    laListeAcc8_2.style.maxHeight = "600px"; 
    }
}
