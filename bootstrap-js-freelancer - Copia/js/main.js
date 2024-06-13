
let sconto = [
    { codiceSconto: "YHDNU32", used: false},
    { codiceSconto: "JANJC63", used: false},
    { codiceSconto: "PWKCN25", used: false},
    { codiceSconto: "SJDPO96", used: false},
    { codiceSconto: "POCIE24", used: false},
]

function offer(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let mail = document.getElementById("mail").value;
    let hours = document.getElementById("hours").value;
    let text = document.getElementById("textArea").value;

    hours = parseFloat(hours);

    if (isNaN(hours)) {
        alert("Inserisci un carattere valido nella sezione ore")
    }

    let work = document.getElementById("tipo_di_lavoro").value;
    work = parseFloat(work);
    let price = work * hours;
    
    let discountCode = document.getElementById("discount").value;
    let discountedPrice = price

for (let i=0; i<sconto.length; i++ ) {
        if (sconto[i].codiceSconto == discountCode && sconto[i].used == false) {
            discountedPrice = price - (price * 25 / 100); 
            sconto[i].used = true; 
        } else (
            console.log("Non hai inserito il codice corretto o è già stato utilizzato.")
        )
    }

    document.getElementById("price_for_work").innerHTML = discountedPrice.toFixed(2) + "$";
    document.getElementById("name_card").innerHTML = name
    document.getElementById("surname_card").innerHTML = surname
    document.getElementById("emailcard").innerHTML = mail;
    document.getElementById("text_richiesta").innerHTML = text
    document.getElementById("card").classList.remove("d-none");
    
}    






function getWorkPrice(work) {
    let workPrice = 0;
    if (work == "Backed") {
        workPrice = 20.50;
    }
    else if (work == "Frontend") {
        workPrice = 15.30;
    }
    else if (work == "Project") {
        workPrice = 33.60;
    }
    return workPrice;
}

