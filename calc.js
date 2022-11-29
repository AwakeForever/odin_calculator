function operator(a,b,eval){
    if (eval == "plus"){
        return a+b
    }
         
    if (eval == "minus"){
        return a-b
    }

    if (eval == "multiply"){
        return a*b
    }
          
     if (eval == "divide"){
        return a/b
    }

}




let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let textbox = document.querySelector('#text')
let equals = document.querySelector('#equals')
let display = document.querySelector('#display')
let clear = document.querySelector('#clear')
let num1
let num2
let num3
let array = []


plus.addEventListener('click',() => {
    clicker("plus")
});

minus.addEventListener('click',() => {
    clicker("minus")
});

multiply.addEventListener('click',() => {
    clicker("multiply")
});

divide.addEventListener('click',() => {
    clicker("divide")
});


function clicker(oper){
   
    //main function used by all evaluation buttons
    num1 = document.getElementById('text').value
    if(num1 == ""){
        document.getElementById('text').value = "input a number"
        return
    }
    num1 = Number(num1)
    if(isNaN(num1)){
        document.getElementById('text').value = "input a number"
        return
    } else {
        if(array[1]){
            if(array.length == 3){
                /*if there is an expression already stored 
                then this evaluates it and places the result into the 
                new expression
                */
                num3 = operator(array[0],array[2],array[1])
                console.log(num3)
                array.length = 0
                array[0] = num3
                array[1] = oper
                array[2] = num1
                if(array[1] == "divide" && array[2] == 0){
                    document.getElementById('text').value = ""
                    document.getElementById('display').value = "No"
                    array.length = 0
                    return
            
                }
                document.getElementById('text').value = ""
                document.getElementById('display').value = array
                console.log(array)
                return
               
            }
        } else {
            array[1] = oper
            //add the operator, chosen by the specific click event
        }
        
        if(array[0]){
            array[2] = num1
            document.getElementById('text').value = ""
            document.getElementById('display').value = array
        } else {
            array[0] = num1
            document.getElementById('text').value = ""
            document.getElementById('display').value = array
        }
        
        document.getElementById('display').value = array
    }
    
}


equals.addEventListener('click',() => {
    if(array[1] == "divide" && array[2] == 0){
        document.getElementById('text').value = ""
        document.getElementById('display').value = "No"
        array.length = 0
        return

    }
    if(array.length == 3){
        //evaluates the expression stored in the array
        num3 = operator(array[0],array[2],array[1])
        array.length = 0
        document.getElementById('display').value = num3
        document.getElementById('text').value = ""
    }
    if(array.length == 2){
        //takes the number from the text box to complete the expression
        num1 = document.getElementById('text').value
        if(num1 == ""){
            document.getElementById('text').value = "input a number"
            return
        }
        num1 = Number(num1)
        if(isNaN(num1)){
            document.getElementById('text').value = "input a number"
            return
        } else {
            array[2] = num1
            num3 = operator(array[0],array[2],array[1])
            //console.log(num3)
            array.length = 0
            document.getElementById('display').value = num3
            document.getElementById('text').value = ""

        }

    }
});

clear.addEventListener('click',() => {
    array.length = 0
    document.getElementById('display').value = ""
    document.getElementById('text').value = ""


});








//how to prevent calc from evalating number it inserted in text box
//store operations
//don't evaluate full expressions in the expression click

/*
when user inputs a number in the display, 
the program checks if there is anything in array[0], if not then
the number is stored as array[0]). if there is, it is stored in 
array(2)

when user inputs presses an eval, the program checks if 
there is anything in array[1]. if there is, use equals() to
evaluate, then place result in array[0] and new eval in array[1]
if not, the eval stored as (array[1])

when user presses eval:
    if array[1]
        if array.lenght = 3
            operate()
            clear array
            display result
            
    else 
        array[1] = eval
    
    if num in text field
        if array[0]
            num1 = array[2]
            clear field
        else 
            num1 = array[0]
            clear field
    


when the user inputs the equals sign, check if array length = 3
if so, use eval() 
clear array
store result in array[0]
display 


*/