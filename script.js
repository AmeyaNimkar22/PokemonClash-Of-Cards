const name=document.getElementById("name");
const namebtn=document.getElementById("namebtn");
const trainer=document.getElementById("UserName");
const compScore=document.getElementById("compScore");
const userScore=document.getElementById("userScore");
const prc=document.getElementById("proceed");
const winnerStatus=document.getElementById("winnerStatus");

const start=document.getElementById("start");
const gameWindow=document.getElementById("gameWindow");
const startGame=document.getElementById("startGame");

const n1=document.getElementById("n1");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");
const p5=document.getElementById("p5");
const p6=document.getElementById("p6");

const bt1=document.getElementById("bt1");
const bt2=document.getElementById("bt2");
const bt3=document.getElementById("bt3");
const bt4=document.getElementById("bt4");
const bt5=document.getElementById("bt5");
const bt6=document.getElementById("bt6");
const inventory=document.getElementById("inventory");


const ch1=document.getElementById("ch1");
const ch2=document.getElementById("ch2");
const ch3=document.getElementById("ch3");
const ch4=document.getElementById("ch4");
const ch5=document.getElementById("ch5");
const ch6=document.getElementById("ch6");

const UserName=document.getElementById("UserName");
const un=document.getElementById("un");
const ud=document.getElementById("ud");
const ua=document.getElementById("ua");
const usa=document.getElementById("usa");
const us=document.getElementById("UserName");
const cn=document.getElementById("cn");
const cd=document.getElementById("cd");
const ca=document.getElementById("ca");
const csa=document.getElementById("csa");
const cs=document.getElementById("cs");
const compPokemonThumb=document.getElementById("compPokemonThumb");

let pokemonName="";
let check=0;
let pokemonInventory=[];
let trainerName="";
let cscore=0;
let uscore=0;
let userChosePokemon=false;

function nameIntake(){
    const UserName=name.value;
    n1.textContent=`Welcome ${UserName}!`;
    trainerName=UserName;
}

bt1.addEventListener('click', () => {
    check=1;
    pokemonName=p1.value.toLowerCase();   
    authenticate();
});
bt2.addEventListener('click', () => {
    check=2;
    pokemonName=p2.value.toLowerCase();
    authenticate();
});
bt3.addEventListener('click', () => {
    check=3;
    pokemonName=p3.value.toLowerCase();
    authenticate();
});
bt4.addEventListener('click', () => {
    check=4;
    pokemonName=p4.value.toLowerCase();
    authenticate();
});
bt5.addEventListener('click', () => {
    check=5;
    pokemonName=p5.value.toLowerCase();
    authenticate();
});
bt6.addEventListener('click', () => {
    check=6;
    pokemonName=p6.value.toLowerCase();
    authenticate();
});

async function authenticate() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    const checkId = `ch${check}`;
    const checkElement = document.getElementById(checkId);
    
    if (!response.ok || pokemonName=="") {
        checkElement.textContent = "Pokemon not found! Please add a valid Pokemon name.";
        checkElement.style.color="red";
    } else {
        checkElement.textContent = "Pokemon found! Added to inventory.";
        pokemonInventory.push(pokemonName);
        checkElement.style.color="#109c14";
    }
}


function proceed(){  
    if(pokemonInventory.length!=6 || trainerName=="" ){
        ch6.textContent="Pokemon not locked or username not entered. Please try again!";
    }
    else{
        start.style.display="none";
        gameWindow.style.display="flex";
        trainer.textContent=`${trainerName} chooses:`;
        compScore.textContent="";         
        console.log(pokemonInventory);
        prc.textContent="Proceed";
        prc.id="prc1";
    }     
        
    }
    async function addData(){
        for(let j = 1; j <= pokemonInventory.length; j++) {
            // Dynamically construct the IDs based on the loop index
            let pname = document.getElementById(`pkn${j}`);
            let pdefense = document.getElementById(`pkd${j}`);
            let pattack = document.getElementById(`pka${j}`);
            let pkImg = document.getElementById(`Pokémon${j}`);
            
            // Fetch Pokémon data from the API
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInventory[j-1]}`);
            const pokemonData = await response.json();
            const pokemonSprite = pokemonData.sprites.front_default; // Get the sprite URL
        
            // Update the DOM with the fetched data
            pname.textContent = `Name: ${pokemonData.name}`;
            pdefense.textContent = `Defense: ${pokemonData.stats[2].base_stat}`; // Stats[2] corresponds to 'defense'
            pattack.textContent = `Attack: ${pokemonData.stats[1].base_stat}`; // Stats[1] corresponds to 'attack'
            
            // Set the src attribute of the img element to the sprite URL
            pkImg.src = pokemonSprite;
            pkImg.style.display = "block"; // Ensure the image is visible
        }
    }
    async function addPhotos(){
        for(let j = 1; j <= pokemonInventory.length; j++) {
            // Dynamically construct the IDs based on the loop index
            let pkImg = document.getElementById(`Pokémon_${j}`);
            
            // Fetch Pokémon data from the API
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInventory[j-1]}`);
            const pokemonData = await response.json();
            const pokemonSprite = pokemonData.sprites.front_default; // Get the sprite URL
            
            // Set the src attribute of the img element to the sprite URL
            pkImg.src = pokemonSprite;
            pkImg.style.display = "block"; // Ensure the image is visible
        }
    }
    



    var modal = document.getElementById('inventoryModal');
    var btn = document.getElementById('inventory');
    var span = document.getElementsByClassName('close')[0];
    
    btn.onclick = function() {
        modal.style.display = 'block';
        addData(); // Call the function to populate data when modal is opened
    }
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }



   // Choose Pokémon Modal
   var pmodal = document.getElementById('choosePokemonModal');
   var pbtn = document.getElementById('choose');
   var pspan = document.getElementsByClassName('close choose-close')[0];
   
   pbtn.onclick = function() {
       pmodal.style.display = 'block';
       addPhotos();
   }
   
   pspan.onclick = function() {
       pmodal.style.display = 'none';
   }
   
   window.onclick = function(pevent) {
       if (pevent.target == pmodal) {
           pmodal.style.display = 'none';
       }
   }

   const tp1 = document.getElementById("Pokémon_1");
