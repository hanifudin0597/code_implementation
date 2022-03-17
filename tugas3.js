const divideAndSort = (deretAngka) => {
    if(typeof deretAngka == "number"){
        const pisah = deretAngka.toString().split("0")

        const sort = pisah.map((e)=>{
            const urut = e.split("").sort((a,b)=>{
                return a-b
            }).join("")
            return urut
        })
        // console.log(sort)

        const convert = sort.map((elemen)=>{
            return parseInt(elemen)
        })

        const hasil = convert.join("")

        return hasil

    }
    else{
        return "Input parameter harus bertipe number"
    }
}


// const cetak = divideAndSort(5956560159466056)
const cetak = divideAndSort(4321087650995840346)
console.log(cetak)

// divideAndSort(5956560159466056)