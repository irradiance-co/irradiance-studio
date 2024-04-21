// app/actions/subscribe.ts
'use server';

import profilesApi from '@/lib/klaviyo/api';
import { ProfileCreateQuery, ProfileEnum } from 'klaviyo-api';

const listId = 'Ri279A'; // Predefined list ID

interface SubscribeParams {
  email: string;
}

export async function subscribeToKlaviyo({ email }: SubscribeParams) {
  let profile: ProfileCreateQuery = {
    data: {
      type: ProfileEnum.Profile,
      attributes: {
        email: email,
      },
    },
  };

  try {
    const result = await profilesApi.createProfile(profile);
    const dateNow = new Date();
    const timezoneOffset = -240; // For Eastern Daylight Time (EDT)

    const subscribeResult = await profilesApi.subscribeProfiles({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          customSource: 'YourCustomSourceHere', // Customize this as needed
          profiles: {
            data: [
              {
                type: 'profile',
                id: result.body.data.id, // Ensure this path is correct based on the actual API response
                attributes: {
                  email: email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: 'SUBSCRIBED',
                        consentedAt: new Date(
                          formatConsentedAt(dateNow, timezoneOffset),
                        ), // Convert string to Date object
                      },
                    },
                    // Add more subscription types here if needed
                  },
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: 'list',
              id: listId, // Use the predefined list ID
            },
          },
        },
      },
    });
    return { success: true, data: subscribeResult.body };
  } catch (error) {
    console.error('Failed to subscribe:', error.response?.status);
    throw new Error(`Failed to subscribe: ${error.message}`);
  }
}

function formatConsentedAt(date: Date, timezoneOffset: number): string {
  // Calculate timezone offset
  let offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  let offsetMinutes = Math.abs(timezoneOffset % 60);
  let offsetSign = timezoneOffset < 0 ? '-' : '+';
  let offset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}${offsetMinutes.toString().padStart(2, '0')}`;

  // Format the date and time parts
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');

  // Combine all parts into the final string
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}`;
}

export default subscribeToKlaviyo;
