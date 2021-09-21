function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");

  // console.log(text.value);

  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });

  text.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateItems(items);
  });
}

function generateItems(items) {
  items.forEach((item) => {});
}

getItems();
