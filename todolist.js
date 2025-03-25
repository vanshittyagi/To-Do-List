let userinput = document.getElementsByClassName("userinput")[0];
let submit = document.getElementById("submitimg");
submit.addEventListener("click", ()=>{
    let taskvalue = userinput.value.trim();
    if(taskvalue===''){
        alert("Please Enter The Task");
        return;
    }
    let taskdiv= document.createElement("div");
    taskdiv.classList.add("listing")

    let doneImg = document.createElement("img");
    doneImg.src= "circle.svg";
    doneImg.alt= "Mark as done";
    doneImg.classList.add("doneimg")

    let tasktext = document.createElement("p");
    tasktext.textContent = taskvalue;

    let deleteimg = document.createElement("img");
    deleteimg.src = "deleteicon.svg";
    deleteimg.alt = "Delete task";
    deleteimg.classList.add("deleteimg")

    taskdiv.appendChild(doneImg);
    taskdiv.appendChild(tasktext);
    taskdiv.appendChild(deleteimg);
    document.querySelector(".container").appendChild(taskdiv);
    userinput.value="";

    doneImg.addEventListener("click", function () {
        if(tasktext.style.textDecoration === "line-through"){
            tasktext.style.textDecoration = "none";
            doneImg.src= "circle.svg";
        }
        else{
            doneImg.src= "tick.svg";
            tasktext.style.textDecoration = "line-through"
        }
        
    })
    deleteimg.addEventListener("click", function(){
        taskdiv.remove();
    })

})
