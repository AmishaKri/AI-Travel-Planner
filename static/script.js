let currentTravelPlan = "";

document.getElementById('travelForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading spinner
    document.getElementById('loadingSpinner').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    // Get form values
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const travelers = parseInt(document.getElementById('travelers').value);
    const interests = document.getElementById('interests').value.split(',').map(interest => interest.trim());
    const includeFlights = document.getElementById('includeFlights').checked;

    try {
        const response = await fetch('http://localhost:8000/generate-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                source,
                destination,
                start_date: startDate,
                end_date: endDate,
                budget,
                travelers,
                interests,
                include_flights: includeFlights
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Display the result
            document.getElementById('planContent').innerHTML = marked.parse(data.plan);
            document.getElementById('chatMessages').innerHTML = ''; // Clear previous chat messages
            currentTravelPlan = data.plan;  // Store the travel plan
            // Show chat box
            document.getElementById('chatBox').classList.remove('hidden');
            
            // Handle flight details
            const flightDetailsDiv = document.getElementById('flightDetails');
            if (data.flight_details) {
                document.getElementById('flightContent').innerHTML = marked.parse(data.flight_details);
                flightDetailsDiv.classList.remove('hidden');
            } else {
                flightDetailsDiv.classList.add('hidden');
            }
            document.getElementById('result').classList.remove('hidden');
        } else {
            alert('Error: ' + data.detail);
        }
    } catch (error) {
        alert('Error connecting to the server: ' + error.message);
    } finally {
        // Hide loading spinner
        document.getElementById('loadingSpinner').classList.add('hidden');
    }
});

async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (!message) return;

    // Clear input
    chatInput.value = '';

    // Add user message to chat
    addMessageToChat(message, true);

    try {
        const response = await fetch('http://localhost:8000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question: message,
                travel_plan: currentTravelPlan
            }),
        });

        const data = await response.json();
        if (response.ok) {
            // Add AI response to chat
            addMessageToChat(data.response, false);
        } else {
            addMessageToChat("Sorry, I couldn't process your question. Please try again.", false);
        }
    } catch (error) {
        addMessageToChat("Error connecting to the server. Please try again.", false);
    }
}

function addMessageToChat(message, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'} ${isUser ? 'user' : 'ai'}`;
    messageDiv.innerHTML = marked.parse(message);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle Enter key in chat input
document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
