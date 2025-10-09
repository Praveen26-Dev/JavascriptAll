const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  if ((i + 1) % 2 === 0) {
    listItems[i].style.backgroundColor = '#206c51ff';
    listItems[i].style.color = '#b1d1d6ff';
    listItems[i].style.fontWeight = 'bold';
    listItems[i].style.padding = '10px';
    
  }
}
