import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
dotenv.config();

// importing db-collection
import { pizza_Pepperoni } from "./db-collection.js";
import { pizza_Vegetarian } from "./db-collection.js";
import { pizza_Hawaiian } from "./db-collection.js";

import { customer1 } from "./db-collection.js";
import { customer2 } from "./db-collection.js";

import { order1 } from "./db-collection.js";
import { order2 } from "./db-collection.js";
import { order3 } from "./db-collection.js";

// import credentials
import { service_account } from "./secrets.js"

// connect to firebase project
initializeApp({ credential: cert(service_account) })

// connect to firestore database
const db = getFirestore()





// pizzas
pizza_Pepperoni
pizza_Vegetarian
pizza_Hawaiian

// customers
customer1
customer2

// orders
order1
order2
order3



// add document to collection
const addDoc = async (item, coll) => {
    const result = await db.collection(coll).add(item)
    console.log(`Added Items to Collection => ${result.id}`)
}


// get the collection and table it 
const getData = async (coll) => {
	const collection = await db.collection(coll).get();

	const pizzaDB = collection.docs.map((doc) => {
		let food = doc.data();
		food.id = doc.id;
		return food;
	});
	console.table(pizzaDB);
};



// pizzas
await addDoc(pizza_Hawaiian,"pizza")
await addDoc(pizza_Pepperoni,"pizza")
await addDoc(pizza_Vegetarian, "pizza")

// customers
await addDoc(customer1,"customers")
await addDoc(customer2, "customers")

// orders
await addDoc(order1, "orders")
await addDoc(order2, "orders")
await addDoc(order3, "orders")

const callData = ['pizza','customers','orders']
for (let i = 0; i < callData.length; i++) {
    await getData(callData[i])
}

