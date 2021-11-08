arr = ["'There's a rule, I think. You get what you want in life, but not your second choice too'. - Alison Lurie", "'What you seek is seeking you'. - Rumi", "'Anyone who lives within their means suffers from a lack of imagination.' - Oscar Wilde", "'In order to 'have' you must 'do', and in order to 'do', you must 'be'.' - Terry Crews", "'Failure is the opportunity to begin again more intelligently.' - Henry Ford", "'The beginning is the most important part of the work.' - Plato", "'We are what we repeatedly do. Exellence, then, is not an act, but a habit.' - Aristotle", "'Set thy heart upon thy work, but never on its reward.' - Vyasa", "'Your conversations help create your world. Speak of delight, not dissatisfaction. Speak of hope, not despair. Let your words bind up wounds, not cause them.' - Lao Tzu", "'To understand the limitation of things, desire them.' - Lao Tzu", "'We shape clay into a pot, but it is the emptiness inside that holds whatever we want.' - Lao Tzu"];

rand = Math.floor(Math.random() * arr.length);

const body = document.querySelector('body');
const strong = document.createElement('h3');
strong.textContent = arr[rand];
body.appendChild(strong);

console.log(arr[rand]);
