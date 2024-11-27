# SvelteKit tRPC Scalable Project

This repository demonstrates how to build a scalable and modular application using **SvelteKit** and **tRPC**. The project is structured to promote maintainability, separation of concerns, and ease of scalability.

Full Tutorial Here: [Ultimate Guide to SvelteKit tRPC: Build Scalable, High-Performance Apps](https://michaelbelete.com/sveltekit-trpc-scalable-apps)

## Features

- Modular folder structure for large-scale projects.
- Integration of **tRPC** for efficient type-safe APIs.
- Example app fetching coffee data (hot and iced coffee) from a sample API.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Folder Structure](#folder-structure)
4. [How to Use](#how-to-use)
5. [Contributing](#contributing)
6. [License](#license)

## Overview

This project serves as a foundation for building scalable apps using SvelteKit and tRPC. It demonstrates best practices for structuring large projects and includes a functional example of fetching and displaying coffee data.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```
 git clone https://github.com/michaelbelete/Sveltekit-tRPC.git

 cd Sveltekit-tRPC
```

2. Install dependencies:

```
 npm install
```

3. Start the development server:

```
 npm run dev
```

4. Open your browser and navigate to:

```
 http://localhost:5173
```

## Folder Structure

The project is organized as follows:

```
src/
├── lib/ # Shared utilities and components
├── routes/ # SvelteKit pages and endpoints
├── server/ # Backend logic and tRPC setup
│ ├── routers/ # tRPC routers
│ ├── services/ # Business logic services
│ ├── validations/ # Zod validation schemas
```

## How to Use

- Run the project locally to explore the example functionality.
- Use the modular structure as a guide for your own projects.
- Refer to the code for best practices on integrating tRPC with SvelteKit.

## Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a feature branch:

```
 git checkout -b feature-name
```

3. Commit your changes:

```
 git commit -m "Add feature"
```

4. Push to the branch:

```
 git push origin feature-name
```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
