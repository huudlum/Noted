const notesArea = document.getElementById('notesArea');
if (notesArea) {
    const clearBtn = document.getElementById('clearBtn');
    const charCount = document.getElementById('charCount');
    const saveIndicator = document.getElementById('saveIndicator');
    const STORAGE_KEY = 'noted';

    function loadNotes() {
        const savedNotes = localStorage.getItem(STORAGE_KEY);
        if (savedNotes) {
            notesArea.value = savedNotes;
            updateCharCount();
        }
    }

    function saveNotes() {
        localStorage.setItem(STORAGE_KEY, notesArea.value);
        showSaveIndicator();
    }

    function showSaveIndicator() {
        saveIndicator.classList.add('show');
        setTimeout(() => {
            saveIndicator.classList.remove('show');
        }, 1500);
    }

    function updateCharCount() {
        const count = notesArea.value.length;
        charCount.textContent = `${count} character${count !== 1 ? 's' : ''}`;
    }

    function clearNotes() {
        if (notesArea.value.trim() === '') {
            return;
        }

        if (confirm('Are you sure you want to clear all notes?')) {
            notesArea.value = '';
            localStorage.removeItem(STORAGE_KEY);
            updateCharCount();
        }
    }

    let saveTimeout;
    notesArea.addEventListener('input', () => {
        updateCharCount();
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveNotes, 500);
    });

    clearBtn.addEventListener('click', clearNotes);
    loadNotes();
}