const allUsers = [
    "Apurva",
    "Bhavik",
    "Bhargav",
    "Chhagan",
    "Naksh",
    "Anshika",
];

function isUserPresent(user) {
    if (allUsers.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
        return true;
    } else {
        console.log(`No, ${user} is not a valid user.`);
        return true;
    }
}

isUserPresent("shivani");
isUserPresent("Apurva")