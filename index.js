const email=document.getElementById('email');
const form=document.getElementById('form');
const error=document.getElementById('error');

form.addEventListener('submit',(e)=>{
e.preventDefault();
if(email.value.trim()===''){
    error.textContent = 'Email address cannot be empty.';
      error.style.display = 'block';
}else{
    error.style.display = 'none';

}
})