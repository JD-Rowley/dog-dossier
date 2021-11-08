async function newPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[id="post-title"]').value;
    const post_body = document.querySelector('textarea[id="description"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace(`/results/${id}`);
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.new-post').addEventListener('submit', newPostFormHandler);