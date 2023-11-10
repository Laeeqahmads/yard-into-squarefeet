function doSum(event) {

    event.preventDefault();
    let firstNumber = document.querySelector("#firstNum").value;


    let result = Number(firstNumber) * 9;

    let message = `${firstNumber} yard is equal to ${result} square-feet`

    document.querySelector("#resultWindow").innerHTML = message

}