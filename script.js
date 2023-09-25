document.querySelector('.main   ').addEventListener('submit',function(event){
    event.preventDefault();
    const celcius = document.querySelector('#input');
    const result = document.querySelector('.result');
    const c = parseFloat(celcius.value)
    if (isNaN(c)){
        result.textContent = 'Please Enter a Valid Value'
    }else{
        const f = (c * 9/5) + 32;
        result.textContent = f + 'F'
    }
});