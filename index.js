const words = ["facebook", "instagram", "apple", "name", "youtube","app","nikita","code","quiz","white","attat"];

const rendomWord = words[Math.floor(Math.random() * words.length)];
const lengthword=rendomWord.length;
const visited=[];
const rightcarecter=[];
const wrongchar=[];
const bodypart= document.querySelectorAll("#figure-part");
console.log(bodypart);
let k=0;

function showchar(){
    document.getElementById("word-dash").innerHTML = `
    ${rendomWord.split("").map((letter)=> 
    `<span class="Letter">
        ${rightcarecter.includes(letter) ? letter:"_"}
        </span>
        `
    ).join("")
}
`;
}
showchar();
function udatecorrectchar(){
    document.getElementById("worng-char-block").innerHTML=`
    <p>Worng char press</p>
    ${wrongchar.map((letter)=>`
    <span>${letter}</span>
    
    `)
}`
}
function showbody(){
    const c= bodypart[k];
    k++;
    c.style.display="block"
    console.log(c);
    if(k>=bodypart.length){
       const start= confirm("Opps You Are lose");
       console.log(start);
        
        if(start){
            document.location.reload(true);
        }else{
            const thanks=document.createElement("h1");
            thanks.innerHTML="Thanks For Playing";
            document.getElementById("game-container").append(thanks);
        }
    //    rendomWord.forEach(element => {
    //        rightcarecter.push(element);
    //        showchar();
    //        udatecorrectchar();
    //    });
       
    }
}
window.addEventListener("keydown",(e)=>{
    if(e.key>='a'&&e.key<='z'&&k<=bodypart.length){
        console.log(e.key);
        if(visited.includes(e.key)){
            alert("Already enter");
        }else{
            visited.push(e.key);
            if(rendomWord.includes(e.key) && k<=bodypart.length){
                // correct 
                rightcarecter.push(e.key);
                showchar();
                if(rightcarecter.length>=lengthword){
                    const play = confirm(`Won1......... Do You Want To Play Again !`);
                    if(play){
                        document.location.reload(true);
                    }else{
                        k=bodypart.length;
                        const thanks=document.createElement("h1");
                        thanks.innerHTML="Thanks For Playing";
                        document.getElementById("game-container").append(thanks);
                    }
                    
                }
            }else{
                wrongchar.push(e.key);
               showbody();
                // display body
            }
            console.log(visited);
            console.log(rightcarecter);
            console.log(wrongchar);
        }

    }else{
        console.log("bad");
    }
})
