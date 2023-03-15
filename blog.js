// items array that contains all todo items
// JSON.parse is used to parse the stringified items from localStorage
// if localStorage is empty, make the items variable an empty array
let items = JSON.parse(localStorage.getItem("todo-list")) || [];

// function to open the post dialog
function openDialog() {
  document.querySelector("#post-dialog").showModal();
}

// function to close the post dialog
function closeDialog() {
  document.querySelector("#post-dialog").close();
}

// function to add post to the items array
function addPost() {
  // get the values of the post fields
  let postTitle = document.querySelector("#post-title").value;
  let postDate = document.querySelector("#post-date").value;
  let postSummary = document.querySelector("#post-summary").value;

  // If any of the post fields are empty, return and alert the user
  // You can also do some more validation if here if you want
  if (postTitle === "" || postDate === "" || postSummary === "") {
    return alert("Please enter all fields");
  }

  // If all fields are valid, add post to items array
  items.push({
    title: postTitle,
    date: postDate,
    summary: postSummary,
  });

  // then convert to a string with JSON.stringify and save to localStorage
  localStorage.setItem("todo-list", JSON.stringify(items));

  // call function to list all items
  listItems();

  // close the post dialog
  closeDialog();
}

// function to edit post in the items array
function editPost(index) {
  // get the post to be edited from the items array
  let post = items[index];

  // set the values of the post fields in the dialog
  document.querySelector("#post-title").value = post.title;
  document.querySelector("#post-date").value = post.date;
  document.querySelector("#post-summary").value = post.summary;

  // show the post dialog
  openDialog();

  // remove the old post from the items array
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

// function to remove item from array with Array.splice()
// removes item, then saves new items array to localStorage
function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

// function that generates list of items and populates the html
function listItems() {
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + ">";
    list += "<strong>" + items[i].title + "</strong><br>";
    list += "<small>" + items[i].date + "</small><br>";
    list += items[i].summary + "<br>";
    list +=
      "<span class='label success' onclick='editPost(" +
      i +
      ")'>edit</span> ";
    list +=
      "<span class='label alert' onclick='deleteItem(" +
      i +
      ")'>delete</span></li>";
  }
  document.querySelector("#list-items").innerHTML = list;
}

// function to run when page loads
(function () {
  listItems();
})();
