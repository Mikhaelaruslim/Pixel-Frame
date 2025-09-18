

const brand = document.getElementById('brand');
const originalText = brand.textContent;

brand.addEventListener('mouseover', () => {
  brand.textContent = "📷Camera";
});
brand.addEventListener('mouseout', () => {
  brand.textContent = originalText;
});


const btn = document.getElementById('appreciateBtn');
const countEl = document.getElementById('count');
let count = 0;

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});


const toggle = document.getElementById('lightToggle');
const neutralColors = ["#e9d2c4ff", "#d5d7eeff", "#e1bdc7ff", "#f7fcf5ff", "#eeeeeeff"];

toggle.addEventListener('click', () => {
  const randomColor = neutralColors[Math.floor(Math.random() * neutralColors.length)];
  document.body.style.backgroundColor = randomColor;
});
    