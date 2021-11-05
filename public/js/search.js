async function searchFormHandler(event) {
    event.preventDefault();

    const breed = document.getElementById('breed-selection');

    document.location.replace(`/results/${breed.value}`);
};

document.querySelector('.search-button').addEventListener('click', searchFormHandler);