let hubs = ["New York", "London", "Tokyo"];
let now = new Date();
let fortyEightHours = 48 * 60 * 60 * 1000;
for (let hub of hubs) {
    let randomTime = Math.random() * fortyEightHours;
    let deliveryTime =
        new Date(now.getTime() + randomTime);
    console.log(hub, "==>", deliveryTime);
    console.log(hub,"==>",deliveryTime.getHours())
}
