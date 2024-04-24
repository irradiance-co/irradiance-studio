'use server';

import { profilesApi, formatConsentedTime } from '@/lib/klaviyo';
import {
  ProfileCreateQuery,
  ProfileEnum,
  SubscriptionCreateJobCreateQuery,
  ProfileSubscriptionBulkCreateJobEnum,
} from 'klaviyo-api';

const LIST_ID = 'RGUBug';

interface SubscribeParams {
  email: string;
  message?: string;
}

export async function subscribeAction({ email }: SubscribeParams) {
  console.log('Starting subscription process for:', email);

  const profile: ProfileCreateQuery = {
    data: {
      type: ProfileEnum.Profile,
      attributes: {
        email: email,
      },
    },
  };

  try {
    console.log('Creating profile with data:', profile);

    /**
     *
     * Create the profile and prepare for subscription
     * to a Klaviyo list.
     */
    const result = await profilesApi.createProfile(profile);
    const dateNow = new Date();
    const timezoneOffset = -240;

    /**
     *
     * Prepare the subscription data
     */
    const subscribeData: SubscriptionCreateJobCreateQuery = {
      data: {
        type: ProfileSubscriptionBulkCreateJobEnum.ProfileSubscriptionBulkCreateJob,
        attributes: {
          customSource: 'WEB_FORM',
          profiles: {
            data: [
              {
                type: 'profile',
                id: result.body.data.id,
                attributes: {
                  email: email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: 'SUBSCRIBED',
                        consentedAt: new Date(
                          formatConsentedTime(dateNow, timezoneOffset),
                        ),
                      },
                    },
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
    };

    const subscribeResult = await profilesApi.subscribeProfiles(subscribeData);
    console.log('Subscription result:', subscribeResult);
    return { success: true, data: subscribeResult.body };
  } catch (error) {
    console.error('Failed to subscribe:', error.response?.status);
    throw new Error(`Failed to subscribe: ${error.message}`);
  }
}
