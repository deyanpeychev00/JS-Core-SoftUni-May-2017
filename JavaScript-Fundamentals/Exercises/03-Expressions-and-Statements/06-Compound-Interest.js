/**
 * Created by Deyan Peychev on 08-May-17.
 */
function compoundInterest([principalSum,interestRate,compoundingPeriod,timespanYears]) {
    [principalSum,interestRate,compoundingPeriod,timespanYears] = [principalSum,interestRate,compoundingPeriod,timespanYears].map(Number);

    interestRate /=100;
    let compoundingFrequency = 12/compoundingPeriod;

    let total = principalSum* Math.pow((1 +(interestRate/compoundingFrequency)), (compoundingFrequency*timespanYears));
    console.log(total.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);