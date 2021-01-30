

function handleFirstClass(ECONOMY, isIncrease){
    const economyInput = document.getElementById(ECONOMY + '-input');
    const economyNumber = parseInt(economyInput.value);
    let economyCount = economyNumber;

    if(isIncrease == true && economyNumber < 20){
        economyCount = economyNumber + 1;
    }else if(isIncrease == false && economyNumber > 0){
        economyCount = economyNumber - 1;
    }
    economyInput.value = economyCount;

    let economyTotal = 0;
    if(ECONOMY == 'firstclass'){
        economyTotal = economyCount * 150;
    }else if(ECONOMY == 'economy'){
        economyTotal = economyCount * 100;
    }

    calculateTotal();
    
}

function calculateTotal(){
    const firstClassInput = document.getElementById('firstclass-input');
    const firstClassNumber = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-input');
    const economyNumber = parseInt(economyInput.value);

    const totalPrice = firstClassNumber * 150 + economyNumber * 100;
    document.querySelector('.subtotal p').innerText = totalPrice;

    const vat = totalPrice / 10;
    document.querySelector('.vat p').innerText = vat;

    const grandTotal = totalPrice + vat;
    document.querySelector('.total p').innerText = grandTotal;
}


