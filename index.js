//store the products array in localstorage as "products"


function store(event){

    event.preventDefault()
    let form=document.getElementById("products")

    let type=document.querySelector("#type").value
    let desc=form.desc.value
    let price=form.price.value
    let image=document.querySelector("#image").value
  
let s=new product(type,desc,price,image)
   console.log(s)
let data=JSON.parse(localStorage.getItem("product"))  || []
data.push(s)
localStorage.setItem("product",JSON.stringify(data))

window.location.href="inventory.html"
}



function product(t,d,p,i)
{
    this.type=t
    this.desc=d
    this.price=p
    this.image=i
}