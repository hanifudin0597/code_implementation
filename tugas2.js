const pijarFood = (harga, voucher, jarak, pajak) => {
    
    const ongkir = (jarak<=2) ? 5000 : ((jarak-2)*3000)+5000
    const tax = (pajak==true) ? harga * 0.05 : 0
    const potonganVoucher1 = (0.5 * harga)
    const potonganVoucher2 = (0.6 * harga)
    

    if(voucher==false){
        const subTotal = harga + ongkir + tax
        return ` 
                Harga       : ${harga}
                Potongan    : 0
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
    }
    else if(voucher=="PIJARFOOD5"){
        if(harga >= 50000){
            if(potonganVoucher1 < 50000){
                const subTotal = (harga + ongkir + tax) - potonganVoucher1
                return ` 
                Harga       : ${harga}
                Potongan    : ${potonganVoucher1}
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
            }
            else if(potonganVoucher1 >= 50000){
                const subTotal = (harga + ongkir + tax) - 50000
                return ` 
                Harga       : ${harga}
                Potongan    : ${potonganVoucher1}
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
            }
           
        }
        else if(harga < 50000){
            const subTotal = harga + ongkir + tax
            return ` 
                Harga       : ${harga}
                Potongan    : 0
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
        }
    }
    else if(voucher=="DITRAKTIRPIJAR"){
        if(harga >= 25000){
            if(potonganVoucher2 < 25000){
                const subTotal = (harga + ongkir + tax) - potonganVoucher2
                return ` 
                Harga       : ${harga}
                Potongan    : ${potonganVoucher2}
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
            }
            else if(potonganVoucher2 >= 30000){
                const subTotal = (harga + ongkir + tax) - 30000
                return ` 
                Harga       : ${harga}
                Potongan    : ${potonganVoucher2}
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
            }
           
        }
        else if(harga < 25000){
            const subTotal = harga + ongkir + tax
            return ` 
                Harga       : ${harga}
                Potongan    : 0
                Biaya antar : ${ongkir}
                Pajak       : ${tax}
                Sub Total   : ${subTotal}`
        }
    }
    else{
        return "Kode voucher yang anda masukkan salah"
    }
}

console.log(pijarFood(100000,"PIJARFOOD5",5,true))
console.log(pijarFood(45000,"PIJARFOOD5",3,false))
console.log(pijarFood(200000,false,1,true))

console.log(pijarFood(100000,"DITRAKTIRPIJAR",5,true))
console.log(pijarFood(24000,"DITRAKTIRPIJAR",3,false))
console.log(pijarFood(100000,false,1,true))
