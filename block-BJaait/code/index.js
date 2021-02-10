let form = document.querySelector("form")


let root = document.querySelector("ul");

let list = [];

function addNotice(event){
    event.preventDefault();

    console.log(form.elements.text.value)
    list.push(form.elements.text.value);
    createUI(list,root);
    form.elements.text.value = "";
}

function createUI(data = list,root){
    root.innerHTML = "";
    list.forEach((elm)=>{
        let li = document.createElement("li");
        li.setAttribute("draggable","true" )

        let p = document.createElement("p");

        p.innerText = elm;

        let span = document.createElement("span");
        span.innerText = "drag me"

        li.append(p,span);
        root.append(li);
  


        var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let items = document.querySelectorAll('li');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });

       
    })
}

form.addEventListener("submit",addNotice);






     
// document.addEventListener('DOMContentLoaded', (event) => {

//     var dragSrcEl = null;
    
//     function handleDragStart(e) {
//       this.style.opacity = '0.4';
      
//       dragSrcEl = this;
  
//       e.dataTransfer.effectAllowed = 'move';
//       e.dataTransfer.setData('text/html', this.innerHTML);
//     }
  
//     function handleDragOver(e) {
//       if (e.preventDefault) {
//         e.preventDefault();
//       }
  
//       e.dataTransfer.dropEffect = 'move';
      
//       return false;
//     }
  
//     function handleDragEnter(e) {
//       this.classList.add('over');
//     }
  
//     function handleDragLeave(e) {
//       this.classList.remove('over');
//     }
  
//     function handleDrop(e) {
//       if (e.stopPropagation) {
//         e.stopPropagation(); // stops the browser from redirecting.
//       }
      
//       if (dragSrcEl != this) {
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData('text/html');
//       }
      
//       return false;
//     }
  
//     function handleDragEnd(e) {
//       this.style.opacity = '1';
      
//       items.forEach(function (item) {
//         item.classList.remove('over');
//       });
//     }
    
    
//     let rootElm = document.querySelectorAll('li');
//     console.log(rootElm)

//     rootElm.forEach(function(item) {
//       item.addEventListener('dragstart', handleDragStart, false);
//       item.addEventListener('dragenter', handleDragEnter, false);
//       item.addEventListener('dragover', handleDragOver, false);
//       item.addEventListener('dragleave', handleDragLeave, false);
//       item.addEventListener('drop', handleDrop, false);
//       item.addEventListener('dragend', handleDragEnd, false);
//     });
//   });