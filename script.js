// HAMBURGER MENÜ
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// SU KABARCIKLARI OLUŞTURMA
const bubblesContainer = document.querySelector('.bubbles');
for(let i=0;i<15;i++){
  const bubble = document.createElement('div');
  const size = Math.random()*60 + 30;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random()*100}%`;
  bubble.style.animationDuration = `${Math.random()*5 + 7}s`;
  bubble.style.animationDelay = `${Math.random()*5}s`;
  bubblesContainer.appendChild(bubble);
}
