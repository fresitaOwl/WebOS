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
    delBtn.classList.add("delete");

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

//draw

const board = document.getElementById("board");
const context = board.getContext("2d");
const pickcolor = document.getElementById("pickcolor");
const brushsize = document.getElementById("brushsize");
const clean = document.getElementById("clean");
const fill = document.getElementById("fill");

board.addEventListener("mousedown", ()=> {isDrawing = true});
board.addEventListener("mouseup", ()=> {
  isDrawing = false;
  context.beginPath();
})
board.addEventListener("mouseout", () => {isDrawing= false});
board.addEventListener("mousemove", draw);

board.addEventListener("mousedown", (e) => {
  isDrawing = true;
  e.stopPropagation();
});

brushsize.addEventListener("mousedown", (e) => {
  isDrawing = true;
  e.stopPropagation();
});

clean.addEventListener("click", clearCanvas);
fill.addEventListener("click", fillCanvas);

function draw(e){
if (!isDrawing) return;

context.lineWidth = brushsize.value;
context.lineCap = "round";
context.strokeStyle = pickcolor.value;

context.lineTo(e.offsetX, e.offsetY);
context.stroke();
context.beginPath();
context.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas(){
  context.clearRect(0, 0, board.width, board.height);
}

function fillCanvas(){
  context.fillStyle = pickcolor.value;
  context.fillRect(0, 0, board.width, board.height);
}

//third note thingy to move
  
  dragElement(document.getElementById("drawthingy"));

//open or close window

var draw = document.querySelector("#drawthingy");
var drawScreen = document.querySelector("#drawthingy");
var drawScreenClose = document.querySelector("#drawclose")
var drawScreenOpen = document.querySelector("#drawopen")


drawScreenClose.addEventListener("click", function() {
  closeWindow(drawScreen);
});

drawScreenOpen.addEventListener("click", function() {
  if ( selectedIcon == drawScreenOpen ){
   openWindow(drawScreen ); 
   deselectIcon(drawScreenOpen);
  }
  else{
    selectIcon (drawScreenOpen);
  }
});

//music

//drag thingy

dragElement(document.getElementById("musicthingy"));

//openthingy

var music = document.querySelector("#musicthingy");
var musicScreen = document.querySelector("#musicthingy");
var musicScreenClose = document.querySelector("#musicclose")
var musicScreenOpen = document.querySelector("#murkrow")


musicScreenClose.addEventListener("click", function() {
  closeWindow(musicScreen);
});

musicScreenOpen.addEventListener("click", function() {
  if ( selectedIcon == musicScreenOpen ){
   openWindow(musicScreen ); 
   deselectIcon(musicScreenOpen);
  }
  else{
    selectIcon (musicScreenOpen);
  }
});
 
windowtaphandling(hiScreen);
windowtaphandling(writeScreen);
windowtaphandling(drawScreen);
windowtaphandling(musicScreen);

//start playing thing

const songs = [
  {
    Title: "I Got No Time",
    Artist: "The Living Tombstone",
    src: "./music/fnaf4.mp3",
    cover:"./gifs/fnaf4.gif",
  },
  {
    Title: "AiAiA",
    Artist: "Ado",
    src: "./music/aiaia-ado.mp3",
    cover: "./gifs/ado-licking.gif",
  },
  {
    Title: "FNAF 2 SONG",
    Artist: "The living Tombstone",
    src: "./music/fnaf-2.mp3",
    cover: "./gifs/fnaf-fnaf-meme.gif",
  },
  {
    Title: "GLHF <3",
    Artist: "MICO",
    src: "./music/glhf-mico.mp3",
    cover:"./gifs/cat.gif",
  },
  {
    Title: "IDOL",
    Artist: "Yoasobi",
    src: "./music/idol-yoasobi.mp3",
    cover:"./gifs/hatsune-miku-dance.gif",
  },
  {
    Title: "Dear Athena",
    Artist: "Sierra Sikora",
    src: "./music/dear-athena.mp3",
    cover: "./gifs/athena-epic-the-musical.gif",
  },
  {
    Title: "DIE IN A FIRE",
    Artist: "The Living Tombstone FT. EileMonty & Orko",
    src: "./music/fnaf-3.mp3",
    cover:"./gifs/fnaf-2-puppet-gangnam-style.gif",
  },
  {
    Title: "Villain (Cover: Stella Jang)",
    Artist: "Ado",
    src: "./music/villain-ado.mp3",
    cover: "./gifs/ado-fries.gif",
  },
  {
    Title: "The Moon Will Sing",
    Artist: "The Crane Wives",
    src: "./music/themoonwillsing-cranewives.mp3",
    cover:"./gifs/lovely-seal-seal-in-the-moon.gif",
  },
  {
    Title: "Yuusha",
    Artist: "Yoasobi",
    src: "./music/thebrave-yoasobi.mp3",
    cover:"./gifs/frieren-spin.gif",
  },
  {
    Title: "Otomodachi",
    Artist: "Phantom Siita",
    src: "./music/otomodachi-phantomsiita.mp3",
    cover:"./gifs/ghost-ghosted.gif",
  }
];

let songIndex = 0;

const Title = document.getElementById("Title");
const Artist = document.getElementById("Artist");
const cover = document.getElementById("cover");
const back = document.getElementById("back");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const progressbar = document.getElementById("progressbar");

const audio = new Audio();

function loadSong(song){
  Title.textContent = song.Title;
  Artist.textContent = song.Artist;
  cover.src = song.cover;
  audio.src = song.src;
}

//finally play song

loadSong(songs[songIndex]);

function playSong(){
  audio.play();
  pause.textContent = "⏸";
}

function pauseSong(){
  audio.pause();
  pause.textContent = "⏯";
}

let isCurrentlyPlaying = false;
pause.addEventListener ("click", () => {
  isCurrentlyPlaying ? pauseSong(): playSong();
  isCurrentlyPlaying = !isCurrentlyPlaying
});

next.addEventListener ("click", () => {
  songIndex++;
  if(songIndex > songs.length - 1) songIndex = 0;

  loadSong(songs [songIndex]);
  playSong();
  isCurrentlyPlaying = true;

});

back.addEventListener ("click", () => {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;

  loadSong(songs [songIndex]);
  playSong();
  isCurrentlyPlaying = true;
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime) / audio.duration * 100;
  progress.style.width = percent + "%";
});

