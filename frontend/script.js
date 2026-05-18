const SUBSCRIBE_API = "your api";

const EVENT_API = "your api";


// CREATE EVENT

async function submitEvent() {

    const data = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value
    };

    console.log("Sending Event Data:", data);

    try {

        const response = await fetch(`${EVENT_API}/new-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log("Event Response:", result);

        alert(result.message || result.error);

    } catch (error) {

        console.error("Create Event Error:", error);

        alert("Create Event Failed");
    }
}


// SUBSCRIBE

async function subscribe() {

    const data = {
        email: document.getElementById("email").value
    };

    console.log("Sending Subscription Data:", data);

    try {

        const response = await fetch(`${SUBSCRIBE_API}/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        console.log("Subscribe Response:", result);

        alert(result.message || result.error);

    } catch (error) {

        console.error("Subscription Error:", error);

        alert("Subscription Failed");
    }
}
