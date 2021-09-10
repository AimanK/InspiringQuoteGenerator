arr = ["'There's a rule, I think. You get what you want in life, but not your second choice too'. - Alison Lurie", "'What you seek is seeking you'. - Rumi", "'Anyone who lives within their means suffers from a lack of imagination.' - Oscar Wilde", "'In order to 'have' you must 'do', and in order to 'do', you must 'be'.' - Terry Crews"];

rand = Math.floor(Math.random() * arr.length);

const body = document.querySelector('body');
const strong = document.createElement('h3');
strong.textContent = arr[rand];
body.appendChild(strong);

console.log(arr[rand]);