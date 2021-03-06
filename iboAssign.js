/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(prodList) {
  let uniqueProdCount = {};

  prodList.forEach((prod) => {
    let prodName = prod.productName;

    if (uniqueProdCount.hasOwnProperty(prodName)) {
      uniqueProdCount[prodName] += prod.quantity;
    } else {
      uniqueProdCount[prodName] = prod.quantity;
    }
  });

  return uniqueProdCount;
}

function getUniquePrducts(prodList) {

    let prodCount =  getUniqueProductCount(listOfProducts)
    
    let uniqueProd = [];
    
    prodList.forEach((prod) => {
        
        let unique = true;

        uniqueProd?.forEach(item=>{
            if(item.prodName == prod.prodName){
                
                unique = false
                
            }
        })

        if(uniqueProd) uniqueProd.push(prod)
      });

      let updateProdQuantity = uniqueProd.map(item=>{
        item.quantity = prodCount[item.prodName];
        return item;
      })

  
      return updateProdQuantity;

}

//print uniqueProduct Count
console.log(getUniqueProductCount(listOfProducts));

//Print UniqProducts

console.log(getUniquePrducts(listOfProducts));