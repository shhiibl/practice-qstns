
// Write a program that prints numbers from 1 to 100. But:

// If the number is divisible by 3, print "Fizz".

// If the number is divisible by 5, print "Buzz".

// If the number is divisible by 7, print "Pop".

// If divisible by 3 and 5, print "FizzBuzz".

// If divisible by 3 and 7, print "FizzPop".

// If divisible by 5 and 7, print "BuzzPop".

// If divisible by 3, 5, and 7, print "FizzBuzzPop".

// Otherwise, print the number itself.




for(let i = 1;i<=100;i++){


    if(i%3===0 && i%5===0 && i%7===0){
        console.log("fizzzhhh")
    }
    else if(i%5===0 && i%7===0){
        console.log("BuzzPop");
        
    }
    else if(i%3===0 && i%7===0){
        console.log("FizzPop")
    }
    else if(i%5===0 && i%3===0){
        console.log("FizzBuzz")
    }
    else if(i%7===0){
        console.log("pop")
    }
    else if(i%5===0){
        console.log("buzz")
    }
    else if(i%3===0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }

}


