

let form = document.getElementById('loginForm');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let info = new FormData(form);
    let sendObject={
        email:info.get('email'),
        password:info.get('password')
    }
    fetch('/login',{
        method:"POST",
        body:JSON.stringify(sendObject),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>{
        console.log(json);
        location.replace('../pages/chat.html')
    })
})

let btnFacebook = document.getElementById('facebook-login')

btnFacebook.addEventListener('click',(evt)=>{
    location = "http://localhost:8080/auth/facebook"
})