const titleBox = document.getElementById("titleBox")
var save = document.getElementById("save")
var notes =[]

function newNote(){
    if (titleBox.input.trim() === ''){
        alert("Please enter your note title");
    }
    else {
        let noteBody =document.createElement('noteBody');
        saveData();
    }

function  showNotes(){
        return;
}

function saveData(){
        localStorage.setItem("data", noteBody.innerHTML);
    }
}
