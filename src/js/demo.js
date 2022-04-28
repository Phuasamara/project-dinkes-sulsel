var events = [
  {'Date': new Date(2022, 5, 2), 'Title': 'My birthday'},
  {'Date': new Date(2022, 3, 20), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2022, 4, 1), 'Title': 'Eid Mubarak', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
  {'Date': new Date(2022, 3, 28), 'Title': 'Hai', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
