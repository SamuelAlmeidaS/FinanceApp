window.addEventListener('load',(e)=>{
    e.preventDefault();

    const forms = document.querySelector('.forms');
    forms.addEventListener("click", (e)=>{
        e.preventDefault();
        
    });
    
    const transition = document.querySelector('.new-transition');
    transition.addEventListener("click", ()=>{
    
        if(forms.style.display == 'flex'){
            forms.style.display = 'none';
        } else {
            forms.style.display = 'flex';
        }
        
    });

    const money_input = document.querySelector('.money-input');
    const money_output = document.querySelector('.money-output');
    const money_total = document.querySelector('.money-total');
    const input_value_name = document.querySelector('.name-value-input');
    const input_value = document.querySelector('.value-input');
    const bnt_input = document.querySelector('.bnt-input');
    const bnt_output = document.querySelector('.bnt-output');
    let sum_input = 0;
    let sub_output = 0;
    let total = 0;
    
    bnt_input.addEventListener('click', () =>{
        sum_input += input_value.value;
        money_input.innerText = `R$ ${parseFloat(sum_input)}`;
        total += sum_input;
        money_total.innerHTML = `R$ ${parseFloat(total)}`;
    });

    bnt_output.addEventListener('click', () =>{
        sub_output -= input_value.value;
        money_output.innerHTML = `R$ ${parseFloat(sub_output)}`;
        total -= sub_output;
        money_total.innerHTML = `R$ ${parseFloat(total)}`;
    });
    
});