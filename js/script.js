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

