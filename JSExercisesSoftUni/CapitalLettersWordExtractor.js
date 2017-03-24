/**
 * Created by nspasov on 23.3.2017 г..
 */
function solve(args) {
    console.log(args
        .join(' ')
        .split(/\W+/)//готов литерал за регекс //!
        .filter(w => w.length > 0)
        .filter(w => w===w.toUpperCase())
        .join(', '));
}
solve(
    [
       'PHP is great. Yeee!',
        'JavaScript is even Better.',
        'CSHARP 4EvAA'
    ]
);