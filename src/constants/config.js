export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const shopifyConfig = {
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  clientId: process.env.REACT_APP_SHOPIFY_CLIENT_ID,
  secretKey: process.env.REACT_APP_SHOPIFY_CLIENT_SECRET_KEY,
  publicToken: process.env.REACT_APP_SHOPIFY_PUBLIC_ACCESS_TOKEN,
  privateToken: process.env.REACT_APP_SHOPIFY_PRIVATE_ACCESS_TOKEN,
}