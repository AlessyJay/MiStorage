# MiStorage

A modern **SaaS storage management platform** built with the **Next.js** framework, **TailwindCSS**, **Shadcn** design system, **Rust** for backend APIs, **SurrealDB** for your data persistence, and **Azure Blob Storage** for scalable, reliable file storage.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Roadmap](#roadmap)
7. [License](#license)
8. [Contact](#contact)

---

## Overview

**MiStorage** is a **cloud storage management platform** designed for organizations and individuals who require secure, scalable, and reliable solutions for storing files and managing data. By combining modern web technologies like **Next.js**, **TailwindCSS**, and **Shadcn**, and pairing them with the performance of **Rust** and the schema-less power of **SurrealDB**, MiStorage delivers a seamless user experience for file uploads, data visualization, and streamlined workflow automation.

---

## Key Features

- **Responsive and Modern UI**: Built with **Next.js**, **TailwindCSS**, and **Shadcn** to ensure a sleek, intuitive interface.
- **High Performance Backend**: Powered by **Rust** for efficient and secure APIs.
- **Flexible Data Model**: **SurrealDB** offers real-time updates and graph-like queries, making data handling seamless.
- **Scalable Storage**: Stores files in **Azure Blob Storage**, allowing for virtually unlimited scalability.
- **Access Control & Permissions**: Fine-grained controls for secure file sharing and collaboration.
- **Easy Deployment**: Container-friendly architecture for straightforward deployments on any cloud platform or on-premise.

---

## Getting Started

**Prerequisites**

- Node.js (LTS)
- yarn or npm (whichever you prefer)
- Rust (latest stable version recommended)
- SurrealDB
- Azure Account (to configure your Blob Storage)

---

## Installation

**1. Clone the repository:**

```bash
git clone https://github.com/AlessyJay/mistorage.git
cd mistorage
```

**2. Install dependencies for the frontend:**

```bash
cd app
yarn install
# or npm install
```

**3. Install dependencies for the Rust backend:**

```bash
cd ../server
cargo build
```

**4. Set up environment variables:**

`Duplicate the .env.example file and rename it to .env.`

`Update the values in the .env file, including:`

**Database URL for SurrealDB**

_Azure Blob Storage credentials (Access Key, Connection String, Container Name)_
Example:

````bash
SURREALDB_URL=localhost:8000
SURREALDB_NAMESPACE=mistorage_ns
SURREALDB_DATABASE=mistorage_db

AZURE_BLOB_STORAGE_CONNECTION_STRING=<Your_Connection_String>
AZURE_BLOB_STORAGE_CONTAINER_NAME=<Your_Container_Name>```
````

---

## Usage

- Sign Up / Login: Create an account or log in with existing credentials.
- Create a Workspace: Organize files into separate workspaces or projects.
- Upload & Manage Files: Drag-and-drop or select files to upload to Azure Blob Storage.
- Share & Collaborate: Set permissions, invite collaborators, and track recent changes.
- Monitor Usage: Get statistics about storage usage, file versions, and more in your dashboard.

---

## Roadmap

- Authentication Enhancements: Social logins, multi-factor authentication.
- Analytics Dashboard: Advanced usage charts, cost estimations, and real-time logs.
- Expanded Integrations: Support for AWS S3, GCP Cloud Storage, and more.
- Desktop & Mobile Apps: Cross-platform clients for offline syncing.

---

## Contact

Have questions or need help? Reach out via:

Email: tony.somboonsirikul@outlook.com
GitHub: AlessyJay

I'd love to hear your feedback on MiStorage and how you’re using it!
