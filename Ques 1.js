function checkHappy(num){
    if(num<1){
        return false
    }

    let rem=0
    while(num>9){
        let sum = 0
        let t=num;
        while(t){
            sum+=t%10;
            t=parseInt(t/10);
        }
        num=sum
    }
    return num===1

}

let count=0;
let i=0;
while(count<5){
  
  if(checkHappy(i)){
    console.log(i)
    count++
  }
  i++;
  
}
