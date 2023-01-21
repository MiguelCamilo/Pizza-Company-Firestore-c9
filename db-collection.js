// pizzas
export const pizza_Pepperoni = {
    type: "Pepperoni pizza",
    ingredients: "pepperoni , cheese , tomato",
    addons: "arugola , black pepper , truffle",
    size: "medium",
    price: 9.99,
    togo: true
};

export const pizza_Vegetarian = {
    type: "Vegetarian",
    ingredients: "artichoke , red pepper , green pepper , onion",
    addons: "truffle , pineapple",
    size: "large",
    price: 11.99,
    togo: true
};

export const pizza_Hawaiian = {
    type: "Hawaiian",
    ingredients: "pineapple , tomato , cheese , ham",
    addons: "black pepper , parmesan cheese",
    size: "large",
    price: 13.99,
    togo: false
};


// customers
export const customer1 = {
    subscribed: true,
    email: "todda@something.com",
    name: "Todd Albert",
    dob: "01/01/1985",
    phoneNumber: "561-555-5555"
}

export const customer2 = {
    subscribed: false,
    email: "jiho@somethingelse.com",
    name: "Jiho Sahn",
    dob: "01/02/1985",
    phoneNumber: "561-222-2222"
}


// orders
export const order1 = {
    customerName: customer1.name, 
    customerEmail: customer1.email,
    typePizza: pizza_Pepperoni.type,
    paymentMethod: "PayPal",
    userRegistered: customer1.subscribed

};

export const order2 = {
    customerName: customer2.name,
    customerEmail: customer2.email,
    typePizza: [pizza_Hawaiian.type , pizza_Vegetarian.type], // property access operator
    paymentMethod: "credit card",
    userRegistered: customer2.subscribed
};

export const order3 = {
    customerName: customer2.name,
    customerEmail: customer2.email,
    typePizza: pizza_Pepperoni.type,
    paymentMethod: "Paypal",
    userRegistered: customer2.subscribed
};