const tp2 = document.getElementById("Pokémon_2");
const tp3 = document.getElementById("Pokémon_3");
const tp4 = document.getElementById("Pokémon_4");
const tp5 = document.getElementById("Pokémon_5");
const tp6 = document.getElementById("Pokémon_6");
const userPokemonThumb=document.getElementById("userPokemonThumb");

let selectedBox = null;

tp1.addEventListener('click', () => {
    pokemonName = pokemonInventory[0];   
    boxId = document.getElementById("pokemonCardBox1");
    trainerPokemonchoose();
});

tp2.addEventListener('click', () => {
    pokemonName = pokemonInventory[1];  
    boxId = document.getElementById("pokemonCardBox2");
    trainerPokemonchoose();
});

tp3.addEventListener('click', () => {
    pokemonName = pokemonInventory[2];  
    boxId = document.getElementById("pokemonCardBox3");
    trainerPokemonchoose();
});

tp4.addEventListener('click', () => {
    pokemonName = pokemonInventory[3];  
    boxId = document.getElementById("pokemonCardBox4");
    trainerPokemonchoose();
});

tp5.addEventListener('click', () => {
    pokemonName = pokemonInventory[4];  
    boxId = document.getElementById("pokemonCardBox5");
    trainerPokemonchoose();
});

tp6.addEventListener('click', () => {
    pokemonName = pokemonInventory[5]; 
    boxId = document.getElementById("pokemonCardBox6");
    trainerPokemonchoose();
});

function trainerPokemonchoose() {
    // Reset previous selection
    if (selectedBox) {
        selectedBox.style.border = "none";
        selectedBox.style.backgroundColor = "transparent";
    }
    
    // Set new selection
    selectedBox = boxId;
    selectedBox.style.border = "1px solid black";
    selectedBox.style.backgroundColor = "rgb(147, 191, 231)";
    
    // Show the button to confirm the choice
    const pokemonCardButton = document.getElementById("pokemonCardButton");
    pokemonCardButton.style.display = "flex";
}
let userSpecialAttack=0;
let userAttack=0;
let userDefense=0;
let userPokemon="";
document.getElementById("chosen").addEventListener('click', () => {
    if (selectedBox) {
        async function applyChosen(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemonData = await response.json();
            const pokemonSprite = pokemonData.sprites.front_default; 
            
            userPokemon=pokemonData.name;
            us.textContent=`${trainerName} chose ${pokemonData.name}!`;
            userSpecialAttack=pokemonData.stats[3].base_stat;
            usa.textContent = `Special Attack: ${userSpecialAttack}`;
            userDefense=pokemonData.stats[2].base_stat;
            ud.textContent = `Defense: ${userDefense}`; 
            userAttack=pokemonData.stats[1].base_stat;
            ua.textContent = `Attack: ${userAttack}`; 
            
            
            userPokemonThumb.src = pokemonSprite;
            userPokemonThumb.style.display = "block";
            userChosePokemon=true;

        }
        applyChosen();
        document.getElementById("pokemonCardButton").style.display = "none";
    }
});
const levelStatus=document.getElementById("levelStatus");
let round=1;
startGame.addEventListener('click', async () => {
    if (userChosePokemon) {  
        
        await getRandomPokemon();  
        setTimeout(() => startRound(), 3000); 

    } else {
        window.alert("Please select a Pokémon.\n Click on 'Choose your Pokémon' button to do so.");
    }
});


