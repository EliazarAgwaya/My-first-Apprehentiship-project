
const btn=document.getElementById("btn")
const welcome=(e) => {
e.preventDefault()
const input=document.querySelector("input").value
const element= document.createElement("p");
element.innerHTML=`Hello ${input}, welcome to the bootcamp`
document.body.appendChild(element)
}
btn.addEventListener("click", welcome)