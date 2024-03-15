let index: any = 'env';
let apiUrl: any = 'apiURL';
export const environment = {
  production: false,
  API_URL: window[index][apiUrl] || 'https://content-api-dev.eztek.net',
  name: window[index]['name'] || 'production',
};
