
window.onload = function() {
    const greetingMessage = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      greetingMessage.innerText = "Good Morning!";
    } else if (currentHour < 18) {
      greetingMessage.innerText = "Good Afternoon!";
    } else {
      greetingMessage.innerText = "Good Evening!";
    }
  };
  

  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  