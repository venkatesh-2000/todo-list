var btn = document.getElementById("add");
btn.addEventListener("click",add);

function add() {
    var event = document.getElementById("event");
    var item = document.createElement("li");
    var node = document.createTextNode(event.value);
    item.appendChild(node);
    

    var list = document.getElementById("list");
    if(event.value!=""){
        var btn1 = document.createElement("button");
        btn1.setAttribute("class","rem");
        
        btn1.innerHTML="Remove";
        item.appendChild(btn1);
        list.appendChild(item);
        
        event.value=""
        item.setAttribute("class","item");
        item.addEventListener("click",function(ev){
            if(ev.target.tagName === 'LI'){
                ev.target.classList.toggle("completed");
            }
        },false);
        btn1.addEventListener("click",function(){
            var div = this.parentElement;
            div.style.display="none";
        });
    }
    else{
        alert("Enter the event!!");
    }
   
}