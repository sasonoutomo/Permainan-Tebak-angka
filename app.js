let maximum = parseInt(prompt('Masukan nilai Maksimal!'));
while (!maximum) {
    maximum = parseInt(prompt('Masukan Nilai Maksimal!'));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi Tebakan pertama Kamu!'));


while (parseInt(guess) !== targetNum){
    
    if (guess > targetNum) {
        guess = parseInt(prompt('Terlalu Tinggi nih! Coba Tebak lagi : '));
    } else {
        guess = parseInt(prompt('Wah,Tebakan Terlalu Rendah! Ayo Tebak lagi : '));
    }
}

alert('Selamat Tebakan Anda Benar!');