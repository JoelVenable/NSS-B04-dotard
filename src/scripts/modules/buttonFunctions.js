import {
  businesses
} from "./business";
import {
  showBusinesses,
  showAgents
} from "./showBusinesses";

const output = document.getElementById("output");


function filterByState() {
  let inputBox = document.getElementById("inputBox").value;
  showBusinesses(businesses.filter(business => business.addressStateCode === inputBox.toUpperCase()));
}

function showAllBusinesses() {
  showBusinesses(businesses);
}

function listPurchasingAgents() {
  showAgents(businesses);
}

function filterByPurchasingAgent() {
  let inputBox = document.getElementById("inputBox").value;
  showAgents([businesses.find(business => {
    return (business.purchasingAgent.nameFirst.includes(inputBox) || business.purchasingAgent.nameLast.includes(inputBox));
  })]);
}


module.exports.buttonFunctions = {
  filterByState: filterByState,
  showAllBusinesses: showAllBusinesses,
  listPurchasingAgents: listPurchasingAgents,
  filterByPurchasingAgent: filterByPurchasingAgent
};