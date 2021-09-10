//character
let charSheetAttack = 5329; //lv80 2P
let charTotalFlatPCTAttack = 0.175; //2P Vigor lv2
let weaponAffinity = 1;

let charRankFlatTotal = 100;
let charRankPCTTotal = 0.05;

let charFlatPCTPassive = 0.175;

//weapon1
let weapon1FlatAttack = 61;
let weapon1PCTAttack = 0.037;
let weapon1TimedPCTAttack = 0;
let weapon1Type = 1;

//weapon2
let weapon2FlatAttack = 73;
let weapon2PCTAttack = 0.037;
let weapon2TimedPCTAttack = 0;
let weapon2Type = 1;

//weapon3
let weapon3FlatAttack = 63;
let weapon3PCTAttack = 0.038;
let weapon3TimedPCTAttack = 0;
let weapon3Type = 1;

//Memory1
let memory1Flat = 0;
let memory1PCT = 0;

//Memory2
let memory2Flat = 0;
let memory2PCT = 0;

//Memory3
let memory3Flat = 0;
let memory3PCT = 0;

let memorySetPCT = 0;

//Companion
let companionFlatAttack = 0;
let companionTimedAttack = 0;

function getSlotPCT(slot, type, affinity) {
  if (slot == 1 && type === affinity) {
    return 1;
  } else if (
    (slot == 1 && type !== affinity) ||
    (slot == 2 && type == affinity)
  ) {
    return 0.5;
  } else if (slot == 2 && type !== affinity) {
    return 0.25;
  }
}

const charBaseAttack = Math.ceil(
  charSheetAttack / (charTotalFlatPCTAttack + 1)
);

const totalBase =
  charBaseAttack +
  weapon1FlatAttack * getSlotPCT(1, weapon1Type, weaponAffinity) +
  weapon2FlatAttack * getSlotPCT(2, weapon2Type, weaponAffinity) +
  weapon3FlatAttack * getSlotPCT(2, weapon3Type, weaponAffinity);

const totalWeaponPCTAttack =
  charBaseAttack * (weapon1PCTAttack + weapon2PCTAttack + weapon3PCTAttack);

const charRankTotal = charRankFlatTotal + charBaseAttack * charRankPCTTotal;

const totalMemoryAttack =
  charBaseAttack * (memory1PCT + memory2PCT + memory3PCT + memorySetPCT) +
  memory1Flat +
  memory2Flat +
  memory3Flat;

const totalAttack =
  totalBase +
  totalBase * charFlatPCTPassive +
  totalWeaponPCTAttack +
  totalMemoryAttack;

const totalAttackWithRank = totalAttack + charRankTotal;

console.log(`total(char sheet): ${Math.ceil(totalAttack)}`);
