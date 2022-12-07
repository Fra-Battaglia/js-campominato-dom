Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1 - creo funzione che generi un array bombe con 16 numeri compresi tra 1 e il numero totale di celle
2 - SE il numero della casella è presente tra i numeri nell'array bombe la cella si colora di rosso e si ferma il gioco
	ALTRIMENTI colorare la cella di blu e continuare con il gioco
3 - SE il giocatore preme tutte le caselle non apparteneti all'array bombe il gioco finisce
4 - per ogni cella blu cliccata aggiungere 1 al punteggio