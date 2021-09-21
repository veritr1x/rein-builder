export function calcAgility() {
  let charBaseAgiNode = document.getElementById("cba") as HTMLInputElement;
  let charFlatAgiPassiveNode = document.getElementById(
    "cfap"
  ) as HTMLInputElement;
  let charTimedAgiPassiveNode = document.getElementById(
    "ctap"
  ) as HTMLInputElement;
  let charRankFlatTotalNode = document.getElementById(
    "cfr"
  ) as HTMLInputElement;
  let charRankPCTTotalNode = document.getElementById(
    "cpctr"
  ) as HTMLInputElement;
  let flatMemory1AgiNode = document.getElementById("m1f") as HTMLInputElement;
  let flatMemory2AgiNode = document.getElementById("m2f") as HTMLInputElement;
  let flatMemory3AgiNode = document.getElementById("m3f") as HTMLInputElement;
  let pctMemoryAgiNode = document.getElementById("mpct") as HTMLInputElement;
  let weapon1FlatAgiPassiveNode = document.getElementById(
    "w1f"
  ) as HTMLInputElement;
  let weapon1TimedAgiPassiveNode = document.getElementById(
    "w1pct"
  ) as HTMLInputElement;
  let weapon2FlatAgiPassiveNode = document.getElementById(
    "w2f"
  ) as HTMLInputElement;
  let weapon2TimedAgiPassiveNode = document.getElementById(
    "w2pct"
  ) as HTMLInputElement;
  let weapon3FlatAgiPassiveNode = document.getElementById(
    "w3f"
  ) as HTMLInputElement;
  let weapon3TimedAgiPassiveNode = document.getElementById(
    "w3pct"
  ) as HTMLInputElement;

  let charBaseAgi = parseInt(charBaseAgiNode.value);
  let charFlatAgiPassive = parseFloat(charFlatAgiPassiveNode.value) / 100;
  let charTimedAgiPassive = parseFloat(charTimedAgiPassiveNode.value) / 100;

  let charRankFlatTotal = parseInt(charRankFlatTotalNode.value);
  let charRankPCTTotal = parseFloat(charRankPCTTotalNode.value) / 100;

  let flatMemory1Agi = parseInt(flatMemory1AgiNode.value);
  let flatMemory2Agi = parseInt(flatMemory2AgiNode.value);
  let flatMemory3Agi = parseInt(flatMemory3AgiNode.value);

  let pctMemoryAgi = parseFloat(pctMemoryAgiNode.value) / 100;

  let weapon1FlatAgiPassive = parseFloat(weapon1FlatAgiPassiveNode.value) / 100;
  let weapon1TimedAgiPassive =
    parseFloat(weapon1TimedAgiPassiveNode.value) / 100;

  let weapon2FlatAgiPassive = parseFloat(weapon2FlatAgiPassiveNode.value) / 100;
  let weapon2TimedAgiPassive =
    parseFloat(weapon2TimedAgiPassiveNode.value) / 100;

  let weapon3FlatAgiPassive = parseFloat(weapon3FlatAgiPassiveNode.value) / 100;
  let weapon3TimedAgiPassive =
    parseFloat(weapon3TimedAgiPassiveNode.value) / 100;

  const charRankAgi = charRankFlatTotal + charBaseAgi * charRankPCTTotal;
  const totalMemoryAgi =
    flatMemory1Agi +
    flatMemory2Agi +
    flatMemory3Agi +
    charBaseAgi * pctMemoryAgi;

  const totalWeaponFlatPassiveAgi =
    charBaseAgi *
    (weapon1FlatAgiPassive + weapon2FlatAgiPassive + weapon3FlatAgiPassive);

  const totalFlatPassiveAgi = charBaseAgi * charFlatAgiPassive;

  const totalAgi =
    charBaseAgi +
    totalFlatPassiveAgi +
    totalWeaponFlatPassiveAgi +
    totalMemoryAgi;
  const totalAgiWithRank = totalAgi + charRankAgi;

  const totalTimedPassiveAgi =
    charTimedAgiPassive +
    weapon1TimedAgiPassive +
    weapon2TimedAgiPassive +
    weapon3TimedAgiPassive;

  const totalInCombatAgi =
    totalAgiWithRank + totalAgiWithRank * totalTimedPassiveAgi;

  console.log(`total(char sheet): ${Math.ceil(totalAgi)}`);
  console.log(`total in combat: ${Math.ceil(totalInCombatAgi)}`);

  let modal = document.getElementById("modal");
  modal?.classList.remove("invisible");
  modal?.classList.add("visible");

  let ta = document.getElementById("ta");
  if (ta) {
    ta.innerText = Math.ceil(totalAgi).toString();
  }

  let tac = document.getElementById("tac");
  if (tac) {
    tac.innerText = Math.ceil(totalInCombatAgi).toString();
  }
}

export function closePopup() {
  let modal = document.getElementById("modal");
  modal?.classList.remove("visible");
  modal?.classList.add("invisible");
}
