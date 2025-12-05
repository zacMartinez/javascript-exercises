const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath || thisYear) - oldest.yearOfBirth;
        const currentAge = (person.yearOfDeath || thisYear) - person.yearOfBirth; 

        if (currentAge > oldestAge) oldest = person;
        return oldest;
    },{yearOfBirth: thisYear, yearOfDeath: thisYear});
};

// Do not edit below this line
module.exports = findTheOldest;
