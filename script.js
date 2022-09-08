window.addEventListener('load',(e)=>{
    e.preventDefault();

    const forms = document.querySelector('.forms');
    const transition = document.querySelector('.new-transition');
    transition.addEventListener("click", ()=>{

        if(forms.style.display == 'none'){
            forms.style.display = 'flex';
        } else {
            forms.style.display = 'none';
        }
        
    });

    const input_value_name = document.querySelector('.name-value-input');
    const input_value = document.querySelector('.value-input');
    const bnt_input = document.querySelector('.bnt-input');
    const bnt_output = document.querySelector('.bnt-output');

    console.log(bnt_output)
    
});