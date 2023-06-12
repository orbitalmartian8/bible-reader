function loadBook(bookName) {
  fetch('bible.json')
    .then(response => response.json())
    .then(data => {
      const bookContent = data[bookName];
      if (bookContent) {
        const chapterContent = Object.values(bookContent).join('<br><br>');
        document.getElementById('chapter-content').innerHTML = chapterContent;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
