let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        
    } catch (error) {
        display.value = 'Error';
    }
}
//#########      Add listeners to buttons        ########


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mousemove', function(event) {
        let rect = button.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        
        //########## Check the cursor #######


        if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
            button.classList.add('button-hover');
        } else {
            button.classList.remove('button-hover');
        }
    });
});
