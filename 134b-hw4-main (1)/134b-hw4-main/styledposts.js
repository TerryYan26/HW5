// Retrieve items from local storage
let items = JSON.parse(localStorage.getItem("posts")) || [];

// Function to open the post dialog
function openDialog() {
  document.querySelector("#post-dialog").showModal();
}

// Function to close the post dialog
function closeDialog() {
  document.querySelector("#post-dialog").close();
}

// Function to add a post to the items array
function addPost() {
  // Retrieve the post fields' values
  let postTitle = document.querySelector("#post-title").value;
  let postDate = document.querySelector("#post-date").value;
  let postTime = document.querySelector("#post-time").value;
  let postSummary = document.querySelector("#post-summary").value;

  // If any of the post fields are empty, alert the user and return
  if (postTitle === "" || postDate === "" || postTime === "" || postSummary === "") {
    return alert("Please enter all fields");
  }

  // Create a new post object and push it to the items array
  let newPost = {
    title: postTitle,
    date: postDate,
    time: postTime,
    summary: postSummary,
    done: false
  };
  items.push(newPost);

  // Save the updated items array to local storage
  localStorage.setItem("posts", JSON.stringify(items));

  // Call the function to list all items
  listItems();

  // Close the post dialog
  closeDialog();
}

// Function to edit a post in the items array
function editPost(index) {
  // Get the post to be edited from the items array
  let post = items[index];

  // Set the values of the post fields in the dialog
  document.querySelector("#post-title").value = post.title;
  document.querySelector("#post-date").value = post.date;
  document.querySelector("#post-time").value = post.time;
  document.querySelector("#post-summary").value = post.summary;

  // Show the post dialog
  openDialog();

  // Remove the old post from the items array
  items.splice(index, 1);
  
  if (document.querySelector("#add-post-btn").style.display === "none") {
    return;
  }
  // Save the updated items array to local storage
  localStorage.setItem("posts", JSON.stringify(items));

  // Call the function to list all items
  listItems();
}

// Function to delete an item from the items array
function deleteItem(index) {
  items.splice(index, 1);

  // Save the updated items array to local storage
  localStorage.setItem("posts", JSON.stringify(items));

  // Call the function to list all items
  listItems();
}



// Function that generates a list of items and populates the HTML
function listItems() {
    items.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      let list = "";

      document.addEventListener('DOMContentLoaded', function() {
        document.querySelector("#list-items").innerHTML = list;
      });

  document.addEventListener("DOMContentLoaded", function() {
    listItems();
  });
  
  // Loop through all items in the items array
  for (let i = 0; i < items.length; i++) {
    // Create a list item with the post's title, date, summary, and edit/delete labels
    list += `<li class="${items[i].done ? 'done' : ''}">
              <strong>${items[i].title}</strong><br>
              <small>${items[i].date} ${items[i].time}</small><br>
              ${items[i].summary}<br>
              <span class="label success" onclick="editPost(${i})"><i class="fas fa-pencil-alt"></i"></span>
              <span class="label alert" onclick="deleteItem(${i})"><i class="fas fa-trash-alt"></i></span>
              </li>`;
              }
              
              document.addEventListener("DOMContentLoaded", function() {
                listItems();
              });
              document.querySelector("#list-items").innerHTML = list;
            }
              
              // Function to run when the page loads
              (function() {
                items = JSON.parse(localStorage.getItem("posts")) || [];
              // Call the function to list all items
              listItems();
              })();
              
  
