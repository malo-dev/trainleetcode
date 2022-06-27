const handleclick = (e) =>{
    let firstfield = document.getElementById("firstfield").value;
    let secondfield = document.getElementById("secondfield").value
    let thirdfield= document.getElementById("thirdfield").value
    let fourthfield= document.getElementById("fourthfield").value

    if(firstfield ===  "" && secondfield === "" && thirdfield === "" && fourthfield === ""){
        document.getElementById("images").style.visibility= "visible"
        document.getElementById("images2").style.visibility= "visible"
        document.getElementById("images3").style.visibility= "visible"
        document.getElementById("images4").style.visibility= "visible"

        // here is going code for bg
        document.getElementById("firstfield").style.border= "1px solid hsl(0, 100%, 74%)"
        
        // here is going code which is about error message

        document.getElementById("name").style.visibility= "visible"
        document.getElementById("name2").style.visibility= "visible"
        document.getElementById("name3").style.visibility= "visible"
        document.getElementById("name4").style.visibility= "visible"
        
    }
    else if(firstfield !== "" && secondfield === "" && thirdfield === "" && fourthfield === ""){
        document.getElementById("images").style.visibility= "hidden"
        document.getElementById("images2").style.visibility= "visible"
        document.getElementById("images3").style.visibility= "visible"
        document.getElementById("images4").style.visibility= "visible"

        // here is going code for bg
        document.getElementById("firstfield").style.border= "1px solid hsl(0, 100%, 74%)"
        
        // here is going code which is about error message

        document.getElementById("name").style.visibility= "hidden"
        document.getElementById("name2").style.visibility= "visible"
        document.getElementById("name3").style.visibility= "visible"
        document.getElementById("name4").style.visibility= "visible"
    }
    else if(firstfield === "" && secondfield !== "" && thirdfield === "" && fourthfield === ""){
        document.getElementById("images").style.visibility= "visible"
        document.getElementById("images2").style.visibility= "hidden"
        document.getElementById("images3").style.visibility= "visible"
        document.getElementById("images4").style.visibility= "visible"

        // here is going code for bg
        document.getElementById("firstfield").style.border= "1px solid hsl(0, 100%, 74%)"
        
        // here is going code which is about error message

        document.getElementById("name").style.visibility= "visible"
        document.getElementById("name2").style.visibility= "hidden"
        document.getElementById("name3").style.visibility= "visible"
        document.getElementById("name4").style.visibility= "visible"
    }
    else if(firstfield === "" && secondfield === "" && thirdfield !== "" && fourthfield === ""){
        document.getElementById("images").style.visibility= "visible"
        document.getElementById("images2").style.visibility= "visible"
        document.getElementById("images3").style.visibility= "hidden"
        document.getElementById("images4").style.visibility= "visible"

        // here is going code for bg
        document.getElementById("firstfield").style.border= "1px solid hsl(0, 100%, 74%)"
        
        // here is going code which is about error message

        document.getElementById("name").style.visibility= "visible"
        document.getElementById("name2").style.visibility= "visible"
        document.getElementById("name3").style.visibility= "hidden"
        document.getElementById("name4").style.visibility= "visible"
    }
    else if(firstfield === "" && secondfield === true && thirdfield === "" && fourthfield !== ""){
        document.getElementById("images").style.visibility= "visible"
        document.getElementById("images2").style.visibility= "visible"
        document.getElementById("images3").style.visibility= "visible"
        document.getElementById("images4").style.visibility= "hidden"

        // here is going code for bg
        document.getElementById("firstfield").style.border= "1px solid hsl(0, 100%, 74%)"
        
        // here is going code which is about error message

        document.getElementById("name").style.visibility= "visible"
        document.getElementById("name2").style.visibility= "visible"
        document.getElementById("name3").style.visibility= "visible"
        document.getElementById("name4").style.visibility= "hidden"
    }






    else{
        alert("Success")
    }
    e.preventDefault()
}