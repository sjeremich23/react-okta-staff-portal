const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/implicit/callback",
  pkce: true,
  scopes: ["openid", "email", "profile"]
};

export { config };
