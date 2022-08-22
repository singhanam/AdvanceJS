let txt = document.getElementById('text');
buttons = document.querySelectorAll('button');
let txtValue = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
     if(buttonText == 'C'){
            txtValue = "";
            txt.value = txtValue;
        }
        else if(buttonText == '='){
            txt.value = eval(txtValue);
        }
        else{
            txtValue += buttonText;
            txt.value = txtValue; 
        }
    })
}