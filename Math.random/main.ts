
//Math.random generate random number

function goal() {
 //let randomNum =  Math.random()

   if(Math.random() > 0.5 ) {
    console.log("success!!!");
    
   }else{
    console.log("failure");
    
   }
}

goal()

//using Math.floor and Math.random

//Math.floor 
//Math.floor(4.2) return 5


function getRandomInt() {
    let randomInt = Math.floor(Math.random() * 10) + 1
        if(randomInt >= 5) {
            console.log("You Win...");
            
        }else{
            console.log('You lose');
            
        }


}

getRandomInt()


//Math.ceil(4.2) return 5