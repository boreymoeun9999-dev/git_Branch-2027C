document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.menu a');
  const cards = document.querySelectorAll('.story-card');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.01)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
