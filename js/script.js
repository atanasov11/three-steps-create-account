const find =(selector)=>{

    return document.querySelector(selector)
}

const create = (selector)=>{
    return document.createElement(selector)
}

const allInputs = [...document.querySelectorAll('input')]
const allP =[...document.querySelectorAll('p')]
// const button_next= find('.style_button_next')
// const progress_bar = find('.step1 ')
const container1 = find  ('.unu')
const container2 = find ('.doi')
const container3 = find ('.trei')
const divToateContainarurile = find('.toate_containerurile')
const baraUnu = find('.bara1')
const baraDoi = find('.bara2')
const patratUnu = find('.step2')
const patratDoi = find('.step3')

const toateContainerurile = [container1,container2,container3]


let currentPos = toateContainerurile.indexOf(step =>{
    return step.classList.contains('active')
})
if (currentPos === -1){
     currentPos = 0
}

divToateContainarurile.addEventListener('click',function (event) {
    let countInputs = 0
    allInputs.forEach((item) => {
        if (toateContainerurile[currentPos].contains(item) && item.value !== '') {
            countInputs++;
        }
    })

    if (event.target.classList[0] === 'style_button_next' || event.target.classList[0] === 'style_button_next2' || event.target.classList[0] === 'style_button_submit') {


        //email
        if (!allInputs[0].value.includes('@gmail.com') || allInputs[0].value[0] == Number(allInputs[0].value[0]) && allInputs[0].value === allInputs[0].value.toLowerCase()) {
            allP[0].classList.add('active')
            allInputs[0].classList.add('errorBorder')
        }else{
            allP[0].classList.remove('active')
            allInputs[0].classList.remove('errorBorder')
        //password
            if (allInputs[1].value.length >=8 && allInputs[1].value !== allInputs[1].value.toLowerCase()){
                allP[1].classList.remove('active')
                allInputs[1].classList.remove('errorBorder')

                let simbol = false
                for (let i = 0; i < allInputs[1].value.length; i++) {
                    if (allInputs[1].value.charCodeAt(i) >= 33 && allInputs[1].value.charCodeAt(i) <= 47 ||allInputs[1].value.charAt(i) === '?'  ){

                        allP[1].classList.remove('active')
                        allInputs[1].classList.remove('errorBorder')
                        simbol = true
                        break
                    }else {
                        allP[1].classList.add('active')
                        allInputs[1].classList.add('errorBorder')
                    }
                }
               //confirmed password
                let confirmed = false
                if (allInputs[1].value === allInputs[2].value){
                    allP[2].classList.remove('active')
                    allInputs[2].classList.remove('errorBorder')
                    confirmed = true
                }else {
                    allP[2].classList.add('active')
                    allInputs[2].classList.add('errorBorder')
                }

                //phone number



                allInputs.forEach(item =>{
                    if (countInputs !== 3 && toateContainerurile[currentPos].contains(item) && item.value === ''){
                        item.classList.add('errorBorder')
                        item.nextElementSibling.classList.add('active')
                    }else{
                        item.classList.remove('errorBorder')
                        item.nextElementSibling.classList.remove('active')
                    }
                })


                if (simbol === true){
                    if (confirmed === true){
                        if (countInputs === 3) {

                            toateContainerurile[currentPos].classList.remove('active')
                            currentPos += 1
                            toateContainerurile[currentPos].classList.add('active')
                            if (event.target.classList[0] === 'style_button_next') {
                                baraUnu.classList.add('bara1_schimbat')
                                patratUnu.classList.add('step2_schimbat')
                            }
                            if (event.target.classList[0] === 'style_button_next2') {
                                baraDoi.classList.add('bara2_schimbat')
                                patratDoi.classList.add('step3_schimbat')
                            }
                        }
                    }
                }
            }else{
                allP[1].classList.add('active')
                allInputs[1].classList.add('errorBorder')
            }
        }
    }
            if (countInputs > 0 || countInputs <= 3) {
                if (event.target.classList[0] === 'style_button_previous1' || event.target.classList[0] === 'style_button_previous2') {
                    toateContainerurile[currentPos].classList.remove('active')
                    currentPos -= 1
                    toateContainerurile[currentPos].classList.add('active')
                    if (event.target.classList[0] === 'style_button_previous1') {
                        container1.classList.add('fadeRight')
                        baraUnu.classList.remove('bara1_schimbat')
                        patratUnu.classList.remove('step2_schimbat')
                    }
                    if (event.target.classList[0] === 'style_button_previous2') {
                        baraDoi.classList.remove('bara2_schimbat')
                        patratDoi.classList.remove('step3_schimbat')
                    }

                }
            }
})

allInputs[8].addEventListener('input', (event) => {
    let result = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (!result[2]) {
        event.target.value = result[1];

    } else {
        event.target.value = '+' + result[1] + ' (' + result[2] + ') ' + result[3];
        if (result[4]) {
            event.target.value += ' ' + result[4];

        }
        if (result[5]) {
            event.target.value += ' ' + result[5];

        }
    }
})
