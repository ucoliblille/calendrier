function fermerModal(){
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
function changerTheme() {
    const theme = document.getElementById("theme");
    let value;
    switch(theme.value){
        case 'marx':
            value = 'url("christmarx_rond.png")';
            break;
        case 'ucl':
            value = 'url("ucl_logo_rond_50px.png")';
            break;
        case 'kropotkin':
            value = 'url("santa_Kropotkin_rond_50px.png")';
            break;
        case 'neige':
            value = "var(--theme-neige)";
            break;
        case 'aucun':
            value = "var(--theme-aucun)";
            break;
        default:
            value = 'var(--theme-neige)';
            break;
    }
    let root = document.querySelector(':root');
    root.style.setProperty('--theme', value);
}

// When the user clicks anywhere outside of the modal, close it
function initialiser(){
    const theme = document.getElementById("theme");
    theme.value = "neige";
    reouvrirJour()

    window.onclick = (event) => {
        let modal = document.getElementById("modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function affichageModal(element) {
    let id = Number.parseInt(element.id, 10);
    if(jours[id - 1].ouvert){
        ouvrirModal(element, id);
    } else {
        // les mois sont compris entre 0 et 11
        if(new Date().getMonth() === 11){
            if(bloquageParCalendrier(id)){
				if(jours[id - 1].texte.length === 0){
					ouvrirModal(element, id, false);
				} else {
					ouvrirJour(element, id);
					ouvrirModal(element, id);
				}
            }
        } else {
			ouvrirJour(element, id);
			ouvrirModal(element, id);
        }
    }
}
const bloquageParCalendrier = (id) => id <= new Date().getDate();
const bloquageBasique = (id) =>  id === 1 || jours[id - 2].ouvert;

function ouvrirJour(element, id){
    if(element !== undefined) {
        element.classList.remove("pointilles");
        element.classList.add("shadow", "bordure-transparente");
        element.style.background = "var(--couleur-ombre2)";

        element.children[0].style.visibility = "visible";
        element.children[1].style.visibility = "visible";
        element.children[2].classList.add("jour2", "shadow");

        enregistrerJour(id);
        for (let i = 0; i < jours.length; i++) {
            if (jours[i].numero === (id)) {
                jours[i].ouvert = true;
                break;
            }
        }
    }
}

function ouvrirModal(element, id, textePret = true){
    if(element !== undefined){
        let modal = document.getElementById("modal");
        let p = document.getElementById("texteModale");
		let titre = document.getElementById("titreModale");
        modal.style.display = "block";
        titre.innerText = jours[id - 1].titre;
		if(textePret){
			p.innerText = jours[id - 1].texte;
		} else {
			p.innerText = "Le texte n'est pas encore prêt, mais on fait au plus vite (aux alentours de 18h)";
		}
    }
}
function getListeJours() {
    let l = window.localStorage.getItem('listeJours');
    let liste = [];
    if(l !== undefined && l !== null){
        liste = l.split(',').map(s => Number.parseInt(s, 10));

    }
    return liste;
}
function enregistrerJour(jour) {
    let liste = getListeJours();
    if(!liste.includes(jour)){
        liste.push(jour);
    }
    window.localStorage.setItem('listeJours', liste.join(','))
}
function reouvrirJour(){
    const liste = getListeJours();

    liste.forEach(jour => ouvrirJour(document.getElementById(`${jour}`), jour))
}
function reinitialiser() {
    window.localStorage.clear();
    window.location.reload();
}
