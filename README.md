# Budget Generator

A web application for creating, managing, and sharing quotes for digital marketing and web development services. Built with **React**, **TypeScript**, and **Vite** as part of a frontend development learning project.

## Features

### 1. Service selection and price calculation

- Select from three services: **SEO**, **Ads**, and **Web**.
- Automatically update the estimated total as services are selected or deselected.
- Customize the Web service with additional **pages** and **languages**.
- Recalculate the total when the Web options change.

### 2. Quote generation

- Enter customer information using a form with **name**, **phone number**, and **email** fields.
- Validate the form before creating a quote.
- Save each quote with its selected services, options, total amount, date, and identifier.

### 3. Quote history

- Display previously generated quotes.
- Keep quote history in the browser using **localStorage**.
- Search quotes by client name.
- Sort quotes by **date**, **amount**, or client **name**.

### 4. Shareable quotes

- Open a quote by clicking its card.
- Generate a URL containing the quote data.
- Reconstruct and display an individual quote from the URL, without relying on the recipient's localStorage.

> **Privacy note:** Shared URLs contain encoded quote information, not encrypted information. Anyone with the link can read the included data. Use fictional customer information for demonstrations. Please note that this approach is not suitable for sharing real personal data.

## Tech Stack

- **React** — Component-based user interfaces and state management.
- **TypeScript** — Typed components, props, events, and quote data.
- **Vite** — Development server and production builds.
- **CSS** — Application and component styling.
- **localStorage** — Browser-based quote persistence.
- **Git and GitHub** — Version control and feature-based development.

## Project Management - Kanban board

The project tasks and development workflow are organized in a **Trello Kanban board**. The board is used to track the progress of the project's epics and their associated tasks.

View the Budget Kanban board on Trello: (https://trello.com/invite/b/6a388e9135a5f73a86f0153b/ATTI15f8c63b8a14a0363622a65ac05c71534109BB41/budget)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alefelipin/it-sprint4-budget.git
   ```

2. Open the project directory:

   ```bash
   cd it-sprint4-budget
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal (typically `http://localhost:5173/`).

### Other commands

```bash
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## How to Use

1. Select one or more services and customize the Web options if needed.
2. Review the automatically calculated total.
3. Enter fictional client details and generate a quote.
4. Find saved quotes in the history section, using search and sorting controls.
5. Click a quote card to open its individual view. You can share the resulting URL for demonstration purposes.

## Project Organization

The application separates responsibilities across components and TypeScript types:

- **`Budget.tsx`** — Main application state, price calculation, quote history, filtering, sorting, and sharing logic.
- **`ServiceItem.tsx`** — Service selection interface.
- **`ExtraFeature.tsx`** — Additional Web service options.
- **`QuoteForm.tsx`** — Customer data input and validation flow.
- **`ServiceAdded.tsx`** — Quote cards and quote details.
- **`QuoteSearch.tsx`** — Search and sorting controls.
- **`src/types/`** — TypeScript interfaces for form inputs and quotes.

## Limitations and Future Improvements

- Quote history is stored locally in each browser; it is not synchronized across devices.
- Shared quote URLs contain all included data and may become long.
- Shared URLs are not encrypted, and the basic parsing flow is not designed to handle every malformed or modified link.
- **Planned bonus:** Export individual quotes to PDF.
- A future version could use a backend and database to generate short, secure sharing links.

## Repository

[GitHub — it-sprint4-budget](https://github.com/alefelipin/it-sprint4-budget)
