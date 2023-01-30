 
const form=document.getElementById("form");
const name=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");

form.addEventListener('submit' , (e)=> {

    e.preventDefault();

    validateInputs();
});

const setError=(element,message)=>{
  const iputGroub=element.parentElement;
  const errorDisplay=iputGroub.querySelector('.error');


  errorDisplay.innerText=message;
  inputGroub.classlist.add('error');
  inputGroub.classlist.remove('succsess');

}

const setSuccess=element=>{
    const inputGroub=element.parentElement;
    const errorDisplay=iputGroub.querySelector('.error');
    errorDisplay.innerText='';

    inputGroub.classlist.add('succsess');
    inputGroub.classlist.remove('error');
}

const validateInputs=() =>{
    const nameValue=name.value.trim();
    const emailValue=email.value.trim();
    const phoneValue=phone.value.trim();

    if(nameValue === ''){
    setError(name ,"name is recuired")
  }else{
  setSuccess(name);
  }


  if(emailValue === ''){
    setError(email ,"name is recuired")
  }else{
  setSuccess(email);
  }
}
    
 
  
