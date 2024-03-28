

// costante che dichiare un allert e dove scrivere la mail
const nameMail = prompt ("INSERISCI LA TUA MAIL?");
// array che riunisce insieme di mail
const mail = ["giovannino@gmail.com" , "albertino@gmail.com" ,"francesco98@gmail.com"];
// costante variabile che sta ad indicare il valore della mail
let accessConsent= false;
// ripetezione che serve per accedere all'array
for (let i = 0; i<mail.length;i++)
// condizione per il quale se il nome inseri allert e uguale a quello in lista stampa vero
if (nameMail=== mail[i]){
    // cambio di variabile nel caso diventasse vera
    accessConsent= true
    console.log (nameMail)
}
// una volta verificate le condizioni riverifichiamo e stampiampo
if (accessConsent) {
    console.log("Accesso consentito per l'email:", nameMail);
    document.getElementById("result").innerHTML = nameMail;
} else {
    console.log("Accesso negato per l'email:", nameMail);
    document.getElementById("result").innerHTML = nameMail;
}