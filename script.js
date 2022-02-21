console.log('Script Loaded');
console.log('Adding new features')
console.log('testing upstream ..')

document.getElementById('btn').addEventListener( 'click' ,()=>{
    let usernameForm = document.getElementById('username');
    let username = usernameForm.value ;
    let emailForm = document.getElementById('email');
    let email = emailForm.value ;
    console.log(username);
    console.log(email);

})
