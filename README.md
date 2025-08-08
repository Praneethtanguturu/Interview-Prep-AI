# Interview-Prep-AI
Interview Prep AI is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that simulates real-world technical interviews. It allows users to choose specific topics, receive AI-generated coding questions, solve them using an integrated code editor, and receive intelligent feedback in real time. This app is ideal for developers preparing for technical job interviews.

Key Features • Topic-based Interview Generation: Users can select specific Data Structures and Algorithms topics such as Arrays, Strings, Linked Lists, Trees, Dynamic Programming, etc. • Real-time AI Question Generation: Uses Gemini API to dynamically generate coding questions based on user-selected topics. • Question History: Previously generated questions and user responses are stored for future reference and learning. • Authentication System: User authentication is implemented using JWT and bcrypt for session management and password security.

Architecture Overview • Frontend: React (Vite), React Router DOM for routing, Axios for API communication, Tailwind CSS for styling, and Zustand for global state management. • Backend: Node.js with Express.js for building RESTful APIs. • Database: MongoDB with Mongoose for schema modeling and data management. • AI Integration: Gemini API for generating questions dynamically.

/client -> React frontend (Port: 5173) /server -> Express backend (Port: 5009) /models -> Mongoose models for user and question data /routes -> Express route handlers (auth, question, chat) /controllers -> Controller logic for handling API operations

# In /client
npm install npm run dev

# In /server
npm install npm run server

Future Enhancements • Add support for multiple programming languages in the editor • Track user statistics across multiple sessions • Introduce difficulty levels for question generation • Integrate live interview sessions or mock interviews with AI
