//import API from "./modules/API.js";
import {
  businesses
} from "./modules/business";
import "./modules/buttons";
import {
  showBusinesses
} from "./modules/showBusinesses";

showBusinesses(businesses);
const output = document.getElementById("output");



// let newYorkBusinesses = businesses.filter(business => {
//   return business.addressStateCode === "NY";
// });
// console.log(newYorkBusinesses);



// function showBusiness(business) {
//   return `<div>${business.companyName}</div>`;
// }


// output.innerHTML = businesses.map(showBusiness).join("");