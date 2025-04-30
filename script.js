document.addEventListener('DOMContentLoaded', function() {
    // Immediately set skill levels for better printing
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
    
    // Immediately set match levels for better printing
    const matchBars = document.querySelectorAll('.match-level');
    matchBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
    
    // Make sure all experience items are visible for better printing
    const timelineItems = document.querySelectorAll('.experience-item');
    timelineItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.innerHTML = '🖨️';
    printButton.setAttribute('title', 'Print Resume');
    document.body.appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    // Add current year to footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add tooltips for platform icons
    const platformItems = document.querySelectorAll('.platform-item');
    platformItems.forEach(item => {
        item.setAttribute('title', item.querySelector('.platform-name').textContent);
    });
});