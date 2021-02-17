

export const environment = {
  production: false,
  auth: {
    "domain": "dev-urysvsv6.eu.auth0.com",
    "clientId": "XmH7YdtGsweXmgij1LZ9GH7TcbwUUQh0",
    "audience": "YOUR_API_IDENTIFIER",
    redirectUri: window.location.origin,
  },
  httpInterceptor: {
    allowedList: ['http://localhost:3001'],
  },
};