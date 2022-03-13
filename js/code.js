let op;

function func() {
    let result;
    let num01 = Number(document.querySelector('#num01').value);
    let num02 = Number(document.querySelector('#num02').value);

    switch (op) {
        case '+':
            result = num01 + num02;
            break;
        case '-':
            result = num01 - num02;
            break;
        case '*':
            result = num01 * num02;
            break;
        case '/':
            result = num01 / num02;
            break;
    }
    document.querySelector('#result').innerHTML = result;
    console.log('hello')
}