let m = 1;
do{
    let answer = ""
    if(m % 3 == 0){
        answer += 'Fizz'
    }
    if(m % 5 == 0){
        answer += 'Buzz'}
    console.log(`${m} ${answer}`)

    m++;

    }
}while(m <= 100)
