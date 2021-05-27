const createButton = document.querySelector("#submit-btn");
const postTitle = document.querySelector('input[name="post-title"]');
const postText = document.querySelector('textarea[name="post_text"]');

createButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const post_title = postTitle.value.trim();
    const post_text = postText.value.trim();
    try {
        const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
catch(error) {
    console.log(error);
}
});









