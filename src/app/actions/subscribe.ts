// app/actions/subscribe.ts
'use server';

import { profilesApi, formatConsentedAt } from '@/lib/klaviyo';
import { ProfileCreateQuery, ProfileEnum } from 'klaviyo-api';

const LIST_ID = 'RGUBug'; // Predefined list ID

interface SubscribeParams {
  email: string;
}

export async function subscribeToKlaviyo({ email }: SubscribeParams) {
  console.log('Starting subscription process for:', email);

  let profile: ProfileCreateQuery = {
    data: {
      type: ProfileEnum.Profile,
      attributes: {
        email: email,
      },
    },
  };

  try {
    /**
     * The profile object should look like this:
     */
    console.log('Creating profile with data:', profile);

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
                        ),
                      },
                    },
                    /**
                     *
                     * Add more subscription types here if needed.
                     *
                     * Example: SMS, Push, etc.
                     */
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
              id: LIST_ID,
            },
          },
        },
      },
    });
    /**
     * The subscription result should look like this:
     */
    console.log('Subscription result:', subscribeResult);

    return { success: true, data: subscribeResult.body };
  } catch (error) {
    console.error('Failed to subscribe:', error.response?.status);
    throw new Error(`Failed to subscribe: ${error.message}`);
  }
}
