const cantidad =  isNaN(process.argv[2])? 100000000 : process.argv[2]
const numbers = {}
for (let i=0; i<cantidad; i++) {
    const num = Math.floor(Math.random() * 1000)
    if (num in numbers) {
        numbers[num]++
    } else {
        numbers[num]=1
    }

}

process.send(numbers)
