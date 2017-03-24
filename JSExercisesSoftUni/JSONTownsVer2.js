/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    let result = {};
    let townIncome = args.map(JSON.parse);
    for (let keyAndValues of townIncome){
        console.log (keyAndValues);
    };
    for (let obj of townIncome) {
        if (obj.town in result){
            result[obj.town] += obj.income;
        }
        else {
            result[obj.town] = obj.income;
        }
    }
    let towns = Object.keys(result).sort();

    for (let i = 0; i < towns.length; i++) {
        console.log(`${towns[i]} -> ${result[towns[i]]}`)
    }
}
solve([
    '{"town": "Sofia", "income": 200}',
    '{"town": "Varna", "income": 120}',
    '{"town": "Pleven", "income": 60}',
    '{"town": "Varna", "income": 70}',
]);