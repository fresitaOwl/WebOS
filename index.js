function updateTime(){

var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#timeElement");
timeText.innerHTML = currentTime

}
setInterval (updateTime, 1000);

//drag thing
dragElement(document.getElementById("hi"));

function dragElement(element) {
  var STARTUPx = 0;
  var STARTSIDEy = 0;
  var NOWUPx = 0;
  var NOWSIDESy = 0;
  if (document.getElementById(element.id + "header")) {
    
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } 
    else {
    
    element.onmousedown = dragMouseDown;

     }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    NOWUPx = e.clientX;
    NOWSIDESy = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
  
    STARTUPx = NOWUPx - e.clientX;
    STARTSIDEy = NOWSIDESy - e.clientY;
    NOWUPx = e.clientX;
    NOWSIDESy = e.clientY;
  
    element.style.top = (element.offsetTop - STARTSIDEy) + "px";
    element.style.left = (element.offsetLeft - STARTUPx) + "px";
  }

  function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;

  }
}

//open or close window

var hi = document.querySelector("#hi");
var hiScreen = document.querySelector("#hi");

function closeWindow(element){
    element.style.display = "none"
}

function openWindow(element){
    element.style.display = "block"
}

var hiScreenClose = document.querySelector("#hiclose")

var hiScreenOpen = document.querySelector("#hiopen")

hiScreenClose.addEventListener("click", function() {
  closeWindow(hiScreen);
});

hiScreenOpen.addEventListener("click", function() {
  if ( selectedIcon == hiScreenOpen ){
   openWindow(hiScreen ); 
   deselectIcon(hiScreenOpen);
  }
  else{
    selectIcon (hiScreenOpen);
  }
});

//top window
var bigIndex = 1;

function windowtaphandling(element){
    element.addEventListener("mousedown",() =>
      handleWindowTap(element)
  )

function handleWindowTap(element){
  bigIndex++;
  element.style.zIndex = bigIndex;
}
}

var topBar = document.querySelector("#id");
  function openWindow(element){
    element.style.display = "block";
    bigIndex++;
    element.style.zIndex = bigIndex;
  }

  function handleWindowTap(element){
    bigIndex++;
    element.style.zIndex = bigIndex;
    topBar.style.zIndex = bigIndex + 1;
    deselectIcon(selectedIcon);
  }

// select thingy
var selectedIcon = undefined;

function selectIcon(element) {
  element.classList.add("crow");
  selectedIcon = element;
} 

function deselectIcon(element) {
  element.classList.remove("crow");
  selectedIcon = undefined;
} 

//notes
const textEl=document.getElementById("text");
const saveButton=document.getElementById("save");
const listEl=document.getElementById("list");

const store=JSON.parse(localStorage.getItem("locker")) || [];

function showNote(){
  listEl.innerHTML=""
  store.forEach((item,index)=>{
    const p=document.createElement("p");
    p.textContent=item.locker;

    const delBtn=document.createElement("button");
    delBtn.textContent="delete";
    delBtn.classList="delete";

    delBtn.addEventListener("click", ()=>{
      delNote(index);
    })

    p.appendChild(delBtn);
    listEl.appendChild(p);
  })

}

saveButton.addEventListener("click", ()=>{
  let text=textEl.value.trim();
  if(text !== ""){
    const noteObj={locker:text}
    store.push(noteObj);
    localStorage.setItem("locker", JSON.stringify(store));
    showNote();
    alert("DING! GOT IT! NOTE SAVED!");
  }
  textEl.value=""
  textEl.focus();
})

function delNote(index){
  store.splice(index, 1);
  localStorage.setItem("locker", JSON.stringify(store));
  showNote();
}

  showNote();



//second note thingy to move
  
  dragElement(document.getElementById("write"));

//open or close window

var write = document.querySelector("#write");
var writeScreen = document.querySelector("#write");
var writeScreenClose = document.querySelector("#writeclose")
var writeScreenOpen = document.querySelector("#writeopen")


writeScreenClose.addEventListener("click", function() {
  closeWindow(writeScreen);
});

writeScreenOpen.addEventListener("click", function() {
  if ( selectedIcon == writeScreenOpen ){
   openWindow(writeScreen ); 
   deselectIcon(writeScreenOpen);
  }
  else{
    selectIcon (writeScreenOpen);
  }
});