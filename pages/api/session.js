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

export const getNavLinks = (locale) => {
    return fetchAPI("/nav-links", {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getSocials = () => {
    return fetchAPI("/socials").then((response) => response.data)
}

// Je ne reçois pas la photo... Trouver pourquoi ???????
export const getHomePage = (locale) => {
    return fetchAPI(`/homepage`, {
        populate: "*"
    }, locale).then((response) => response.data)
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

export const getListJeuxItems = (locale) => {
    return fetchAPI('/jeux-items', {
        populate: {
            label: "*",
            icon: {
                populate: "*"
            }
        }
    }, locale).then((response) => response.data)
}

export const getListSituationItems = (locale) => {
    return fetchAPI('/situation-items', {
        populate: {
            label: "*",
            icon: {
                populate: "*"
            }
        }
    }, locale).then((response) => response.data)
}

export const getMapAndContact = (locale) => {
    return fetchAPI('/map-and-contact', {
        populate: "*"
    }, locale).then((response) => response.data)
}

export const getCardByLuxuria = (locale) => {
    return fetchAPI('/card-by-luxuria', {
        populate: "*"
    }, locale).then((response) => response.data)
}