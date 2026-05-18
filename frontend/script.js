const SUBSCRIBE_API = "YOUR API";

const EVENT_API = "YOUR API";


async function createEvent() {

    const data = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value
    };

    try {

        const response = await fetch(`${EVENT_API}/new-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message || result.error);

    } catch (error) {

        console.error(error);

        alert("Create Event Failed");
    }
}


async function subscribe() {

    const data = {
        email: document.getElementById("email").value
    };

    try {

        const response = await fetch(`${SUBSCRIBE_API}/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message || result.error);

    } catch (error) {

        console.error(error);

        alert("Subscription Failed");
    }
}
