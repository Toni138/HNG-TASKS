Backend Wizards — Stage 0 Task: Dynamic Profile Endpoint

This is my submission for the Backend Wizards Stage 0 Task.  
It’s a simple RESTful API endpoint that returns my profile information and a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

Features
- A GET endpoint at `/me`
- Returns a JSON response in this exact format:
json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Random cat fact fetched from the Cat Facts API"
}
