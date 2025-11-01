const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const currentDate = document.getElementById('current-date');

const quotes = [
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { content: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { content: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { content: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { content: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { content: "Your limitation—it's only your imagination.", author: "Unknown" },
  { content: "Great things never come from comfort zones.", author: "Unknown" },
  { content: "Dream it. Wish it. Do it.", author: "Unknown" },
  { content: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
  { content: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { content: "Dream bigger. Do bigger.", author: "Unknown" },
  { content: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
  { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { content: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { content: "Little things make big days.", author: "Unknown" },
  { content: "It's going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { content: "Don't wait for opportunity. Create it.", author: "Unknown" },
  { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { content: "Act as if what you do makes a difference. It does.", author: "William James" },
  { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" }
];

function displayCurrentDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.textContent = today.toLocaleDateString('en-US', options);
}

function fetchQuote() {
  newQuoteBtn.disabled = true;
  newQuoteBtn.textContent = 'Loading...';

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  setTimeout(() => {
    quoteText.textContent = randomQuote.content;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
    
    newQuoteBtn.disabled = false;
    newQuoteBtn.textContent = 'New Quote';
  }, 300);
}

newQuoteBtn.addEventListener('click', fetchQuote);

window.addEventListener('load', () => {
  displayCurrentDate();
  fetchQuote();
});
