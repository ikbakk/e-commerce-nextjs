import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  apiVersion: '2021-10-21',
  useCdn: false
};

export const sanityClient = createClient(config);
export const imgUrl = (src) => createImageUrlBuilder(config).image(src);
