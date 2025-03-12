document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        events: [
            { title: 'Example Task 🐾', start: new Date().toISOString().split('T')[0] }
        ],
        dateClick: function(info) {
            let task = prompt("Enter a task for " + info.dateStr);
            if (task) {
                calendar.addEvent({ title: task, start: info.dateStr });
            }
        }
    });
    calendar.render();
});