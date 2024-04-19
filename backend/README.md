# Backend of My Portfolio

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This application serves as the backend for my portfolio. It's built with Node.js, Express, and MongoDB, and it uses npm as a package manager.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Ensure you have MongoDB installed and running on your local machine. If not, you can download and install it from [here](https://www.mongodb.com/try/download/community).
5. Create a `.env` file in the root directory of the project, and add the following environment variables:

```properties
MONGODB_URI="mongodb://localhost:27017/your-db-name?directConnection=true"
PORT=your-port
NODE_ENV="development"
SECRET_KEY="your-secret-key"
```

## Usage

To run the application, use the following command in your terminal:

```bash
npm run dev
```

As you can see, my backend is based on localhost. So you can have fun using my application to display your own projects by modifying the .env and having fun with http requests.
