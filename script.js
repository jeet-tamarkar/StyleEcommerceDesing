let menu = document.querySelector('.menu');

let item = document.querySelector('.item');

menu.addEventListener('click', () => {
   if (item.style.display === 'none' || item.style.display === '') {
      item.style.display = 'block';
   } else {
      item.style.display = 'none';
   }
});