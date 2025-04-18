
import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'; 

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: '2024-02-16',
    useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);