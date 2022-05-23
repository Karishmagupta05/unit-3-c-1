

let data=JSON.parse(localStorage.getItem("product"))  || []

displayData(data)

function displayData(data)
{
    data.forEach(function(element,index){

        var div=document.createElement("div")
        // div.style.height="300px"
        // div.style.width="300px"
        // div.style.backgroundColor="gray"
        // div.style.margin="30px"
        var type=document.createElement("h3")
        type.innerText=element.type

        var desc=document.createElement("h3")
        desc.innerText=element.desc

        var price=document.createElement("h3")
        price.innerText=element.price

        var image=document.createElement("img")
        image.src=element.image
       image.style.height="130px"
       image.style.width="250px"

       var remove=document.createElement("button")
       remove.innerText="Remove"
       remove.setAttribute("class","remove_product")

       remove.addEventListener("click",removedata)
        

        div.append(type,desc,price,image,remove)

        all_products.append(div)
    })
}


function removedata(element,index){

    data.splice(index,1)
    localStorage.setItem("product",JSON.stringify(data))
    
    window.location.reload()

}