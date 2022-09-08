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
    const input_value_name = document.querySelector('.name-value-input');
    const input_value = document.querySelector('.value-input');
    const bnt_input = document.querySelector('.bnt-input');
    const bnt_output = document.querySelector('.bnt-output');
    
    
    bnt_input.addEventListener('click', ()=>{
      
    });
    
});