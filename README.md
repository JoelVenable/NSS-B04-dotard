# NSS-B04-dotard


## Your First Day at Dotard & Simbleton

It's your first day on the job, and Doris sits with you at your desk and talks about what she needs you to do.


Each file contains an array with 15 objects in it. Each object represents one active customer. It details the address, purchasing agent, and the total dollar amount of that company's last 5 orders.

```js
const businesses = [
  {
    purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
    phoneWork: "089.129.2290 x9400",
    orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
    companyName: "Care-media",
    companyIndustry: "Education",
    addressZipCode: "56839",
    addressStateCode: "WI",
    addressFullStreet: "8417 Franklin Court Tunnel",
    addressCity: "Mouthcard"
  },
  {
    purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
    phoneWork: "(833) 222-7579 x5874",
    orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
    companyName: "Stanholding",
    companyIndustry: "Hospitality",
    addressZipCode: "09705",
    addressStateCode: "NY",
    addressFullStreet: "2889 Fawn Court Garden",
    addressCity: "Fellsmere"
  },
  {
    purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
    phoneWork: "235.266.6278",
    orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
    companyName: "Highnix",
    companyIndustry: "Agriculture",
    addressZipCode: "49376",
    addressStateCode: "ME",
    addressFullStreet: "5734 Maple Avenue Throughway",
    addressCity: "Little Genesee"
  },
  {
    purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
    phoneWork: "1-449-987-3083 x23263",
    orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
    companyName: "Conit",
    companyIndustry: "Defense",
    addressZipCode: "53326",
    addressStateCode: "IL",
    addressFullStreet: "5755 Hillside Drive Crossroad",
    addressCity: "Norval"
  },
  {
    purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
    phoneWork: "1-730-411-8580",
    orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
    companyName: "Dong-tom",
    companyIndustry: "Energy",
    addressZipCode: "67071",
    addressStateCode: "KS",
    addressFullStreet: "4826 Arch Street Lights",
    addressCity: "Newburyport"
  },
  {
    purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
    phoneWork: "(868) 043-0950",
    orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
    companyName: "Dan-dox",
    companyIndustry: "Manufacturing",
    addressZipCode: "98842",
    addressStateCode: "WV",
    addressFullStreet: "9767 Cedar Court Corner",
    addressCity: "Prince George"
  },
  {
    purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
    phoneWork: "(298) 305-1942 x53653",
    orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
    companyName: "J-base",
    companyIndustry: "Health care",
    addressZipCode: "72993",
    addressStateCode: "FL",
    addressFullStreet: "9954 Buckingham Drive Mountains",
    addressCity: "Vesper"
  },
  {
    purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
    phoneWork: "(743) 934-8981 x692",
    orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
    companyName: "Span-fix",
    companyIndustry: "Construction",
    addressZipCode: "59860",
    addressStateCode: "MT",
    addressFullStreet: "4151 Orange Street Extension",
    addressCity: "Little Rock Air Force Base"
  },
  {
    purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
    phoneWork: "727.635.6610 x6483",
    orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
    companyName: "Sanaplane",
    companyIndustry: "Information",
    addressZipCode: "85156",
    addressStateCode: "NY",
    addressFullStreet: "4765 Fairview Avenue Locks",
    addressCity: "Dennisville"
  },
  {
    purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
    phoneWork: "(992) 079-1670 x71569",
    orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
    companyName: "Ran-taxon",
    companyIndustry: "Manufacturing",
    addressZipCode: "96673",
    addressStateCode: "MD",
    addressFullStreet: "7157 Hudson Street Ford",
    addressCity: "Watrous"
  }
];
```

## forEach() Method

So Doris just wants to see all of the business names on a web page. You remember that the `forEach()` method on an array iterates the array and you can write logic for what to do for each item in it. You just want to build some elements to put in the DOM to look like this.

![list of businesses](./images/dotard-simbleton-simple-list.png)

Since each object is identical in its structure (but not its state), you can write some automation logic with `forEach()`.

```js
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

businesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});
```

> **_Lightning Exercise:_** Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the  state code. Use dynamic square bracket notation to add the  zip code.

## filter() Method

Now you have code to show web pages for each of the businesses that have active accounts. You call Doris over and show her the results, and she's very excited.


For a task like this, the array `filter()` method is perfect, because you need to look at each object in the businesses array, check to see if it meets Doris' condition, and if it does, place that object in a new array that only contains the businesses she wants.

