// Deteksi Palindrom
const cekPalindrom = (word) => {
    if(typeof word == "string"){
        const reverse = word.toLowerCase().split("").reverse().join("")

        if(reverse==word.toLowerCase()){
           return "Merupakan kata palindrom"
        }
        else{
            return "Bukan kata palindrom"
        }
    }
    else{
        return "Kata yang diinput harus bertipe string"
    }
}

// const cetak = cekPalindrom("Malam")
// console.log(cetak)

// Reverse word

const reverseWord = (kalimat) => {
    if(typeof kalimat=="string"){
        const balikKalimat = kalimat.split(" ").reverse().join(" ")
        return balikKalimat
    }
    else{
        return "Kalimat yang diinput harus bertipe string"
    }
}

// const balik = reverseWord("Saya ingin pergi ke pasar")
// console.log(balik)