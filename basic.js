function getValue(){
    var val1 = prompt("Enter 1st Value:");
    var val2 = prompt("Enter 2nd Value:");
    var val1 = parseInt(val1);
    var val2 = parseInt(val2);
    return [val1, val2];
};


while(true){
    var option = prompt("Choose One Of This Option:\n 1.Addition\n 2.Subtraction\n3.Multipilication\n4.Division\nOther Keys To Exit", 1);
    if (option==1){
    var value = getValue();
    var val1 = value[0];
    var val2 = value[1];
    alert(`The Addition Of ${val1} and ${val2} is ${val1 + val2}`);
} else if(option==2){
    var value = getValue();
    var val1 = value[0];
    var val2 = value[1];
    alert(`The Subtraction Of ${val1} and ${val2} is ${val1 - val2}`);
} else if(option==3){
    var value = getValue();
    var val1 = value[0];
    var val2 = value[1];
    alert(`The Multipilication Of ${val1} and ${val2} is ${val1 * val2}`);
} else if(option==4){
    var value = getValue();
    var val1 = value[0];
    var val2 = value[1];
    alert(`The Division Of ${val1} and ${val2} is ${val1 / val2}`);
} else{
    var confirmation = confirm("Do You Really Want To Quit?");
    if (confirmation){
        break;
    } else{
        continue;
    };
};

};