![list of new york businesses](./images/dotard-simbleton-newyork-list.png)

The filter function creates a new array from the existing one, so you can invoke it and assign it to a new variable such as in the code below. The function that you pass to `filter()` should return true or false. If it returns true, then the current item will be placed in the new array.

```js
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false

  if (business.addressStateCode === "NY") {
      inNewYork = true
  }

  return inNewYork
})
```

> **_Lightning Exercise:_** Use `filter()` to create another array named `manufacturingBusinesses` that will contain all businesses in the manufacturing industry. Display those to the DOM.

#### Example output

![manufacturing businesses list](./images/dotard-simbleton-manufacturing-list.png)

## map

To achieve this task for Doris, you still need to iterate the original array of businesses, but all you need is the purchasing agent names. If you can extract those names and put them in their own array, then you can use `forEach()` to display them in the DOM.

The `map()` method is perfect for that. The map method is used for transforming items in one array to a different structure, and storing the new items in another array. Here's how you would do that for this feature.

```js
outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
  outEl.innerHTML += "<hr/>";
});
```

You will see the list of agents in the DOM. Also look at the new array in the Developer Console. The only information in that array is the purchasing agent properties.

![purchasing agents with console.table](./images/purchasing-agents.png)

> **Lightning Exercise:** Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

```js
{
    "fullName": "Kaylee Gutkowski",
    "company": "Highnix",
    "phoneNumber": "235.266.6278"
}
```

#### Example output

![list of agents](./images/dotard-simbleton-agent-list.png)

## find

>  "I just got off the phone with our accountants. We needed to look at each of our customers and review their orders for this past year. It took forever because I kept needing to scroll through our massive list of customers until I found the one they needed."

As you consider this request, you realize that you'll need to provide Doris an input text field so that she can type in the name of a company. You will then need to take that search string, iterate the companies, and as soon as you find a match, display all the properties.

The `find()` method on arrays is perfect this.

The method does exactly what it's name suggests. It iterates an array and as soon as it finds one item that passes the condition that you provide, it returns that item to you.

```js
const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
> { name: "Tootsie Roll", price: 1.49 }
```

In order to implement Doris' request, you first must add an input field to your `index.html` file.

```html
<input type="text" placeholder="Enter business name" id="companySearch" />
```

To know when Doris is ready to search, you decide to capture the key press event. This will allow her to simply press her return key and execute the search.

![searching businesses](./images/AjtphvnYsK.gif)

```js
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
```

> **Lightning Exercise 1:** Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.

> **Lightning Exercise 2:** Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.


## reduce

**<span style="color: red">Warning:</span>** The `reduce()` array method is going to seem confusing. More than the others, it takes practice, trial, and error to truly understand when it's useful and its power.

> Doris continues, "Remember that list of businesses I had you make for me? Well, Walter would love to have their total order amount listed for each company in that list."
>
> Walter adds, "Yeah just keep the report you have now, but in parenthesis next to the company add the sum of all orders."

Now, you could achieve this using `forEach()` on the order property for each business. Below is the existing code for listing businesses, but with the addition of a `forEach()` for calculating the order summary.

```js
businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = 0
    business.orders.forEach(order => totalOrders += order)


    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});
```

The only drawback, which is minor, is that you had to initially declare a variable with a zero value, and then invoke the `forEach()` method in order to add to it. You can combine those two steps into one step with the `reduce()` method. One of the main purposes of the reduce method is to iterate over a collection, do some logic with each item, and have one, single result at the end.

* Iterate a list of words and build a sentence
* Iterate a list of integers and find the sum of all of them
* Iterate a list of objects and build a unique set of a property values

Here is how you could use `reduce()` to replace the `forEach()` from above. That sneaky little zero at the end is actually the second argument for the reduce method. It's what value the accumulation should start with. If you were building a sentence, that would be an emtpy string instead of zero.

```js
/* CALCULATE ORDER SUMMARY */
let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)
```

You can read the MDN documentation on [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) for more information.

> **Lightning Exercise 1:** Use the reduce method on the following array to determine how much total rain fell last month.

```js
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce()

console.log(totalRainfall)
```

> **Lightning Exercise 2:** Use the reduce method on the following array to build a sentence.

```js
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce()

console.log(sentence)
```

## Other Helpful Methods

* [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - Reverses the order of items in the array
* [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - Determine if every item in an array passes a condition
* [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - Determine if some of the items in an array passes a condition

[Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on every method available on arrays.

## For the Visual Learners

![emojis](./images/array_methods.png)