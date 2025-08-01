let option=true

const sub1=document.getElementById('sub1')
const sub2=document.getElementById('sub2')

function changeOption(){
    option=!option
    console.log("Button Pressed")
    console.log(" Option :"+option)
    if(option==true){
    sub1.classList.add('visible')
    sub1.classList.remove('hidden')
    sub2.classList.add('hidden')
    sub2.classList.remove('visible')
    console.log("if triggered")
}
else{
    sub1.classList.remove('visible')
    sub1.classList.add('hidden')
    sub2.classList.remove('hidden')
    sub2.classList.add('visible')
    console.log("Else triggered")
}
}

