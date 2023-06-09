import { fetchAPI } from "./../../lib/api"

export const getGlobal = () => {
    return fetchAPI("/global", {
    populate:
    {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      logo: "*"
    },
  });
}

export const getNavLinks = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/nav-links?${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const navlinkRes = await res.json()
    return navlinkRes.data
    // return fetchAPI("/nav-links", {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getSocials = async () => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/socials?populate=*`)
    const socialRes = await res.json()
    return socialRes.data
    // return fetchAPI("/socials").then((response) => response.data)
}

// Je ne reçois pas la photo... Trouver pourquoi ???????
export const getHomePage = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/homepage?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const homepageRes = await res.json()
    return homepageRes.data
    // return fetchAPI(`/homepage`, {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getByLuxuriaPage = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/by-luxuria-page?populate=hero&populate[1]=imgHero&populate[3]=buttonResa&populate[4]=sectionOne.img&populate[5]=sectionTwo.img&populate[6]=sectionThree.img&populate[7]=bgImage${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const byLuxuriaRes = await res.json()
    return byLuxuriaRes.data
    // return fetchAPI('/by-luxuria-page', {
    //     populate: {
    //         backgroundVideo: "*",
    //         buttonResa: "*",
    //         hero: "*",
    //         imgHero: "*",
    //         sectionOne: {
    //             populate: "*"
    //         },
    //         sectionTwo: {
    //             populate: "*"
    //         }, 
    //         sectionThree: {
    //             populate: "*"
    //         }
    //     }
    // }, locale).then((response) => response.data)
}

export const getEnImagesPage = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/en-images-page?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const enImagesRes = await res.json()
    return enImagesRes.data
    // return fetchAPI('/en-images-page', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getContactPage = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/contact-page?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const contactRes = await res.json()
    return contactRes.data
    // return fetchAPI('/contact-page', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getGalerieChambre = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/galerie-chambres?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const chambreRes = await res.json()
    return chambreRes.data
    // return fetchAPI('/galerie-chambres', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getGalerieSalon = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/galerie-salons?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const salonRes = await res.json()
    return salonRes.data
    // return fetchAPI('/galerie-salons', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getGalerieSalleDeBain = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/galerie-salle-de-bains?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const bainRes = await res.json()
    return bainRes.data
    // return fetchAPI('/galerie-salle-de-bains', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getGalerieCuisine = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/galerie-cuisines?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const cuisineRes = await res.json()
    return cuisineRes.data
    // return fetchAPI('/galerie-cuisines', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getModal = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/modal?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const modalRes = await res.json()
    return modalRes.data
    // return fetchAPI('/modal', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getListJeuxItems = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/jeux-items?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const listJeuxRes = await res.json()
    return listJeuxRes.data
    // return fetchAPI('/jeux-items', {
    //     populate: {
    //         label: "*",
    //         icon: {
    //             populate: "*"
    //         }
    //     }
    // }, locale).then((response) => response.data)
}

export const getListSituationItems = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/situation-items?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const listSituationRes = await res.json()
    return listSituationRes.data
    // return fetchAPI('/situation-items', {
    //     populate: {
    //         label: "*",
    //         icon: {
    //             populate: "*"
    //         }
    //     }
    // }, locale).then((response) => response.data)
}

export const getMapAndContact = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/map-and-contact?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const mapAndContactRes = await res.json()
    return mapAndContactRes.data
    // return fetchAPI('/map-and-contact', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getCardByLuxuria = async (locale) => {
    const res = await fetch(`https://clownfish-app-cpogf.ondigitalocean.app/api/card-by-luxuria?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const cardByLuxuriaRes = await res.json()
    return cardByLuxuriaRes.data
    // return fetchAPI('/card-by-luxuria', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}