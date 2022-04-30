import  '../scss/style.scss';

const postsContainer = document.getElementById('posts-container'),
      loading        = document.querySelector('.loader'),
      filter         = document.getElementById('filter');

let limit = 3,
    page  = 1;

// Fetch posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

// Show posts in DOM
async function showPosts() {
  const posts = getPosts();

  console.log(posts);
}

// Show intiail posts
showPosts();