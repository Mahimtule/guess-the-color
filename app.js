
const random_color = document.getElementById('RGB')
const disp_win = document.getElementById('disp-win')
const disp_color = document.getElementById('disp-color')

let r1_1 = document.getElementById('r1-1')
let r1_2 = document.getElementById('r1-2')
let r1_3 = document.getElementById('r1-3')

let r2_1 = document.getElementById('r2-1')
let r2_2 = document.getElementById('r2-2')
let r2_3 = document.getElementById('r2-3')

let win_color = []
let global_win_btn = 0
let chance = 3
let flag = true

function checkWinBtn1(){
    if (global_win_btn == 0) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function checkWinBtn2(){
    if (global_win_btn == 1) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function checkWinBtn3(){
    if (global_win_btn == 2) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function checkWinBtn4(){
    if (global_win_btn == 3) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function checkWinBtn5(){
    if (global_win_btn == 4) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function checkWinBtn6(){
    if (global_win_btn == 5) {
        disp_win.innerHTML = disp_win.innerHTML = "You Won!"
        setDisabled()
        changeAllColor()
    }else{
        checkLoss()
    }
}

function setDisabled(){
    r1_1.setAttribute('disabled', true)
    r1_2.setAttribute('disabled', true)
    r1_3.setAttribute('disabled', true)
    r2_1.setAttribute('disabled', true)
    r2_2.setAttribute('disabled', true)
    r2_3.setAttribute('disabled', true)
}

function setEnabled(){
    r1_1.removeAttribute('disabled', false)
    r1_2.removeAttribute('disabled', false)
    r1_3.removeAttribute('disabled', false)
    r2_1.removeAttribute('disabled', false)
    r2_2.removeAttribute('disabled', false)
    r2_3.removeAttribute('disabled', false)
}

function checkLoss(){
    chance--
    disp_win.innerHTML = disp_win.innerHTML = "Chances left : " + chance

    if(chance == 0){
        disp_win.innerHTML = "You lost :("
        disp_color.innerHTML = "the color was"
        chance = 3
        setDisabled()
        changeAllColor()
        return false
    }
}

function remainingBtn(selected){

    if(selected==0){
        changeColor(r1_2)
        changeColor(r1_3)
        changeColor(r2_1)
        changeColor(r2_2)
        changeColor(r2_3) 
    }else if(selected==1){
        changeColor(r1_1)
        changeColor(r1_3)
        changeColor(r2_1)
        changeColor(r2_2)
        changeColor(r2_3) 
    }else if(selected==2){
        changeColor(r1_1)
        changeColor(r1_2)
        changeColor(r2_1)
        changeColor(r2_2)
        changeColor(r2_3) 
    }else if(selected==3){
        changeColor(r1_1)
        changeColor(r1_2)
        changeColor(r1_3)
        changeColor(r2_2)
        changeColor(r2_3) 
    }else if(selected==4){
        changeColor(r1_1)
        changeColor(r1_2)
        changeColor(r1_3)
        changeColor(r2_1)
        changeColor(r2_3) 
    }else if(selected==5){
        changeColor(r1_1)
        changeColor(r1_2)
        changeColor(r1_3)
        changeColor(r2_1)
        changeColor(r2_2)
    }
}

function selectBtn(){
    
    flag = true
    chance = 3
    setEnabled()
    disp_win.innerHTML = "Chances left : " + 3
    disp_color.innerHTML = ""
    let win_btn = Math.floor(Math.random() * 6)

    switch (win_btn) {
        case 0:
            changeColor(r1_1)
            remainingBtn(0)
            break;
        case 1:
            changeColor(r1_2)
            remainingBtn(1)
            break;
        case 2:
            changeColor(r1_3)
            remainingBtn(2)
            break;
        case 3:
            changeColor(r2_1)
            remainingBtn(3)
            break;
        case 4:
            changeColor(r2_2)
            remainingBtn(4)
            break;
            case 5:
            changeColor(r2_3)
            remainingBtn(5)
            break;
    }

    global_win_btn = win_btn
}

function changeAllColor(){
    let hex = rgbToHex(win_color[0], win_color[1], win_color[2])
    r1_1.style.backgroundColor = hex
    r1_2.style.backgroundColor = hex
    r1_3.style.backgroundColor = hex
    r2_1.style.backgroundColor = hex
    r2_2.style.backgroundColor = hex
    r2_3.style.backgroundColor = hex
}

function changeColor(element){
    let colors = makeColor()
    let hex = rgbToHex(colors[0], colors[1], colors[2])
    element.style.backgroundColor = hex
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
    if (flag) {
        win_color = [r, g, b]
        random_color.innerHTML = "RGB(" + r + ", " + g + ", " + b + ")"
        flag = false
    }
    
	return [r, g, b]   
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')
