const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");

function verifierReponse1() {
    let select = document.getElementById("verbes1");
    let reponse = document.getElementById("reponse1");

    if (select.value === "done") {
        reponse.textContent = "Bone Réponse !";
        question1.hidden = true;
        question2.hidden = false;
    } else {
        reponse.textContent = "Mauvaise réponse !"
    }
}

document
    .getElementById("verifier1")
    .addEventListener("click", verifierReponse1);


function verifierReponse2() {
    select = document.getElementById("verbes2");
    reponse = document.getElementById("reponse2");

    if (select.value === "hit") {
        reponse.textContent = "Bone Réponse !";
        question2.hidden = true;
    } else {
        reponse.textContent = "Mauvaise réponse !"
    }
}

document
    .getElementById("verifier2")
    .addEventListener("click", verifierReponse2);