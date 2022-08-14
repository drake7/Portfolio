let output="";
let par1,par2="";

function setInput(){
let input1 = document.getElementById("input_a").value;
let input2 = document.getElementById("input_b").value;

par1=parseInt(input1);
par2=parseInt(input2);

console.log({par1,par2});

if( isNaN(input1) | isNaN(input2) )
{
      document.mycalculator.output.value = `Operands ${operandA} and ${operandB} are both not numbers`
      return false;
 }
else
{        
  return true
}
}



function addValue(){
    if (!setInput()) return;

    let output1=par1+par2;
    document.mycalculator.output.value=`${par1} + ${par2} = ${output1}`;
    console.log(`${par1} + ${par2} = ${output1}`);
}


function mulValue(){
    if (!setInput()) return;
    let output1=par1*par2;
    document.mycalculator.output.value=`${par1} * ${par2} = ${output1}`;
    console.log(`${par1} + ${par2} = ${output1}`);
}

function divValue(){
    if (!setInput()) return;
    let output1=par1/par2;
    document.mycalculator.output.value=`${par1} / ${par2} = ${output1}`;
    console.log(`${par1} + ${par2} = ${output1}`);
}

function clearValue(){
    document.mycalculator.output.value="";
    document.getElementById("input_a").value="";
    document.getElementById("input_b").value="";
}