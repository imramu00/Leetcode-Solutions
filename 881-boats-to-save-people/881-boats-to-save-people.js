/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    for (var i = 0, j = people.length - 1, boats = 0; i <= j; ++boats) { 
		people[j--] + people[i] <= limit && ++i;
	}
    return boats;
};