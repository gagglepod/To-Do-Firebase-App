// Add a new doc to Firestore To-Do collection
function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");
  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });

  text.value = "";
}

// List all docs in Firestore To-Do collection
function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    // console.log(snapshot);
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

// Control functionality between active and completed items
function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    itemsHTML += `
      <div class="todo-item">
      <div class="check">
        <div data-id="${item.id}" class="check-mark ${
      item.status == "completed" ? "checked" : ""
    }">
          <img src="./img/icon-check.svg" alt="Completed To Do" />
        </div>
      </div>
      <div class="todo-text ${item.status == "completed" ? "checked" : ""}">
      ${item.text}
      </div>
      </div>
    `;
  });
  document.querySelector(".todo-items").innerHTML = itemsHTML;
  createEventListeners();
}

// Listen for Click to change Check-Mark
function createEventListeners() {
  let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
  todoCheckMarks.forEach((checkMark) => {
    checkMark.addEventListener("click", function () {
      markCompleted(checkMark.dataset.id);
    });
  });
  // console.log(todoCheckMarks);
}

// Update Status of a doc in Firebase To-Do collection
function markCompleted(id) {
  // grab item in database
  let item = db.collection("todo-items").doc(id);
  // udpate the item in the database
  item.get().then(function (doc) {
    if (doc.exists) {
      // console.log("Here is the doc", doc.data());
      let status = doc.data().status;
      if (status == "active") {
        item.update({
          status: "completed",
        });
      } else if (status == "completed") {
        item.update({
          status: "active",
        });
      }
    }
  });
}

getItems();

// Count all docs in Firestore To-Do collection
function countItems() {
  let count = 0;

  db.collection("todo-items").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      count++;
    });
    // console.log(count);
    showCount(count);
    count = 0;
  });
}

function showCount(count) {
  // console.log(count);
  let countHTML = "";
  countHTML += `
    <div class="items-left">
      <span class="item-count">${count} items left</span>
    </div>
    `;
  document.querySelector(".items-left").innerHTML = countHTML;
}

countItems();

// Remove completed items from Firebase
function deleteTodoByStatus() {
  let deleteCompleted = db
    .collection("todo-items")
    .where("status", "==", "completed")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());

        db.collection("todo-items").doc(doc.id).delete();
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
