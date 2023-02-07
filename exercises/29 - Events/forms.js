const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
    console.log('YOU CLICKED IT');
    const shouldChangePage = confirm('This website might be malicious!, do you wish to proceed?');
    

    if(!shouldChangePage){
        event.preventDefault();
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;

    if(name.includes('Chad')){
        alert('Sorry bro');
        event.preventDefault();
    }
});