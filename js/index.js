// background color change according to cursor position

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  let root = document.documentElement;
  let greeting = document.querySelector('[data-greeting]');
  
  const timePeriods = {
    morning: {
      weight: 200,
      text: 'Good morning',
      color: '#0000FF',
      bgColor: '#FFFFFF'
    },
    afternoon: {
      weight: 500,
      text: 'Good afternoon',
      color: '#FFFFFF',
      bgColor: '#042f6f'
    },
    evening: {
      weight: 800,
      text: 'Good evening',
      color: '#A75AB4',
      bgColor: '#150C3A'
    }
  };

  const updateMousePosition = function(event) {

    // Check if mouse or touch event
    let pointX = event.touches ? event.touches[0].clientX : event.pageX;
    let pointY = event.touches ? event.touches[0].clientY : event.pageY;

    let height = document.body.clientHeight;
    let width = document.body.clientWidth;
    
    let percentX =  Math.round(pointX / width * 100);
    let percentY =  Math.round(pointY / height * 100);
            
    root.style.setProperty('--mouse-x', percentX);
    root.style.setProperty('--mouse-y', percentY);

  };
  
  const getTimePeriod = function() {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 6 && hours < 12) {
      return 'morning';
    } else if (hours >= 12 && hours < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };
  
  const updatePagePeriod = function() {
    const period = timePeriods[getTimePeriod()]
    greeting.textContent = period.text;
    root.style.setProperty('--font-wight', period.weight);
    root.style.setProperty('--font-color', period.color);
    root.style.setProperty('--bg-color', period.bgColor);
  };

  document.onmousemove = updateMousePosition;
  window.addEventListener('touchmove', updateMousePosition);
  updatePagePeriod();

});