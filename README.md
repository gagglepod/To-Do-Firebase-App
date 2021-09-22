# To-Do Firebase App

**Created a TO DO LIST App with Jamstack and Firebase**

## Source

[Clever Programmer - YouTube Video - Streamed live on Aug 21, 2021](https://youtu.be/KA_8eOIsjn4)

## Requirements

- [Firebase Account](firebase.google.com)
- [Netlify Account](netlify.com)
- [Firebase App JS - ver 8.10.0](https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js)
- [Firebase Firestore JS - ver 8.10.0](https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js)
- Understanding of HTML/CSS
- Understanding of Vanilla JS (ES6)
- JPG Background Image
- SVG Icon images
- VSCode Extension - Firebase Explorer

**NOTE: The lastest version of Firebasejs (ver 9.0.2) has changed too much to work with this tutorial. Instead, I used the version shown in the tutorial (ver 8.10.0) to make this work. I was successful but would like to refactor this app to ver 9.\* sometime in the near future.**

## Lessons Learned

1. **Firebase Firestore connection process** is heavily dependent on the version. Version 8._ still depends on SCRIPT tags while Version 9._ starts to focus on MODULES and FUNCTIONS. The [Google Firebase Web documentation](https://firebase.google.com/docs/web/setup) makes this distinction difficult to understand. However, if you know there is a difference, it makes configuation easier to implement.

2. **Firebase Firestore count function** is not a simple matter. Because the NOSQL database (similar to MongoDB) requires an asyncronous connection, a simple count() function does not work. There are several references to setting up a Firebase Trigger and/or a Count Collection to solve this problem but this looks very involved.

3. **Firebase Firestore vs MongoDB Atlas** is not difficult to judge. MongoDB Atlas is far easier to setup and use. Firebase itself has more than just the Firestore NOSQL database, however when it comes to only comparing database configuration, MongoDB Atlas is the clear winner (i.e. It does one thing well). I see the advantages that Firebase has by being a developers _Swiss Army Knife_ but it needs better tutorials and documentation to support adoption.
