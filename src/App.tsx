import React from "react";
import { calcAgility, closePopup } from "./agi-eval";

const App = () => {
  return (
    <div>
      <div
        id="modal"
        onClick={closePopup}
        className="fixed invisible items-center flex justify-center overflow-y-scroll bg-black bg-opacity-40 inset-0 h-full w-full">
        <div className="bg-white rounded-md op p-3 w-max h-max">
          <div>
            <span>Total Agility(Character sheet): </span>
            <span id="ta">0</span>
          </div>
          <div>
            <span>Total Agility(In Combat): </span>
            <span id="tac">0</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-center">
            <p className="text-2xl">
              Agility calculator for Nier Re[in]carnation
            </p>
            <p className="text-xl">
              Input values from the character sheet and loadout
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <div
                className="shadow-xl bg-white border-2 border-opacity-50 rounded-md m-3 p-3 w-max"
                id="characterTotals">
                <div>
                  <span>Character base agility</span>
                  <input
                    id="cba"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="1000"></input>
                </div>
                <div>
                  <span>Character flat agility passive</span>
                  <input
                    id="cfap"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>
                <div>
                  <span>Character timed agility passive</span>
                  <input
                    id="ctap"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>

                <div id="rankTotals">
                  <div>
                    <span>Character total flat rank agility</span>
                    <input
                      id="cfr"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                  <div>
                    <span>Character total % rank agility</span>
                    <input
                      id="cpctr"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                </div>
              </div>
              <div
                className="shadow-xl bg-white border-2 border-opacity-50 rounded-md m-3 p-3 w-max"
                id="memoryTotals">
                <div>
                  <span>Memory slot 1 total flat agility</span>
                  <input
                    id="m1f"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>
                <div>
                  <span>Memory slot 2 total flat agility</span>
                  <input
                    id="m2f"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>
                <div>
                  <span>Memory slot 3 total flat agility</span>
                  <input
                    id="m3f"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>
                <div>
                  <span>Total memory agility %</span>
                  <input
                    id="mpct"
                    type="text"
                    className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                    defaultValue="0"></input>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1" id="weaponTotal">
                <div
                  className="shadow-xl bg-white border-2 border-opacity-50 rounded-md m-3 p-3 w-max"
                  id="weapon1Totals">
                  <div>
                    <span>Weapon slot 1 % flat agility</span>
                    <input
                      id="w1f"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>

                  <div>
                    <span>Weapon slot 1 % timed agility</span>
                    <input
                      id="w1pct"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                </div>

                <div
                  className="shadow-xl bg-white border-2 border-opacity-50 rounded-md m-3 p-3 w-max"
                  id="weapon2Totals">
                  <div>
                    <span>Weapon slot 2 % flat agility</span>
                    <input
                      id="w2f"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>

                  <div>
                    <span>Weapon slot 2 % timed agility</span>
                    <input
                      id="w2pct"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                </div>

                <div
                  className="shadow-xl bg-white border-2 border-opacity-50 rounded-md m-3 p-3 w-max"
                  id="weapon3Totals">
                  <div>
                    <span>Weapon slot 3 % flat agility</span>
                    <input
                      id="w3f"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                  <div>
                    <span>Weapon slot 3 % timed agility</span>
                    <input
                      id="w3pct"
                      type="text"
                      className="leading-tight focus:outline-none focus:shadow-outline mx-4 w-10 border rounded"
                      defaultValue="0"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4">
            <button
              className="bg-yellow-100 shadow-md p-2 rounded-md"
              onClick={calcAgility}>
              Click to calculate Agility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
/* 
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
 */
