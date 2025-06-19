# Travel Planning AI

A travel planning application that uses Google's Gemini AI to generate personalized travel itineraries.

## Features

- Generate detailed travel plans based on user inputs
- Day-by-day itinerary
- Cost breakdown
- Accommodation recommendations
- Must-visit places
- Local transportation options
- Food recommendations
- Travel tips and precautions

## Prerequisites

- Python 3.8 or higher
- Google Cloud API key with Gemini API access

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd travel-planning-ai
```

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the root directory and add your Gemini and SERP API key:
```
GEMINI_API_KEY=your_api_key_here
SERP_API_KEY=your_api_key_here
```

4. Start the backend server:
```bash
uvicorn app:app --reload
```

5. Open the frontend:
- Open `index.html` in your web browser
- Or serve it using a local server

## Usage

1. Fill in the travel details in the form:
   - Source location
   - Destination
   - Travel dates
   - Budget
   - Number of travelers
   - Interests

2. Click "Generate Travel Plan"

3. Wait for the AI to generate your personalized travel plan

## Note

This application is for local development only. Additional security measures would be needed for production deployment.
