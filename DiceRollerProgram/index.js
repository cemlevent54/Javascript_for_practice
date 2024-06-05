


function rolldice() {
    const textBoxDiceNum = document.getElementById("dicenum");
    let dicenum = Number(textBoxDiceNum.value);

    const btndice = document.getElementById("btndice");
    const lblsonuc = document.getElementById("sonuc");
    const lblsonucpng = document.getElementById("sonucpng");

    const min = 1;
    const max = 6; 
    let results = []; 
    let images = [];
    
    

    for (let i = 0; i < dicenum; i++) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        results.push(val);
        images.push(`<img src="images/_${val}.png" alt="Dice image">`);
    }

    lblsonuc.textContent = `Dice: ${results.join(", ")}`;
    lblsonucpng.innerHTML = images.join('');
}

btndice.addEventListener('click', rolldice);




