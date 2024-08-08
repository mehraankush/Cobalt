# Cobalt Meals

## Overview

Welcome to the Cobalt Meals! This application allows users to search for recipes, view detailed instructions, and manage their favorite recipes. The app is built with Next.js, styled using Tailwind Css , Shadcn, and includes several advanced features such as authentication, dark/light mode, and infinite scrolling.

## Features

- **User Interface**: Built with Next.js and styled using Shadcn. Icons are provided by React Icons.
- **Authentication**: Secure user authentication implemented with NextAuth.
- **Recipe API**: Integrated with the Spoonacular API for fetching recipes.
- **Data Fetching**: Utilizes React Query for efficient data fetching, with built-in debouncing and infinite scroll.
- **Theme Support**: Dark mode and light mode support using NextThemes.
- **Favorites Management**: Redux is used to manage the addition of favorite recipes to the cart.
- **Slack Channel INtegration** Using Next-auth you can integration yopu slack channel by the permission of your admin.
  
## Tech Stack

- **Frontend**: Next.js, Shadcn/ui ,Taildonw CSS , React Icons
- **State Management**: Redux , @redux/tooltik , react-redux
- **Authentication**: NextAuth , Google Provider , Slack Provider
- **API**: Spoonacular API (Recipe API)
- **Data Fetching**: React Query/tanstack
- **Styling**: Shadcn, NextThemes ,Tailwind CSS
- **Deployment**: Vercel (suggested for production)
  


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/recipe-app.git
    https://github.com/mehraankush/Cobalt
    cd Cobalt
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**: Create a `.env.local` file in the root of your project and add the following:

    ```bash
    NEXTAUTH_URL=http://localhost:3000
    
    NEXT_PUBLIC_RECIPE_API=https://api.spoonacular.com/recipes
    NEXT_PUBLIC_API_KEY=********************

    NEXT_PUBLIC_GOOGLE_CLIENT_ID=************************
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=************************

    NEXT_PUBLIC_SLACK_CLIENT_ID=***************************
    NEXT_PUBLIC_SLACK_CLIENT_SECRET=****************************
    
    NEXTAUTH_SECRET=***********************
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

      
## Challenges

- **Slack Authentication**: During development, Slack did not allow HTTP for authentication on local servers. To overcome this, i have to use ngrok was used to create a secure tunnel, marking my first experience with this tool.
   - Install ngrok: https://ngrok.com/download
    - Run ngrok: 
      ```bash
      ngrok http 3000
      ```
    - Use the provided HTTPS URL in your Slack app configuration for local development.
  
## Usage

1. **Search for Recipes**: Use the search bar to find recipes.
2. **Infinite Scroll**: Scroll through endless recipe suggestions.
3. **Add to Favorites**: Click on the heart icon to add recipes to your favorites.
4. **Switch Themes**: Toggle between dark and light mode using the theme switcher.
5. **Authentication**: Sign in using your preferred method (configured in NextAuth).


## License

This project is licensed under the ME License.
