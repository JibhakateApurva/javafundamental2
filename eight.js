function countDown(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2024-11-03'
console.log(countDown(eventDate));
