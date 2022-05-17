import { APISettings } from './APISettings';

async function products() {
  const response = await fetch(APISettings.baseURL + '/products', {
    method: 'GET',
    headers: APISettings.headers,
  });
  if (response.status != 200) {
    throw response.status;
  } else {
    return response.json();
  }
}

export default { products };