progressbar.addEventListener("click", (e) => {
  const width = progressbar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime =  (clickX /  width) * duration;
});

audio.addEventListener ("ended", () => {
  next.click();
});

//volume bar

document.addEventListener("DOMContentLoaded", () =>{
  const range = document.querySelector (".volume input[type=range]");

const barHoverbox =
document.querySelector(".volume .bar-box");
const fills = document.querySelector(".volume .bar .bar-fill");

range.addEventListener("change", (e) =>{
  console.log("value", e.target.value)
});

const setValue = (value) =>{
  fills.style.width = value + "%";
  range.setAttribute("value", value);
  range.dispatchEvent(new Event("change"));
  audio.volume = value / 100;   
}

setValue(range.value);

const calculatefills = (e) => {
  let offsetX = e.offsetX

  if (e.type === "touchmove"){
    offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft
  }

  const width = e.target.offsetWidth - 30;

  setValue(
    Math.max(
      Math.min(
        (offsetX - 15) / width * 100.0,
        100.0 ),
        0
    ),
  );
}

let barStillDown = false;

barHoverbox.addEventListener ("touchstart", (e) => {
  e.stopPropagation();
  barStillDown = true;
  calculatefills(e);
}, true);

barHoverbox.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  barStillDown = true;
  calculatefills(e);
});

barHoverbox.addEventListener("mousemove", (e) =>{
  if(barStillDown){
    e.stopPropagation();
    calculatefills(e);
  }
});

barHoverbox.addEventListener("wheel", (e) =>{
  const newValue = +range.value + e.deltaY * 0.5;

  setValue(Math.max(
    Math.min(
      newValue,
      100.0),
  ))
});

document.addEventListener("touchend", (e) => {
  barStillDown = false;
}, true);
});

//fortune cookie

//move thingy
dragElement(document.getElementById("cookiethingy"));

//cookie
let fortunes = [
  "a",
  "b",
  "c",
];

document.getElementById("cookieopen").addEventListener("click", function(){
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("message").innerText = fortunes[randomIndex];

});