'use strict'

//recupero l'elemento dove stampare l'elenco del team
const teamContainer = document.getElementById('team-container')

//creo array con oggetti singoli per ogni membro del team
const membriTeam = [
    {
        nome: 'Wayne Barrett',
        ruolo: 'Founder & CEO',
        foto : 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto : 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto : 'img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto : 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto : 'img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto : 'img/barbara-ramos-graphic-designer.jpg',
    }
]

//ciclo nell'array per stampare i dettagli di ogni membro in console
for (let i = 0; i < membriTeam.length; i++) {
    const membroSingolo = membriTeam[i]
    console.log(membroSingolo.nome, membroSingolo.ruolo, membroSingolo.foto)

    const colTeam = document.createElement('div')
    teamContainer.append(colTeam)
    colTeam.classList.add('col-4')
    const card = document.createElement('div')
    colTeam.append(card)
    card.classList.add('my-card')
    card.innerHTML = `  <img src="${membroSingolo.foto}">
                        <div>${membroSingolo.nome}</div>
                        <div>${membroSingolo.ruolo}</div>
                    `
}



/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
X Definiamo un array di oggetti che rappresentano i membri del team.
X Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

Milestone 1:
X stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente

Milestone 2:
X stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento html che conterrà i suoi dati.

BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
*/