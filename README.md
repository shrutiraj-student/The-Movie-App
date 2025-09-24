# React + Vite

📽️ How to Get Your TMDB API Key
- Create a TMDB Account
Go to https://www.themoviedb.org and sign up for a free account.
- Navigate to API Section
After logging in, click on your profile icon → Settings → API → then click Create under "API Key".
- Fill Out the Application Form
Choose “Developer” as your usage type and fill in the required details. Once approved, you'll get your API key.
- Copy Your API Key
It will look something like:


- Add your API key to .env
VITE_API_KEY=your_api_key_here
- const api_key = import.meta.env.VITE_API_KEY;


🔐 How to Get Your Client ID (e.g., for OAuth or API Access)
✅ For Google OAuth:
- Go to the Google Cloud Console
Sign in with your Google account.
- Create a New Project
Click the project dropdown → “New Project” → give it a name → click “Create”.
- Enable OAuth Consent Screen
- Go to “OAuth consent screen” in the sidebar
- Choose “External” for public apps
- Fill in app name, support email, and authorized domains
- Save and continue
- Create OAuth Credentials
- Go to “Credentials” → “Create Credentials” → “OAuth 2.0 Client ID”
- Choose “Web application”
- Add your redirect URI (e.g., http://localhost:3000)
- Click “Create”
- Copy Your Client ID
You’ll see a screen with your Client ID and Client Secret. Save them securely.






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


