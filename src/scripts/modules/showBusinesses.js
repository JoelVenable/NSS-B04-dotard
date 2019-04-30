module.exports.showBusinesses = function (businesses) {
  const output = document.getElementById("output");
  if (businesses.length === 0) {
    output.innerHTML = "<h3>No records found</h3>";
    return 1;
  }
  output.innerHTML = businesses.reduce(
    (html, business) => {
      html += `
      <div id="${business.companyName}">
        <h3>${business.companyName}</h3>
        <p>${business.addressFullStreet}</p>
        <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
      </div>
      `;
      return html;
    }, "");
};

module.exports.showAgents = function (businesses) {
  const output = document.getElementById("output");
  if (businesses[0] === undefined) {
    output.innerHTML = "<h3>No records found</h3>";
    return 1;
  }
  output.innerHTML = businesses
    .map(business => {
      return {
        businessName: business.companyName,
        agentName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
        phoneNumber: business.phoneWork
      };
    })
    .reduce(
      (html, business) => {
        html += `
        <div id="${business.businessName}">
          <h3>${business.agentName}</h3>
          <p>${business.businessName}</p>
          <p>${business.phoneNumber}</p>
        </div>
        `;
        return html;
      }, "");
};