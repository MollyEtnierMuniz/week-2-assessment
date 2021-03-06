///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/
//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
const summedPrice = cart.reduce(function(acc,elem)){
    return acc + elem
}

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal*(1 + tax)) - couponValue)
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    I'm assuming this is for a restaurant's web page or mobile app for ordering food to-go.
    Customer info needed: 
        Name (however they want to be identified, ex, 'Prince', 'Beyonce', 'Tim the Enchanter') (STRING)
        Phone number (in case there are questions). (string, because of area code parentheses)
        Time they'd like to pick up the order (so it can be ready when they arrive) (NUMBER, 24-hour time)
        Description of food in the cart (so they can verify the food is correct) (STRING)
        Quantity of each item, (so they can get the right about of food) (NUMBER) 
        Price--without tax-- for that food item (so they can see price break-down per item) (NUMBER)
        Subtotal--without tax--(so they can see how much they're about to spend) (NUMBER) 
        Total with tax (so they can grumble about the concept of taxes.) (NUMBER)
        Any allergies or special instructions? (So we can keep customers alive for repeat business.) (STRING)
*/
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let cartPage = {
    name: 'Mary Tyler Moore',
    phone: '(952) 209-1990',
    pickUpTime: 1800,
    foodInCart: "cheese pizza",
    qtyFoodItem: 2,
    priceFoodItem: 18.00,
    subTotal: 36.00,
    Total: 38.75,
    allergiesInstructions: 'might be late picking up'
}