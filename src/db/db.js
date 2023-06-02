import Dexie from "dexie";

export const db = new Dexie("cartDatabase");
    db.version(1).stores({
    cartItems: "++id,name,description,price,quantity",
    });
    db.open()
    .then(() => {
        console.log("Database is open");
    })
    .catch((error) => {
        console.error("Failed to open database", error);
    });
    