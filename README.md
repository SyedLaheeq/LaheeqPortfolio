# To-Do List Application

A simple yet powerful to-do list application built with vanilla HTML, CSS, and JavaScript. This app features local storage functionality to persist your tasks between sessions.

## Features

✨ **Core Features:**
- ➕ Add new tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Auto-save to browser's local storage
- 📊 Task counter showing remaining tasks
- 🧹 Clear all completed tasks at once

## How to Use

1. **Open the Application:**
   - Simply open `index.html` in your web browser

2. **Add a Task:**
   - Type your task in the input field
   - Press Enter or click the "Add Task" button

3. **Complete a Task:**
   - Click the checkbox next to a task to mark it as completed
   - Completed tasks will have a strikethrough

4. **Delete a Task:**
   - Click the "Delete" button on any task to remove it

5. **Filter Tasks:**
   - Click "All" to see all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only finished tasks

6. **Clear Completed:**
   - Click "Clear Completed" to remove all finished tasks at once

## Technical Details

### Local Storage
- All tasks are automatically saved to your browser's local storage
- Your tasks will persist even after closing the browser
- Storage key: `todoList`

### Class Structure
- **TodoApp Class:** Main application controller
  - `addTodo()` - Add new task
  - `deleteTodo()` - Remove task
  - `toggleTodo()` - Mark as completed/incomplete
  - `clearCompletedTodos()` - Remove all completed tasks
  - `getFilteredTodos()` - Get tasks based on current filter
  - `saveTodos()` - Save to local storage
  - `loadTodos()` - Load from local storage
  - `render()` - Update UI

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Local Storage API** - Data persistence

## Browser Support
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge (all versions)
- Internet Explorer 8+ (limited CSS3 support)

## Features Breakdown

### Data Validation
- Empty tasks are rejected
- Task length is limited to 100 characters
- Confirmation dialog before clearing completed tasks

### User Experience
- Smooth animations and transitions
- Responsive design for mobile devices
- Keyboard support (Enter to add task)
- Visual feedback for all interactions
- Empty state messages

### Security
- HTML escaping to prevent XSS attacks
- Input validation and sanitization

## Future Enhancements
- Task priority levels
- Due dates and reminders
- Task categories/tags
- Local storage sync with cloud
- Dark mode toggle
- Export/Import functionality
- Multiple to-do lists

## License
MIT License - Feel free to use this project for personal or commercial purposes.

## Author
SyedLaheeq

Enjoy organizing your tasks! 🚀
