function loadBook(bookName) {
  let chapterContent;

  switch (bookName) {
    case 'Genesis':
      // Load chapter 1 content from the JSON file
      fetch('books.json')
        .then(response => response.json())
        .then(data => {
          const chapter = data.chapter;
          const verses = data.verses;

          chapterContent = `<h3>${chapter}</h3>`;

          for (let i = 0; i < verses.length; i++) {
            chapterContent += `<p>${verses[i]}</p>`;
          }

          document.getElementById('chapter-content').innerHTML = chapterContent;
        });
      break;
    // Add cases for other books of the Bible
  }
}
