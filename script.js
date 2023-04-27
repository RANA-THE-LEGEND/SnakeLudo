var dice = document.querySelector(".dice");
var dice1 = document.querySelector(".dice1");
var playerBox = document.querySelector(".players");
var feelingTeller = document.querySelector(".feelingTeller");
var turnTeller = document.querySelector(".turnTeller");
var contianer = document.querySelector(".container");
var playerRed = document.querySelector(".playerRed");
var playerBlue = document.querySelector(".playerBlue");
var playerGreen = document.querySelector(".playerGreen");
var playerYellow = document.querySelector(".playerYellow");
// var block = document.querySelector(".block");
var blocks = document.querySelectorAll(".block");
var block = Array.from(blocks);
var a = 0;
var RP=-1,BP=-1,GP=-1,YP=-1;
var Positions = [
    RP,BP,GP,YP,
]
var colors = [
    "Red","Blue","Green","Yellow",
]
var PlayerTeller = [
    "Red Player's Turn","Blue Player's Turn","Green Player's Turn", "Yellow Player's Turn",
]
var players = [
    playerRed,
    playerBlue,
    playerGreen,
    playerYellow,
]
var CPlayer = playerRed;

cp = -1;

var Ladders = [
    block[0],
    block[3],
    block[7],
    block[20],
    block[27],
    block[49],
    block[70],
    block[79],
]
var Snakes = [
    block[31],
    block[35],
    block[47],
    block[61],
    block[87],
    block[94],
    block[98],
    
]
function checkLadder(CP) {
    Ladders.forEach((e)=>{
         if (CP == e) {
           
             console.log("yeah");
             feelingTeller.innerText = colors[a] + " Player is lucky.";
            //  setTimeout(() => {
            //     feelingTeller.innerText = "";
            //  }, 3000);
             switch (e) {
                case block[0]:
                    block[33].appendChild(CPlayer);
                    Positions[a] = 33;
                    break;
                case block[3]:
                    block[14].appendChild(CPlayer);
                    Positions[a] = 14;
                    break;
                case block[7]:
                    block[29].appendChild(CPlayer);
                    Positions[a] = 29;
                    break;
                case block[20]:
                    block[41].appendChild(CPlayer);
                    Positions[a] = 41;
                    break;
                case block[27]:
                    block[73].appendChild(CPlayer);
                    Positions[a] = 73;
                    break;
                case block[49]:
                    block[66].appendChild(CPlayer);
                    Positions[a] = 66;
                    break;
                case block[70]:
                    block[91].appendChild(CPlayer);
                    Positions[a] = 91;
                    break;
                case block[79]:
                    block[97].appendChild(CPlayer);
                    Positions[a] = 97;
                    break;        
                default:
                    break;
             }
         }
    })
 }
 function checkSnake(CP) {
    Snakes.forEach((e)=>{
         if (CP == e) {
             console.log("Oh No");
             feelingTeller.innerText = colors[a] + " Player is Unlucky.";
            //  setTimeout(() => {
            //     feelingTeller.innerText = "";
            //  }, 3000);
             switch (e) {
                case block[31]:
                    block[2].appendChild(CPlayer);
                    Positions[a] = 2;
                    break;
                case block[35]:
                    block[9].appendChild(CPlayer);
                    Positions[a] = 9;
                    break;
                case block[47]:
                    block[26].appendChild(CPlayer);
                    Positions[a] = 26;
                    break;
                case block[61]:
                    block[15].appendChild(CPlayer);
                    Positions[a] = 15;
                    break;
                case block[87]:
                    block[23].appendChild(CPlayer);
                    Positions[a] = 23;
                    break;
                case block[94]:
                    block[52].appendChild(CPlayer);
                    Positions[a] = 52;
                    break;
                case block[98]:
                    block[38].appendChild(CPlayer);
                    Positions[a] = 38;
                    break;
                      
                default:
                    break;
             }
         }
    })
 } 
dice.addEventListener('click',()=>{

    feelingTeller.innerText = "";
    dice.innerText = Math.round(1+(6-1)*Math.random());
    CPlayer.style.width = "50%";
    if ((Positions[a] + parseInt(dice.innerText)) > 99) {
        console.log("Sorry" + PlayerTeller[a]);
        feelingTeller.innerText = colors[a] + " Player Try Again";
       
            if (CPlayer == playerYellow) {
                a=0;
            }
            else{
    
                a++;
            }
            CPlayer = players[a];
            turnTeller.innerText = PlayerTeller[a];
    
        
    } else {
        
        Positions[a] = Positions[a] + parseInt(dice.innerText);
        block[Positions[a]].appendChild(CPlayer);
        if (Positions[a] == 99) {
            playerBox.appendChild(CPlayer);
            Positions[a]= -1;
            console.log(colors[a] + " Player Win");
            feelingTeller.innerText = colors[a] + " Player Win";
           re = confirm(colors[a] + " Player Win <br> Press Okay To Restart.")
            if (re == true || re== false) {
                location.reload();
            }
        }
        // checkLadder(Positions[a]);
        checkLadder(block[Positions[a]]);
        checkSnake(block[Positions[a]]);
        if (dice.innerText == 6) {
            CPlayer = CPlayer;
            turnTeller.innerText = PlayerTeller[a];
        } else {
            if (CPlayer == playerYellow) {
                a=0;
            }
            else{
    
                a++;
            }
            CPlayer = players[a];
            turnTeller.innerText = PlayerTeller[a];
    
        }
    }

})

