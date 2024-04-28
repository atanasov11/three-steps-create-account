const find =(selector)=>{

    return document.querySelector(selector)
}

const create = (selector)=>{
    return document.createElement(selector)
}


const button_next= find('.style_button_next')
const progress_bar = find('.step1 ')
const container1 = find  ('.unu')
const container2 = find ('.doi')
const container3 = find ('.trei')
const divToateContainarurile = find('.toate_containerurile')
const baraUnu = find('.bara1')
const baraDoi = find('.bara2')
const patratUnu = find('.step2')
const patratDoi = find('.step3')

const toateContainerurile = [container1,container2,container3]


let currentPos = toateContainerurile.indexOf(item =>{
    return item.classList.contains('active')
})
if (currentPos === -1){
     currentPos = 0
}
divToateContainarurile.addEventListener('click',function (event){
        if (event.target.classList[0] === 'style_button_next'|| event.target.classList[0] === 'style_button_next2' ){
            toateContainerurile[currentPos].classList.remove('active')
            currentPos +=1
            toateContainerurile[currentPos].classList.add('active')
            if (event.target.classList[0] === 'style_button_next'){
                baraUnu.classList.add('bara1_schimbat')
                patratUnu.classList.add('step2_schimbat')
            }
            if (event.target.classList[0] === 'style_button_next2'){
                baraDoi.classList.add('bara2_schimbat')
                patratDoi.classList.add('step3_schimbat')
            }
        }else if (event.target.classList[0] === 'style_button_previous1' || event.target.classList[0] === 'style_button_previous2'){
            toateContainerurile[currentPos].classList.remove('active')
            currentPos -=1
            toateContainerurile[currentPos].classList.add('active')
            if (event.target.classList[0] === 'style_button_previous1'){
                container1.classList.add('fadeRight')
                baraUnu.classList.remove('bara1_schimbat')
                patratUnu.classList.remove('step2_schimbat')
            }
            if (event.target.classList[0] === 'style_button_previous2'){
                baraDoi.classList.remove('bara2_schimbat')
                patratDoi.classList.remove('step3_schimbat')
            }
        }
})