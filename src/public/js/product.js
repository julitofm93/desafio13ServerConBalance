let form  = document.getElementById("productForm");
form.addEventListener('submit',function(event){
    event.preventDefault();
    let info = new FormData(form);
    let sendObject ={
        name:info.get('name'),
        description:info.get('description'),
        price:info.get('price'),
        stock:info.get('stock'),
        code:info.get('code'),
    }
    fetch('/products',{
        method:"POST",
        body:JSON.stringify(sendObject),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>{
        form.reset();
        alert('Product registered');
    })
})