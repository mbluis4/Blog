let postsArray = [];
const titleInput = document.getElementById("title")
const bodyInput = document.getElementById("body")
const form = document.querySelector("form")

let renderPosts = (array = postsArray) => {
  let posted = "";
  for (const post of array) {
    posted += `<h3>${post.title}</h3>
              <p>${post.body}</p>`;
  }
  document.getElementById("posts-container").innerHTML = posted;
  return posted;
};

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let titlePost = titleInput.value;
  let bodyPost = bodyInput.value;
  const newPost = {
    title: titlePost,
    body: bodyPost,
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
     postsArray.unshift(data)
     renderPosts()
    });
    form.reset()

});

// reset button

document.getElementById('reset').addEventListener('click', ()=> {

})