let compSpecialAttack=0;
let compAttack=0;
let compDefense=0;
const proc=document.getElementById("proc");
async function getRandomPokemon() {
    const maxPokemon = 1010; 
    const randomId = Math.floor(Math.random() * maxPokemon) + 1;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemonData = await response.json();
    const pokemonSprite = pokemonData.sprites.front_default; // Get the sprite URL
        
            // Update the DOM with the fetched data
            cs.textContent=`System chose ${pokemonData.name}!`;
            compSpecialAttack=pokemonData.stats[3].base_stat;
            csa.textContent = `Special Attack: ${compSpecialAttack}`;
            compDefense=pokemonData.stats[2].base_stat;
            cd.textContent = `Defense: ${compDefense}`; 
            compAttack=pokemonData.stats[1].base_stat;
            ca.textContent = `Attack: ${compAttack}`; 
            compPokemonThumb.src = pokemonSprite;
            compPokemonThumb.style.display = "block"; 
}
function selectCriteria() {
    
    uscore = 0;
    cscore = 0;
    
    compareStats(compSpecialAttack, userSpecialAttack);
    compareStats(compAttack, userAttack);
    compareStats(compDefense, userDefense);
    putData();
}
let totalUserScore=0;
let totalComputerScore=0;
let ur1=0;
let cr1=0;
let ur2=0;
let cr2=0;
let ur3=0;
let cr3=0;
function compareStats(a, b) {
    if (a > b) {
        cscore+=10;
    } else if (a < b) {
        uscore+=10;
    }
  
}
function putData(){
    if(round==1){
        document.getElementById("r2c2").textContent=`${uscore}`;
        document.getElementById("r3c2").textContent=`${cscore}`;
        ur1=uscore;
        cr1=cscore;

    }
    else if(round==2){
        document.getElementById("r2c3").textContent=`${uscore}`;
        document.getElementById("r3c3").textContent=`${cscore}`;
        ur2=uscore;
        cr2=cscore;
    }
    else if(round==3){
        document.getElementById("r2c4").textContent=`${uscore}`;
        document.getElementById("r3c4").textContent=`${cscore}`;
        ur3=uscore;
        cr3=cscore;
    }
    totalComputerScore=cr1+cr2+cr3;
    totalUserScore=ur1+ur2+ur3;
    
}
function startRound() {
    selectCriteria();
    compScore.textContent = `System's score: ${cscore}`;
    userScore.textContent = `${trainerName}'s score: ${uscore}`;
    
    if (cscore > uscore) {
        winnerStatus.textContent = `Trainer ${trainerName} lost this round!`;
        winnerStatus.style.color="red";
    } else if (uscore > cscore) {
        winnerStatus.textContent = `Trainer ${trainerName} won this round!`;
        winnerStatus.style.color="green";
    } else {
        winnerStatus.textContent = `This round is a tie!`;
    }
    if(round==1 || round==2){
      proc.style.display="block";
      proc.style.alignItems="center";
      startGame.textContent="Start Battle";
      startGame.style.display="none";
    }
    else{
        proc.style.display="block";
        proc.textContent="Proceed to results";
    }
    round++;
}

const FinalWinnerWindow=document.getElementById("FinalWinnerWindow");
proc.addEventListener('click',  () => {
    if (round<4) {  
        levelStatus.textContent=`Round ${round}`;
        winnerStatus.textContent = `Let the Battle Begin!`;
        winnerStatus.style.color="blue";
        compScore.textContent = `System's score: --`;
        userScore.textContent = `${trainerName}'s score: --`;
        cs.textContent=`System chose --`;
        csa.textContent = `Special Attack:--`;
        cd.textContent = `Defense: --`;
        ca.textContent = `Attack: --`; 
        compPokemonThumb.style.display = "none";
        us.textContent=`${trainerName} chose --`;
        usa.textContent = `Special Attack: --`;
        ud.textContent = `Defense: --`; 
        ua.textContent = `Attack: --`; 
        userPokemonThumb.style.display = "none";
        let n=pokemonInventory.indexOf(pokemonName);
        pokemonInventory.splice(n,1);
        console.log(pokemonInventory);
        userPokemon="";
        userChosePokemon=false;
        startGame.style.display="block";
        proc.style.display="none";

    } else {
        startGame.style.display="none";
        finalUser.textContent=`${trainerName}'s final score: ${totalUserScore}`;
        finalComp.textContent=`System's final score: ${totalComputerScore}`;
        FinalWinnerWindow.style.display="flex";
        gameWindow.style.display="none";
        document.getElementById("r3c5").textContent=`${totalComputerScore}`;
        document.getElementById("r2c5").textContent=`${totalUserScore}`;
        document.getElementById("r2c1").textContent=`${trainerName}'s score`;
        if(totalUserScore>totalComputerScore){
            document.getElementById("finalVerdictStatement").textContent=`Congrationals trainer ${trainerName}.You win!`;
            document.getElementById("finalVerdictStatement").style.color="green";
            document.getElementById("finalImg").src="trophy.jpeg";
        }
        else if(totalUserScore<totalComputerScore){
            document.getElementById("finalVerdictStatement").textContent=`Better luck next time trainer ${trainerName}.You lost!`;
            document.getElementById("finalVerdictStatement").style.color="red";
        }
        else{
            document.getElementById("finalVerdictStatement").textContent=`It's a tie`;
            document.getElementById("finalVerdictStatement").style.color="blue";
        }

    }
});
