/**
 * Created by andrew on 15.11.16.
 */
function clickMainButton(){

    var input = document.getElementsByTagName("input")[0];
    console.dir(input);
    console.dir(mainTodo);
    var newDo = document.createElement('li');
    newDo.innerText = input.value;
    var mainTodo = document.getElementById("todo");
    mainTodo.appendChild(newDo);
  //  arrLi = mainTodo.getElementsByTagName("li");
   // Array.prototype.forEach.call(arrLi, function (input) { console.log(input)});
  //  if (!input.value ==''){
    /*    var newLi = document.createElement('li');
        newLi.innerText = input.value;
        mainTodo.appendChild(newLi);*/
  //  } else{ alert('Value is blank!'); }

}