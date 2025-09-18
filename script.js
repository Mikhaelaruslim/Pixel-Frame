

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
const neutralColors = ["#ebebebff", "#ffffffff", "#ababadff", "#818195ff", "#5f5f5fff"];

toggle.addEventListener('click', () => {
  const randomColor = neutralColors[Math.floor(Math.random() * neutralColors.length)];
  document.body.style.backgroundColor = randomColor;
});
    