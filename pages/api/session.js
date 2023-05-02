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
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/nav-links?populate=*${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const navlinkRes = await res.json()
    return navlinkRes.data
    // return fetchAPI("/nav-links", {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getSocials = async () => {
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/socials?populate=*`)
    const socialRes = await res.json()
    return socialRes.data
    // return fetchAPI("/socials").then((response) => response.data)
}

// Je ne reçois pas la photo... Trouver pourquoi ???????
export const getHomePage = async (locale) => {
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/homepage?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const homepageRes = await res.json()
    return homepageRes.data
    // return fetchAPI(`/homepage`, {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getByLuxuriaPage = (locale) => {
    return fetchAPI('/by-luxuria-page', {
        populate: {
            backgroundVideo: "*",
            buttonResa: "*",
            hero: "*",
            imgHero: "*",
            sectionOne: {
                populate: "*"
            },
            sectionTwo: {
                populate: "*"
            }, 
            sectionThree: {
                populate: "*"
            }
        }
    }, locale).then((response) => response.data)
}

export const getEnImagesPage = (locale) => {
    return fetchAPI('/en-images-page', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getContactPage = (locale) => {
    return fetchAPI('/contact-page', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getGalerieChambre = (locale) => {
    return fetchAPI('/galerie-chambres', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getGalerieSalon = (locale) => {
    return fetchAPI('/galerie-salons', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getGalerieSalleDeBain = (locale) => {
    return fetchAPI('/galerie-salle-de-bains', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getGalerieCuisine = (locale) => {
    return fetchAPI('/galerie-cuisines', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getModal = (locale) => {
    return fetchAPI('/modal', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getListJeuxItems = async (locale) => {
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/jeux-items?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
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
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/situation-items?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
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
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/map-and-contact?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const mapAndContactRes = await res.json()
    return mapAndContactRes.data
    // return fetchAPI('/map-and-contact', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}

export const getCardByLuxuria = async (locale) => {
    const res = await fetch(`https://seal-app-ka6lw.ondigitalocean.app/api/card-by-luxuria?populate=*&${locale && locale !== 'fr-FR' ? `&locale=${locale}` : ""}`)
    const cardByLuxuriaRes = await res.json()
    return cardByLuxuriaRes.data
    // return fetchAPI('/card-by-luxuria', {
    //     populate: "*"
    // }, locale).then((response) => response.data)
}