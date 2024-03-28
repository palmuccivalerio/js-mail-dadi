
// DICHIARAZIONI DI DUE VARIABILI DI STESSA FUNZIONE MA DI NOME DIVERSO PER GENERARE NUMERI PER PC E PER UTENTE 
//  SI RACCOMANDA DI APRIRE LA CONSOLE PER VEDERE ESERCIZIO
    numpc = Math.round(Math.random() * 5)+1;

    console.log(numpc,  typeof numpc)

    numuser = Math.round(Math.random() * 5)+1;

    console.log(numuser, typeof numuser)
// FUNZIONE MOLTO SEMPLICE DOVE CONFRONTA I VARI NUMERI CON MAGGIORE MINORE E UGUALE E STAMPA MESSAGIO DI CONSEGUENZA
if(numpc >numuser){
    console.log("Ha  vinto il pc")

}
else if( numpc < numuser){
    console.log("Hai vinto tu")

}
else if( numpc === numuser ) {
     console.log("avete pareggiato")

}
