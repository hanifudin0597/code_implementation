const divideAndSort = (deretAngka) => {
    if(typeof deretAngka == "number"){
        if(deretAngka < Number.MAX_SAFE_INTEGER){
            const pisah = deretAngka.toString().split("0")

            const sort = pisah.map((e)=>{
                const urut = e.split("").sort((a,b)=>{
                    return a-b
                }).join("")
                return urut
            }).join("")

            const convert = parseInt(sort)

            return convert
        }
        else{
            return "input angka tidak boleh melebihi 9007199254740991"
        }
            
    }
    else{
        return "Input parameter harus bertipe number"
    }
}


const cetak = divideAndSort(5956560159466056)
console.log(cetak)

// divideAndSort(5956560159466056)