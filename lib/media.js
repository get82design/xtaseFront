import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  const { url } = media?.data?.attributes || '';
  console.log('url:', url);
  // const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
  const imageUrl = `https://clownfish-app-cpogf.ondigitalocean.app${url}`;
  return imageUrl;
}

export function getStrapiMediaInArray(media) {
  const { url } = media.attributes;
  // const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  const imageUrl = `https://clownfish-app-cpogf.ondigitalocean.app${url}`;
  return imageUrl;
}
