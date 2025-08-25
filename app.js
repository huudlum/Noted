let noteEntry = document.getElementById("noteEntry")
let addNoteBtn = document.getElementById("addNoteBtn")
let notes = [];
let body = document.getElementById("noteBody")
let title = document.getElementById("noteTitle")
let saveMgs = document.getElementById('save')
let noteMgs = document.getElementById('noNote')
let noteDisplay = document.getElementById('noteDisplay')

function showNote(){
    noteEntry.classList.add("show-noteEntry");
    addNoteBtn.classList.add("hide-btn");
}

// function to save notes. Does not work after page refresh but builds the array correctly
function saveNote(){
    if( title.value === "" || body.value ===""){
        document.getElementById("noteBody").placeholder = "You haven't entered anything";
        saveMgs.classList.remove('show-save');
    }
    else{
        const newNote = {
            title: title.value,
            body: body.value,
            time: new Date().toLocaleString()
        }

        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));

        clearInput();

        saveMgs.classList.add("show-save");
        noteMgs.classList.remove('show');
    }

    console.log(notes);
}

///clears the inputs once save is clicked
function clearInput(){
    title.value = "";
    body.value = "";
}

function displayNotes(){
    noteDisplay.innerHTML = "";

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    if (storedNotes.length === 0){
        noteDisplay.innerHTML = "<p>No Notes Here</p>";
        alert('No Notes Here');
    }

    storedNotes.forEach(note => {
        const noteCard = document.createElement("div");
        let deleteSpan = document.createElement("span");
        let separate = document.createElement("hr");

        deleteSpan.innerHTML = "\u00d7";
        deleteSpan.classList.add("deleteSpan");
        noteCard.classList.add("note-card");
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <small>${note.time}</small>
            `;
        noteDisplay.appendChild(noteCard);
        noteCard.appendChild(deleteSpan);
        noteCard.appendChild(separate);
    });
}