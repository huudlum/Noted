# 📝 Noted!

Noted! is a minimalist, browser-based note-taking app built entirely with front-end technologies. It's designed to demonstrate clean, responsive UI design and practical use of the DOM and local storage—no frameworks, no dependencies, just HTML, CSS, and JavaScript.

## 🧱 Project Overview

Noted! provides users with a simple, elegant way to capture thoughts, ideas, and reminders directly in the browser. It automatically saves your notes locally, so your content persists even after refreshing or closing the page.

## 💡 Key Features

* ✍️ **Clean writing experience** with a spacious textarea for all your notes
* 💾 **Auto-save functionality** via browser local storage — no server required
* 📊 **Character counter** that updates in real-time as you type
* ✅ **Save indicator** provides visual feedback when notes are saved
* 🗑️ **Clear all button** with confirmation prompt to prevent accidental deletion
* 📱 **Responsive design** that adapts beautifully to mobile and desktop screens
* 🎨 **Custom theming** using CSS variables for easy style adjustments

## 🧰 Technologies Used

### ✅ HTML5
* Structured a clean, semantic single-page layout
* Included accessible textarea and button elements
* Added footer links for creator attribution and hosting details

### ✅ CSS3
* Built a modern, visually appealing interface using Flexbox
* Used custom CSS variables for color themes (`--highlight-color`, `--container-color`)
* Designed a responsive layout that scales on small screens (90% width under 450px)
* Created a vibrant gradient background (`linear-gradient(to left, #bc3800, #dd8100)`)

### ✅ JavaScript (Vanilla JS)
* Implemented DOM manipulation to load and save notes dynamically
* Added input event listeners with debounced auto-save (500ms delay)
* Stored and retrieved notes using `localStorage` for persistent state
* Built real-time character counting functionality
* Added smooth fade-in/fade-out animations for the save indicator
* Built entirely without external libraries or frameworks to showcase core JS logic

## ⚙️ How It Works

1. **Type your notes** in the textarea — start writing immediately
2. **Auto-save triggers** after you stop typing for 500ms
3. **Character count updates** in real-time below the textarea
4. **Save indicator appears** briefly to confirm your notes are saved
5. **Click "Clear All"** to delete all notes (with confirmation prompt)
6. **Notes persist** across browser sessions using local storage

## 🖼️ UI Highlights

* Rounded containers with bright orange accent colors for a warm, inviting look
* Smooth layout and spacing built using Flexbox
* Fixed footer with credits and project links
* Clean typography using the Poppins font family
* Subtle save indicator with fade transitions for unobtrusive feedback

<img width="1144" height="646" alt="Screenshot 2025-11-13 at 12 23 43" src="https://github.com/user-attachments/assets/975b1d1d-73db-41b1-8577-eec8a08a411a" />
