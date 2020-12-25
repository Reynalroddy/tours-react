const logic = ()=>{
//get elements

const getElement = (selection) =>{
const element = document.querySelector(selection);
if(element) {
    return element;
}
else{
     throw new Error('no element selected');
}

}

//fetch user info
const fetchInfo = ()=>{

const btn = getElement('.btn');


});


}




















return {
getElement,
fetchInfo
}




}