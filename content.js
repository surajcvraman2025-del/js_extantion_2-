

let My_Main_Array =[];
const Render_inputbox_output_of_input_div_box_el = document.querySelector(".output_of_input_div_box");














const input_of_input_div_box = document.querySelector("#input_of_input_div_box");   //varable for input box//






let Add_buttonof_input_div_box = document.querySelector("#Add_buttonof_input_div_box")  //var of button//
console.log(Add_buttonof_input_div_box)//

Add_buttonof_input_div_box.addEventListener( "click" ,  () => {      //function of add button //

    console.log("it works Add");
    My_Main_Array.push(input_of_input_div_box.value);
    console.log(My_Main_Array);//
    Render_inputbox_output_of_input_div_box();
    input_of_input_div_box.value = "";
    
    
}
);

let Remove_button_2of_input_div_box = document.querySelector('#Remove_button_2of_input_div_box') //function of remove bnt//
console.log(Remove_button_2of_input_div_box);
Remove_button_2of_input_div_box.addEventListener( "click" , () => {

    console.log("its work remove")
    input_of_input_div_box.value = [];
    My_Main_Array = [];
    console.log(My_Main_Array);
    Render_inputbox_output_of_input_div_box_el.innerHTML = `<li></li>`;
    

});

const Render_inputbox_output_of_input_div_box = () => {

    let list_item = "";

    for (let i = 0; i < My_Main_Array.length; i++) {
        list_item += `<li class="render_li" ><a href="${My_Main_Array[i]}" target="_blank" id="list_tags">${My_Main_Array[i]}</a></li>`;
    }

    Render_inputbox_output_of_input_div_box_el.innerHTML = `<ol>${list_item}</ol>`;
};
