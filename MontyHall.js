const linereader = require('readline');

function RandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}


function tester(){
    var args = process.argv.slice(2);
    var n=parseInt(args[0]);
    const rl = linereader.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    function readline(question,callback){
        rl.question(question, (answer) => {
          callback(answer);
        });
    }
    var b=RandomRange(1, n);
    readline("Enter a number between 1 and "+n+": ",(answer)=>{
        var a=parseInt(answer);
        if(a==b){
            var c = RandomRange(1, n);
            while(c==b){
                c = RandomRange(1, n);
            }
            readline("The numbers are "+a+" and "+c+". Do you want to change? (y/n)",(answer2)=>{
                var ans=answer2;
                if(ans=="y"){
                    console.log("Your first guess "+a+" was right, the last answer "+c+" was wrong.");
                }else{
                    console.log("Congratulations! Your guess is correct!");
                }
                rl.close();
            });

        }else{
            readline("The numbers are "+a+" and "+b+". Do you want to change? (y/n)",(answer2)=>{
                var ans=answer2;
                if(ans=="y"){
                    console.log("Congratulations, the last answer "+b+" is right!");
                }else{
                    console.log("Your first guess "+a+" was wrong, the last answer "+b+" was right.");
                }
                rl.close();
            });
        }
    });

}

module.exports = tester();
