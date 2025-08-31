# Tanstack Query Posts

A Next.js application demonstrating the use of Tanstack Query for fetching and paginating posts from the JSONPlaceholder API. The project features a "Load More" button to incrementally load 10 posts at a time, styled with Tailwind CSS.

## Features

- Fetches posts from the JSONPlaceholder API.
- Displays 10 posts initially and appends the next 10 posts below when the "Load More" button is clicked.
- Uses Tanstack Query's `useInfiniteQuery` for efficient pagination and data fetching.
- Responsive grid layout with Tailwind CSS for styling.
- Error handling and loading states for a smooth user experience.

## Tech Stack

- **Next.js**: Version 15, used for building the React-based frontend with the App Router.
- **Tanstack Query**: For data fetching and pagination with `useInfiniteQuery`.
- **Tailwind CSS**: Version 4, for responsive and modern styling.
- **Yarn**: Package manager for dependency management.
- **JSONPlaceholder API**: Mock API for fetching post data.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 18 or higher recommended)
- Yarn (version 1.x or higher)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/tanstack-query-posts.git
   cd tanstack-query-posts
   ```

2. **Install Dependencies**: Run the following command to install all required packages using Yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**: Start the Next.js development server:

   ```bash
   yarn dev
   ```

   Open http://localhost:3000 in your browser to view the application.

## Project Structure

Key files in the project:

- `app/page.js`: The main page component that uses `useInfiniteQuery` to fetch and display posts, with a "Load More" button for pagination.
- `lib/fetchPosts.js`: Contains the `fetchPosts` function to fetch paginated posts from the JSONPlaceholder API.
- `app/QueryProvider.jsx`: Sets up the Tanstack Query client using `QueryClientProvider`.
- `styles/globals.css`: Global styles, including Tailwind CSS setup.

## How It Works

- The application fetches posts from `https://jsonplaceholder.typicode.com/posts` using `_page` and `_limit` query parameters.
- On initial load, it displays the first 10 posts (page 1).
- Clicking the "Load More" button fetches the next 10 posts (page 2, then 3, etc.) and appends them below the existing posts.
- The button is disabled during fetching and displays "No More Posts" when there are no more posts to load (after 100 posts, as per the JSONPlaceholder API limit).
- Loading and error states are handled to ensure a smooth user experience.

## Dependencies

Key dependencies used in the project:

- `next`: ^15.0.0
- `@tanstack/react-query`: ^5.0.0
- `tailwindcss`: ^4.0.0

To view the full list of dependencies, check the `package.json` file.

## Available Scripts

In the project directory, you can run:

- `yarn dev`: Runs the app in development mode.
- `yarn build`: Builds the app for production.
- `yarn start`: Runs the built app in production mode.
- `yarn lint`: Runs ESLint to check for code issues.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tanstack Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.
