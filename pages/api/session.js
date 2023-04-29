import { fetchAPI } from "./../../lib/api"

export const getGlobal = () => {
    return fetchAPI("/global", {
    populate:
    {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      }
    },
  });
}

export const getNavLinks = () => {
    return fetchAPI("/nav-links").then((response) => response.data)
}

export const getSocials = () => {
    return fetchAPI("/socials").then((response) => response.data)
}

// Je ne reçois pas la photo... Trouver pourquoi ???????
export const getHomePage = () => {
    return fetchAPI(`/homepage`, {
        // locale: locale,
        populate: "*"
    }).then((response) => response.data)
}

export const getByLuxuriaPage = () => {
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
    }).then((response) => response.data)
}

export const getEnImagesPage = () => {
    return fetchAPI('/en-images-page', {
        populate: "*"
    }).then((response) => response.data)
}

export const getContactPage = () => {
    return fetchAPI('/contact-page', {
        populate: "*"
    }).then((response) => response.data)
}

export const getGalerieChambre = () => {
    return fetchAPI('/galerie-chambres', {
        populate: "*"
    }).then((response) => response.data)
}

export const getGalerieSalon = () => {
    return fetchAPI('/galerie-salons', {
        populate: "*"
    }).then((response) => response.data)
}

export const getGalerieSalleDeBain = () => {
    return fetchAPI('/galerie-salle-de-bains', {
        populate: "*"
    }).then((response) => response.data)
}

export const getGalerieCuisine = () => {
    return fetchAPI('/galerie-cuisines', {
        populate: "*"
    }).then((response) => response.data)
}

export const getModal = () => {
    return fetchAPI('/modal', {
        populate: "*"
    }).then((response) => response.data)
}

export const getListJeuxItems = () => {
    return fetchAPI('/jeux-items', {
        populate: {
            label: "*",
            icon: {
                populate: "*"
            }
        }
    }).then((response) => response.data)
}

export const getListSituationItems = () => {
    return fetchAPI('/situation-items', {
        populate: {
            label: "*",
            icon: {
                populate: "*"
            }
        }
    }).then((response) => response.data)
}

export const getMapAndContact = () => {
    return fetchAPI('/map-and-contact', {
        populate: "*"
    }).then((response) => response.data)
}

export const getCardByLuxuria = () => {
    return fetchAPI('/card-by-luxuria', {
        populate: "*"
    }).then((response) => response.data)
}