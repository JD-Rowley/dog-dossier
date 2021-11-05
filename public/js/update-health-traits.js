async function healthFormHandler(event) {
    event.preventDefault();

    const health_name = document.querySelector('input[id="health"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split().length -1
    ];

    console.log(health_name);

    const response = await fetch(`/api/health/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            health_name
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    // whatever we want the data to do
    // update the respective table?

    if (response.ok) {
        document.location.replace(`/results/${id}`);
    } else {
        alert(response.statusText);
    }
};

async function traitsFormHandler(event) {
    event.preventDefault();

    const traits_name = document.querySelector('input[id="traits"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split().length -1
    ];

    console.log(traits_name);

    const response = await fetch(`/api/traits/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            traits_name
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    // whatever we want the data to do
    // update the respective table?

    if (response.ok) {
        document.location.replace(`/results/${id}`);
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.update-health').addEventListener('submit', healthFormHandler);
document.querySelector('.update-traits').addEventListener('submit', traitsFormHandler);