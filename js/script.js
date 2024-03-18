//Function

//Creo una funzione che genera oggetti dando 3 parametri 
function generateMember(memberName, memberRule, memberImage) {
    //dichiaro l'oggetto da riempire ogni volta con i parametri che inserisco quando dichiaro la funzione
    const member = {
        name: memberName,
        rule: memberRule,
        image: memberImage,

    };
    // mi dara come valore di ritorno un oggetto con tutti i parametri inseriti durante l'invocazione della funzione
    return member;
}


console.log('JS our Team');

/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

//creo un array vuoto
const members = [];

//creo degli oggetti con la funzione creata appositamente per generare un'oggetto 
const wayne = generateMember('Wayne Barnett', 'Founder & CEO', './img/wayne-barnett-founder-ceo.jpg');
const angela = generateMember('Angela Caroll', 'Chief Editor', './img/angela-caroll-chief-editor.jpg');
const walter = generateMember('Walter Gordon', 'Office Manager', './img/walter-gordon-office-manager.jpg');
const lopez = generateMember('Angela Lopez', 'Social Media Manager', './img/angela-lopez-social-media-manager.jpg');
const scott = generateMember('Scott Estrada', 'Developer', './img/scott-estrada-developer.jpg');
const barbara = generateMember('Barbara Ramos', 'Graphic Designer', './img/barbara-ramos-graphic-designer.jpg');

//console.log(wayne)

//popolo l'array con gli oggetti creati
members.push(wayne, angela, walter, lopez, scott, barbara);

console.log(members);

/*MILESTONE 2 + BONUS 1:
Stampare le stesse informazioni su DOM semplicemente come stringhe */

//mi dichiaro una variabile per prendere l'elemento in cui inserire le informazioni dal dom
const strigDomElement = document.querySelector('.row');

//creo un ciclo per popolare l'elemento del dom con le card dei rispettivi oggetti in precedenza creati
for (let i = 0; i < members.length; i++) {

    strigDomElement.innerHTML += `
    
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${members[i].image}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-text">${members[i].name}</h2>
                <h6 class="card-text">${members[i].rule}</h2>
            </div>
        </div>
        
               
    </div>
    
    `


};

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

//creo un ciclo per stampare in console i nomi, i ruoli e le stringhe delle foto 
for (let i = 0; i < members.length; i++) {

    console.log(members[i].name);
    console.log(members[i].rule);
    console.log(members[i].image);

};

