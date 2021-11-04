async function searchFormHandler(event) {
    event.preventDefault();

    const id = document.querySelector('.option').value;

    document.location.replace(`/results/${id}`);

    // const response = await fetch(`api/breeds/${id}`, {
    //     method: 'GET',
    //     body: JSON.stringify({
            
    //     }),
    //     headers: { 'Content-Type': 'application/json' }
    // });
    // if (response.ok) {
    //     document.location.replace(`results/${id}`);
    // } else {
    //     alert(response.statusText);
    // }
};

document.querySelector('.search-button').addEventListener('click', searchFormHandler);