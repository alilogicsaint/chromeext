
// var data =[]
 
// document.getElementById("btn").addEventListener("click", myFunction());



// function myFunction(){
    
//    document.getElementById("numberInput").addEventListener('change', doThing);
 
//    function doThing(){
//     data.push(this.value)
//     chrome.storage.local.set({"todo":[...data]}); 
//     }


// }



//     chrome.storage.local.get("todo", function(data){
//     const limap = data.todo.map((value, index) => {
//         return `<li class="dflex listli" key=${index}>
//         <input type="checkbox" unchecked @click="${this.changeStatus}" /> 
//         <p class="li_text">${value}</p> 
//           <div>
//            <a id="delet" value="${index}"  ><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
//            <a id="delet" value="${index}" > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
//           <div> 
//         </li>`
        
//       });
   
//     document.querySelector(".lists").innerHTML=limap.join('');

// });

// $(document).on("change","#numberInput",function(e) {
//     data.push(e.target.value)
// })



var data =[]

$(document).on("click",".btn",function(e) {
    
    var textval=document.getElementById("numberInput").value
    data.push(textval)
    chrome.storage.sync.set({"todo":[...data]});
    chrome.storage.sync.get("todo", function(getdata){
        const limap = getdata.todo.map((value, index) => {
            return `<li class="dflex listli" key=${index}>
            <input type="checkbox" unchecked @click="${this.changeStatus}" /> 
            <p class="li_text">${value}</p> 
              <div>
               <a id="delet" value="${index}"  ><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
               <a id="delet" value="${index}" > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
              <div> 
            </li>`
          });
      document.querySelector(".lists").innerHTML=limap.join(''); 
    }) 
})



chrome.storage.sync.get("todo", function(getdata){
         getall=_.uniq(data.concat(getdata))
   const limap = getdata.todo.map((value, index) => {
       return `<li class="dflex listli" key=${index}>
       <input type="checkbox" unchecked @click="${this.changeStatus}" /> 
       <p class="li_text">${value}</p> 
         <div>
          <a id="delet" value="${index}"  ><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
          <a id="delet" value="${index}" > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
         <div> 
       </li>`
     });
 document.querySelector(".lists").innerHTML=limap.join(''); 
});



// chrome.storage.onChanged.addListener(function(changes, namespace) {
//     console.log(changes)
//     var todos =changes.todo
//     // var data = todos.oldValue.concat(todos.newValue)
   
//     const limap = data.map((value, index) => {
//         return `<li class="dflex listli" key=${index}>
//         <input type="checkbox" unchecked @click="${this.changeStatus}" /> 
//         <p class="li_text">${value}</p> 
//           <div>
//            <a id="delet" value="${index}"  ><i class="fa fa-trash-o" aria-hidden="true"></i></a> 
//            <a id="delet" value="${index}" > <i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
//           <div> 
//         </li>`
//       });
   
//     document.querySelector(".lists").innerHTML=limap.join('');
// });









// document.getElementById("delet").addEventListener('change', removeitem)
//         function removeitem(){ 
//              console.log(this.value)
//              chrome.storage.local.get("todos", function(data) {
//                 var todos = data.todos;
//                 todos.splice(i, 1);
//                 chrome.storage.local.set({"todo":[...data]}); 
//               });
        
//   };


































// chrome.storage.onChanged.addListener(
//     chrome.storage.local.get("todo", function(data){
    
//         data.todo.forEach(getlist);

//     function getlist(value){
//         var div=document.createElement("li"); 
//         document.querySelector(".lists").appendChild(div); 
//         div.innerText=value;
//       }
     
//     })
//   )



//   addEventListener("unload", function(){
//     var background = chrome.extension.getBackgroundPage();
//     background.mySavefunction(data);
// }
   
// chrome.storage.local.get("todo", function(data){
//     //  console.log(data.todo)
    
//     data.todo.forEach(getlist);
    
//     function getlist(value){
//         var div=document.createElement("li"); 
//         document.querySelector(".lists").appendChild(div); 
//         div.innerText=value;
//     }
       
// });
    


// chrome.storage.onChanged.addListener(function (changes, namespace) {
//     console.log(changes,"||++||",namespace)
//     for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//     //   console.log(
//     //     `Storage key "${key}" in namespace "${namespace}" changed.`,
//     //     `Old value was "${oldValue}", new value is "${newValue}".`
//     //   );
//     var div=document.createElement("li"); 
//         document.querySelector(".lists").appendChild(div); 
//         div.innerText=value;
//     }

    
//   });


