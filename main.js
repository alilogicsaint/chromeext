
var data =[]
 
document.getElementById("btn").addEventListener("click", myFunction());

function myFunction(){
    
   document.getElementById("numberInput").addEventListener('change', doThing);
   function doThing(){
    data.push(this.value)
    chrome.storage.local.set({"todo":data});
    
   }
   
}


chrome.storage.local.get("todo", function(data){
    
    data.todo.forEach(getlist);

function getlist(value){
    var div=document.createElement("li"); 
    document.querySelector(".lists").appendChild(div); 
    div.innerText=value;
  }
 
})


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


