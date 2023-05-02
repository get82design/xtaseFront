import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media?.data.attributes || "";
  // const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
  const imageUrl = `https://seal-app-ka6lw.ondigitalocean.app${url}`
  return imageUrl;
}

export function getStrapiMediaInArray(media) {
  const { url } = media.attributes;
  // const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  const imageUrl = `https://seal-app-ka6lw.ondigitalocean.app${url}`
  return imageUrl;
}