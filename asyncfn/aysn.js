function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("User data received");
            resolve("User: Reshma");
        }, 2000);

    });
}

async function displayUser() {

    console.log("Fetching user...");

    const result = await getUser();

    console.log(result);

    console.log("User displayed");
}

console.log("Program started");

displayUser();

console.log("Program ended");