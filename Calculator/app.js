const values = document.querySelectorAll(".value");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");


let input = "";

for (let value of values) {
    const character = value.dataset.key;

    value.addEventListener('click', () => {
        if(character == "clear"){
            input = "";
            displayInput.innerHTML = "";
            displayOutput.innerHTML = "0";
        } else if (character == "delete"){
            input = input.slice(0, -1);
            displayInput.innerHTML = input;
        } else if (character == "=") {
            let result = eval(input);

            displayOutput.innerHTML = result;
            // console.log(result);
        }else {
            input += character;
            displayInput.innerHTML = input;
        }
    })
}