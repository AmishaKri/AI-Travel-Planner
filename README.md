# 🌍 Travel Planning AI

A travel planning application that uses **Google's Gemini AI** to generate personalized travel itineraries with day-by-day activities, budget estimates, local tips, and more.

---

## ✨ Features

- Generate detailed travel plans based on user input  
- Day-by-day itinerary  
- Cost breakdown  
- Accommodation recommendations  
- Must-visit places  
- Local transportation options  
- Food recommendations  
- Travel tips and precautions

---

## 🔧 Prerequisites

- Python 3.8 or higher  
- Google Cloud API key with Gemini access  
- SERP API key

---

## ⚙️ Setup

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd travel-planning-ai
## ⚙️ Setup (Continued)

2. **Install dependencies**  
   ```bash
   pip install -r requirements.txt
   
3. **Add your API keys in a .env file
Create a file named .env in the root directory and add the following:

env

GEMINI_API_KEY=your_api_key_here
SERP_API_KEY=your_api_key_here

4. **Run the backend server
```bash
uvicorn app:app --reload
```
5. **Open the frontend

Open index.html directly in your browser

Or serve it using a local server (e.g., Live Server in VS Code)



🚀 Usage
Fill in the travel form:

Source location

Destination

Travel dates

Budget

Number of travelers

Interests

Click "Generate Travel Plan"

Wait for your personalized itinerary to be generated

⚠️ Note
This project is for local development only.
Security and deployment configuration is required before going live.

