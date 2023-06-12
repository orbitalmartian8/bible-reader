function loadBook(bookName) {
  let chapterContent;

  switch (bookName) {
    case 'Genesis':
      chapterContent = `
        <h3>Chapter 1</h3>
        <p>In the beginning, God created the heavens and the earth...</p>
        
        <h3>Chapter 2</h3>
        <p>Thus the heavens and the earth were finished...</p>
        
        <!-- Add more chapters here -->
      `;
      break;

    case 'Exodus':
      chapterContent = `
        <h3>Chapter 1</h3>
        <p>These are the names of the sons of Israel who came...</p>
        
        <h3>Chapter 2</h3>
        <p>Now a man from the house of Levi went and took as his wife...</p>
        
        <!-- Add more chapters here -->
      `;
      break;

    // Add more book cases here

    default:
      chapterContent = '<p>Book content not available.</p>';
  }

  document.getElementById('chapter-content').innerHTML = chapterContent;
}
