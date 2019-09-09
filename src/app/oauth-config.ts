import { AuthConfig } from 'angular-oauth2-oidc';

export const config: AuthConfig = {
  issuer: 'https://demo.identityserver.io',
  clientId: 'implicit',
  redirectUri: window.location.origin + '/poc-pwa/',
  silentRefreshRedirectUri: window.location.origin + '/poc-pwa/silent-refresh.html',
  scope: 'openid profile email api',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};
