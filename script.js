document.addEventListener('DOMContentLoaded', function() {
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.className = 'print-button';
    printButton.innerHTML = '🖨️';
    printButton.setAttribute('title', 'Print Resume');
    document.body.appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.experience-item');
    
    // Simple animation for timeline items
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Add animation to skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Animate skill bars on load
    setTimeout(() => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }, 500);
    
    // Add animation to match bars
    const matchBars = document.querySelectorAll('.match-level');
    
    // Animate match bars on load
    setTimeout(() => {
        matchBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }, 800);
    
    // Add current year to footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add profile picture upload functionality if needed
    const profilePlaceholder = document.querySelector('.profile-img-placeholder');
    const profileImg = document.querySelector('.profile-img');
    
    if (profilePlaceholder && !profileImg) {
        profilePlaceholder.addEventListener('click', function() {
            alert('To add your profile picture:\n1. Replace the placeholder div with an <img> tag\n2. Set the src attribute to your image path\n3. Add the class "profile-img"');
        });
    }
    
    // Add tooltips for platform icons
    const platformItems = document.querySelectorAll('.platform-item');
    
    platformItems.forEach(item => {
        item.setAttribute('title', item.querySelector('.platform-name').textContent);
    });
});