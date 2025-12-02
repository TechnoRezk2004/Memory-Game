function t() {
    audioRight.play()
}

function f() {
    audioWrong.play()
}


let myimages = ['1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg'
];

let pool = [
    0, 
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
];

let mydiv = document.getElementById('mydiv');
var audioRight = new Audio('right.wav');
var audioWrong = new Audio('wrong.wav');

for (let index = pool.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[j]] = [pool[j], pool[index]]; 
}

console.log(pool)
function immage(){
    for (let i = 0; i < pool.length; i++){
        mydiv.innerHTML += '<div class="card"><img src="' + myimages[pool[i] % 6] + '"></div>';
    }
    
}

immage(); 

let divvs = document.querySelectorAll('.card'); 

var x = []; 
var flag = true;  
let wins = 0;

function check() {
    
    let card1Src = x[0].firstChild.getAttribute('src');
    let card2Src = x[1].firstChild.getAttribute('src');

    if (card1Src === card2Src) {
        audioRight.play();
        
        x[0].onclick = null;
        x[1].onclick = null;
        wins++;
        if(wins === 6) {
           
       setTimeout(t(), 1500);
       setTimeout(f(), 1500);
       setTimeout(t(), 1500);
        alert("انت فزت")

            
        }
    } else {
        audioWrong.play();
        
        x[0].classList.remove('is-flipped'); 
        x[1].classList.remove('is-flipped');
    }
    
    x = [];
    flag = true;
}


for (var i = 0; i < divvs.length; i++) {
    divvs[i].onclick = function () { 
        if (!flag || this.classList.contains('is-flipped')) {
            return;
        }
        
        this.classList.add('is-flipped');

        if (x.length == 0) {
            x[0] = this;
        } else if (x.length == 1) {
            x[1] = this;
        }

        if (x.length == 2) {
            flag = false; 
            setTimeout(check, 700); 
        }
    };
}