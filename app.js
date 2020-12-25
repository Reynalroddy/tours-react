const url = "https://randomuser.me/api/";
const btns = document.querySelectorAll(".icon");
/* 
let img  = document.querySelector(".user-img");
let btn  = document.querySelector(".btn");

 */

const logic = ()=>{

//get elements
const getElement = (selection)=>{
const element = document.querySelector(selection);
if(element) return element;
throw new Error("error is here fam")

}

//fetch user


const fetchUser = async ()=>{

    const response = await fetch(url);
    const data = await response.json();
// console.log(data);
return data



}


const displayUser = ({dob:{age},email,phone,picture:{large},name:{first,last}})=>{
// const displayUser = (person)=>{
console.log(cell,age,email,phone,large,first,last)

 let con1 = getElement(".user-title")
 let con2 = getElement(".user-value")
 let img =  getElement(".user-img")

 
 con1.textContent = `my name is`;
 con2.textContent = `${first} ${last}`
img.src = large;

const infoBtns = [...btns];

infoBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        
const label = e.target.parentElement.dataset.label;
 console.log(label)
 
 let con1 = getElement(".user-title")
 let con2 = getElement(".user-value")
  let img =  getElement(".user-img")
 con1.textContent = `my ${label} is`;

 con2.textContent = label2
img.src = large;


/* console.log)

    })
 */


})


})
}


return {

    getElement,
    fetchUser,
    displayUser
}

}


const btn = logic().getElement(".btn");
btn.addEventListener("click",()=>{
// getUser()
// console.log("picked")
logic().fetchUser().then((data)=>{
    console.log(data.results[0])
// obj === data.results[0]
logic().displayUser(data.results[0])


});
})



