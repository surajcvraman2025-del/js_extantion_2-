

let My_Main_Array =[];















const input_of_input_div_box = document.querySelector("#input_of_input_div_box");   //varable for input box//
console.log(input_of_input_div_box);//
console.log(input_of_input_div_box.value)//





let Add_buttonof_input_div_box = document.querySelector("#Add_buttonof_input_div_box")  //var of button//
console.log(Add_buttonof_input_div_box)//

Add_buttonof_input_div_box.addEventListener( "click" ,  () => {      //function of add button //

    console.log("it works Add");
    My_Main_Array.push(input_of_input_div_box.value);
    console.log(My_Main_Array);//
    
    
}
);

let Remove_button_2of_input_div_box = document.querySelector('#Remove_button_2of_input_div_box') //function of remove bnt//
console.log(Remove_button_2of_input_div_box);
Remove_button_2of_input_div_box.addEventListener( "click" , () => {

    console.log("its work remove")
    input_of_input_div_box.value = [];
    My_Main_Array = [];
    console.log(My_Main_Array);
    

});

const Render_inputbox_output_of_input_div_box = () => {
 
    const Render_inputbox_output_of_input_div_box = document.querySelector(".output_of_input_div_box");
    console.log(output_of_input_div_box_element);

Render_inputbox_output_of_input_div_box.innerHTML = `<li>`
    



}