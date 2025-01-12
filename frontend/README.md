# iScrape

iScrape Notes is a straightforward and efficient notes application built with React, Node.js, Express, and MongoDB. Designed for simplicity and functionality, it enables users to create, store, and manage notes securely. This app is ideal for anyone seeking a basic notes solution with a responsive front end and a reliable back end.

![Screenshot (16)](https://github.com/user-attachments/assets/12588fdd-25bf-4427-80dc-abc4139e15b5)
![Screenshot (17)](https://github.com/user-attachments/assets/23647bb7-f4fe-4729-96e9-e3d433ec887c)
![Screenshot (18)](https://github.com/user-attachments/assets/3118fd88-3e5b-4a1f-9688-35ec7069c870)
![Screenshot (19)](https://github.com/user-attachments/assets/9164fc99-19a1-4bff-9a57-b81ffa8d602a)
![Screenshot (14)](https://github.com/user-attachments/assets/1339671b-7e34-4573-8372-a4edea9b805c)
![Screenshot (15)](https://github.com/user-attachments/assets/04c07e70-d185-41c8-94f3-a6f5dd9f28c6)


## Features

- **User-friendly Interface**: Built with React for a smooth and responsive experience.
- **Backend Support**: Node.js and Express handle server operations and API requests.
- **Database Storage**: Notes are stored in MongoDB, enabling secure data retrieval and management.
- **CRUD Functionality**: Create, Read, Update, and Delete notes easily.

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-based)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/immohitsen/iscrape.git
   cd iscrape
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your MongoDB URI and server port:
   ```plaintext
   MONGODB_URI=your_mongo_db_uri
   PORT=5000
   ```

## Usage

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```

2. **Access the Frontend**:
   Navigate to `http://localhost:3000` in your browser to use the app.

3. **Build for Production**:
   ```bash
   cd client
   npm run build
   ```

## API Endpoints

- `POST /api/notes`: Create a new note.
- `GET /api/notes`: Retrieve all notes.
- `PUT /api/notes/:id`: Update a note by ID.
- `DELETE /api/notes/:id`: Delete a note by ID.

## Folder Structure

- **client**: Contains the React frontend.
- **server**: Express backend to handle API endpoints and note logic.
- **models**: MongoDB models for structuring note data.
- **routes**: API routes for note management.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Added feature-name"`
4. Push to branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.
