document.addEventListener('DOMContentLoaded', function() {
    const txtbox_input = document.getElementById("input_txt");
    const btnequal = document.getElementById("equal");
    
    // id isimleri ile aynı girilmeli
    const buttons = {
        ac: 'C',
        plus: '+',
        seven: '7',
        eight: '8',
        nine: '9',
        minus: '-',
        four: '4',
        five: '5',
        six: '6',
        one: '1',
        two: '2',
        three: '3',
        zero: '0',
        decimal: '.',
        multiply: '*',
        divide: '/',
        open_parenthesis: '(',
        close_parenthesis: ')'
    };

    Object.keys(buttons).forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function() {
                if (id === 'ac') {
                    txtbox_input.value = '';
                } else {
                    addToInput(buttons[id]);
                }
            });
        } else {
            console.error(`Button with id ${id} not found`);
        }
    });

    btnequal.addEventListener('click', function() {
        try {
            txtbox_input.value = eval(txtbox_input.value.replace(/x/g, '*').replace(/÷/g, '/'));
        } catch (e) {
            txtbox_input.value = 'Error';
        }
    });

    function addToInput(value) {
        txtbox_input.value += value;
    }
});
