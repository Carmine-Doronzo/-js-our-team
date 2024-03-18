//Function
function generateMember(memberName, memberRule, memberImage){

    const member = {
        name: memberName,
        rule: memberRule,
        image: memberImage,
        
    };

    return member;
}


console.log('JS our Team');

/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

const members =[];

const wayne = generateMember('Wayne Barnett','Founder & CEO','./img/wayne-barnett-founder-ceo.jpg');
const angela = generateMember('Angela Caroll','Chief Editor','./img/angela-caroll-chief-editor.jpg');
const walter = generateMember('Walter Gordon','Office Manager','./img/walter-gordon-office-manager.jpg');
const lopez = generateMember('Angela Lopez','Social Media Manager','./img/angela-lopez-social-media-manager.jpg');
const scott = generateMember('Scott Estrada','Developer','./img/scott-estrada-developer.jpg');
const barbara = generateMember('Barbara Ramos','Graphic Designer','./img/barbara-ramos-graphic-designer.jpg');

//console.log(wayne)

members.push(wayne,angela,walter,lopez,scott,barbara);

console.log(members)

/*MILESTONE 2 + BONUS 1:
Stampare le stesse informazioni su DOM semplicemente come stringhe */
const strigDomElement = document.querySelector('.row');

for(let i = 0; i < members.length; i++){

    strigDomElement.innerHTML +=`
    
    <div class="col-4">
        <img src="${members[i].image}">
        <div>${members[i].name}</div>
        <div>${members[i].rule}</div> <br>
               
    </div>
    
    `
        

}

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto*/

for(let i = 0; i < members.length; i++){

    console.log(members[i].name);
    console.log(members[i].rule);
    console.log(members[i].image);

}

