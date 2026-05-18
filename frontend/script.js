const API_BASE = "https://zbfgckfgj8.execute-api.us-east-1.amazonaws.com/prod";

async function createEvent() {

    const data = {
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value
    };

    const response = await fetch(`${API_BASE}/new-event`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Event Created!");
}

async function subscribe() {

    const data = {
        email: document.getElementById("email").value
    };

    const response = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Subscribed Successfully!");
}