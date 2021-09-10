let charBaseAgi = 1000;

let charRankFlatTotal = 100;
let charRankPTTotal = 0.05;

let charTimedAgiPassive = 0.4;

let flatMemory1Agi = 192;
let flatMemory2Agi = 192;
let flatMemory3Agi = 192;

let ptMemoryAgi = 0;

let weapon1FlatAgiPassive = 0;
let weapon2FlatAgiPassive = 0.2; // ex gayle weap
let weapon3FlatAgiPassive = 0;

let weapon1TimedAgiPassive = 0.2; //black Sunflower
let weapon2TimedAgiPassive = 0; 
let weapon3TimedAgiPassive = 0.2; //pheonix

const charRankAgi = charRankFlatTotal + (charBaseAgi * charRankPTTotal);
const totalMemoryAgi = flatMemory1Agi + flatMemory2Agi + flatMemory3Agi + (charBaseAgi * ptMemoryAgi);
const totalPassiveAgi = (charBaseAgi) * (weapon1FlatAgiPassive + weapon2FlatAgiPassive + weapon3FlatAgiPassive);
const totalAgi = charBaseAgi + totalPassiveAgi + totalMemoryAgi;
const totalAgiWithRank = totalAgi + charRankAgi;
const totalTimedPassiveAgi = charTimedAgiPassive + weapon1TimedAgiPassive + weapon2TimedAgiPassive + weapon3TimedAgiPassive;
const totalInCombatAgi = totalAgiWithRank + (totalAgiWithRank * totalTimedPassiveAgi);

console.log(`total(char sheet): ${Math.ceil(totalAgi)}`);
console.log(`total in combat: ${(Math.ceil(totalInCombatAgi))}`);