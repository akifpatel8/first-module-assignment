const readline=require("readline")
const eventEmmiter=require("events")
const e=new eventEmmiter 
const readline1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
let book=require('./bookarr')
e.on("invalid",()=>{
    console.log("You have selected an invalid entry so please press 1, 2 or 3");
})
function fun(){
    readline1.question(" Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit",(val1)=>{
        if(val1==1){
            console.log(book);
            fun()
        }
        else if(val1==2){
            readline1.question("enter the book name",(new_book)=>{
                book.push(new_book);
                console.log("book added successfully");
                fun()
            })
        }
        else if(val1==3){
            readline1.question("are you sure you want to quit - press Y to quit",(quit_reply)=>{
                if(quit_reply=='Y'){
                    console.log("Bye Bye");
                    readline1.close()
                }
            })
        }
        else{
            e.emit("invalid")
           // console.log("you have selected invalid input");
            fun()
        }

        
    })
}

fun()