// For demonstration purpose, let's populate some dummy data

// Dummy posts data
const posts = [
    { id: 1, title: "Post 1", content: "This is the content of Post 1." },
    { id: 2, title: "Post 2", content: "This is the content of Post 2." },
    { id: 3, title: "Post 3", content: "This is the content of Post 3." }
  ];
  
  // Dummy users data
  const users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    { id: 3, name: "User 3", email: "user3@example.com" }
  ];
  
  // Function to display posts
  function displayPosts() {
    const postList = document.getElementById("postList");
    postList.innerHTML = ""; // Clear previous list
  
    posts.forEach(post => {
      const listItem = document.createElement("li");
      listItem.textContent = `${post.title}: ${post.content}`;
      postList.appendChild(listItem);
    });
  }
  
  // Function to display users
  function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear previous list
  
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
    });
  }
  
  // Function to display settings form
  function displaySettingsForm() {
    const settingsForm = document.getElementById("settingsForm");
    settingsForm.innerHTML = ""; // Clear previous form
  
    // Here, you can dynamically generate form fields as per your requirement
    // For demonstration, I'm adding a single text input
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter setting";
    settingsForm.appendChild(inputField);
  }
  
  // Display initial data
  displayPosts();
  displayUsers();
  displaySettingsForm();
  