# Animal Disease Prediction Project

## Overview

Welcome to the Animal Disease Prediction project! This full-stack application is built using Next.js 13, MongoDB, Prisma for the database, Clerk for authentication, and OpenAI for generating animal disease data. The goal of the project is to predict diseases based on user-input symptoms, display disease information, and maintain a history of user predictions.

## Tech Stack

- **Frontend:** Next.js 13
- **Database:** MongoDB with Prisma
- **Authentication:** Clerk
- **Data Generation:** OpenAI (ChatGPT)
- **API Routes:** Next.js API Routes

## Functionality

### Disease Prediction

1. **User Input:** Users input two symptoms on the website.
2. **API Call:** A call is made to the Next.js API route with the two symptoms.
3. **Backend Logic:** The backend checks the symptoms against the database.
4. **Disease Arrays:** Three arrays are created - one for diseases related to symptom 1, one for diseases related to symptom 2, and one for diseases related to both symptoms.
5. **Database Storage:** The user's prediction is stored in the database.
6. **Response:** The frontend receives a response containing matching diseases, diseases related to symptom 1, and diseases related to symptom 2.

### Disease Information

- Users can explore detailed information about each disease stored in the database.

### Prediction History

- The application maintains a history of user predictions, allowing users to track their past inputs and results.

## Data Flow

1. **Data Generation:** Animal disease data is generated by ChatGPT, cleaned, and updated to the MongoDB database.
2. **User Interaction:** Users input symptoms on the frontend.
3. **API Call:** Next.js API route is called with symptom data.
4. **Backend Processing:** Backend logic checks symptoms against the database and stores user predictions.
5. **Response to Frontend:** Frontend receives disease information and displays it to the user.

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and Prisma configurations.
4. Configure Clerk for authentication.
5. Run the application using `npm run dev`.

Feel free to explore, contribute, and enhance the capabilities of this Animal Disease Prediction project. 