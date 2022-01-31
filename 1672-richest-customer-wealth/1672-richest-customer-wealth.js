/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((maxWealth, customer) => {
        const currentCustomerWealth = customer.reduce((sum, bankAccountBalance) => {
            return sum + bankAccountBalance;
        }, 0)
        return Math.max(maxWealth, currentCustomerWealth);
    }, 0)
};