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


// notes 
var selectedIcon = undefined;

function selectIcon(element) {
  element.classList.add("crow");
  selectedIcon = element;
} 

function deselectIcon(element) {
  element.classList.remove("crow");
  selectedIcon = undefined;
} 