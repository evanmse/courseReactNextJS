import App from "./App";

export const metadata = {
  title: "My App",
  description: "Welcome to my Next.js app",
};

export default function RootLayout() {
  return (
    <html lang="fr">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata.description} />
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="http://localhost:8097" async />
        </head>
      <body>
        <App />
      </body>
    </html>
  );
}