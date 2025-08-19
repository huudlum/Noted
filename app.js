let noteEntry = document.getElementById("noteEntry")
let addNoteBtn = document.getElementById("addNoteBtn")
let notes = [];
let body = document.getElementById("noteBody")
let title = document.getElementById("noteTitle")
let saveMgs = document.getElementById('save')

function showNote(){
    noteEntry.classList.add("show-noteEntry");
    addNoteBtn.classList.add("hide-btn");
}

// function to save notes. Does not work after page refresh but builds the array correctly
function saveNote(){
    const newNote = {
        title: title.value,
        body: body.value,
        time: new Date().toLocaleString()
    }

    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    clearInput();

    saveMgs.classList.add("show-save");

    console.log(notes);
}

///clears the inputs once save is clicked
function clearInput(){
    title.value = "";
    body.value = "";
}

// Need to keep details between sessions
// Need function to show all notes in array
// Need delete function to remove note