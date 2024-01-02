let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#Fahrenheit > input')
let kelvinInput = document.querySelector('#Kelvin > input')
let btn=document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input', function(){
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15
    fahrenheitInput.value=roundNumber(fTemp)
    kelvinInput.value=roundNumber(kTemp)
})
fahrenheitInput.addEventListener('input', function(){
    let fTemp=parseFloat(celciusInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15
   celciusInput.value=roundNumber(cTemp)
    kelvinInput.value=roundNumber(kTemp)
})
kelvinInput.addEventListener('input', function(){
    let kTemp=parseFloat(celciusInput.value)
    let fTemp=(kTemp-273.15)*(9/5)+32
    let cTemp=kTemp-273.15
    fahrenheitInput.value=roundNumber(fTemp)
    celciusInput.value=roundNumber(cTemp)
})
btn.addEventListener('click', ()=>{
    fahrenheitInput.value=""
kelvinInput.value=""
celciusInput.value=""
})