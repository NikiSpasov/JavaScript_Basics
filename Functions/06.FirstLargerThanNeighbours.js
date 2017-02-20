function solve(args)
{
    let n = +args[0],
        arr = args[1].split(" ").map(Number);

    function calculate(array)
    {
        let result = 0;
        for (let i = 1; i < n - 1; i+= 1)
        {
            if (array[i] > array[i - 1] && array[i] > array[i + 1])
            {
                result += 1;
            }
        }
        return result;
    }

    result = calculate(arr);
    console.log(result);
}
solve(["6",
"-26 -25 -28 31 2 27"]);
