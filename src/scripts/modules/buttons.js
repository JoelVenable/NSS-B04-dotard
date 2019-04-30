import {
  buttonFunctions
} from "./buttonFunctions";


const buttons = [{
    name: "Show all businesses",
    btnId: "#btn-show-businesses",
    function: buttonFunctions.showAllBusinesses
  },
  {
    name: "Filter Companies by State",
    btnId: "#btn-filterByState",
    function: buttonFunctions.filterByState
  },
  {
    name: "List Purchasing Agents",
    btnId: "#btn-listPurchasingAgents",
    function: buttonFunctions.listPurchasingAgents
  },
  {
    name: "Filter by Purchasing Agents",
    btnId: "#btn-filterbyPurchasingAgents",
    function: buttonFunctions.filterByPurchasingAgent
  }
];

const btnContainer = document.querySelector("#buttons");

buttons.forEach(button => {
  let btn = document.createElement("button");
  btn.textContent = button.name;
  btn.id = button.btnId;
  btnContainer.appendChild(btn);

  // add event listeners
  btn.addEventListener("click", button.function);
});