let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            input.value = eval(input.value);
        }
        else if (value === 'AC') {
            input.value = "";
        }
        else if (value === 'DEL') {
            input.value = input.value.slice(0, -1);
        }

        else {
            input.value += value;
        }



    });

});