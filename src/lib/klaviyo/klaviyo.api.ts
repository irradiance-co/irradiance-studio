import { ApiKeySession, ProfilesApi } from 'klaviyo-api';

const apiKey = process.env.KLAVIYO_API_KEY;

if (!apiKey) {
  console.error('Klaviyo API key is not defined in the environment variables.');
  throw new Error('Klaviyo API key is missing.');
}

const session = new ApiKeySession(apiKey);
const profilesApi = new ProfilesApi(session);

export default profilesApi;
