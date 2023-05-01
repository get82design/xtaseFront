import {
    getByLuxuriaPage,
    getCardByLuxuria,
    getEnImagesPage,
    getGalerieChambre,
    getGalerieSalleDeBain,
    getGalerieCuisine,
    getGalerieSalon,
    getHomePage,
    getListJeuxItems,
    getListSituationItems,
    getMapAndContact,
    getModal,
    getNavLinks,
    getSocials,
    getContactPage
} from "./../pages/api/session"
import { useQuery } from "react-query"

export const useGetNavLinks = (locale) => {
    return useQuery([`getNavLinks${locale}`], () => getNavLinks(locale))
}

export const useGetSocials = () => {
    return useQuery(['getSocials'], () => getSocials())
}

export const useGetHomepage = (locale) => {
    return useQuery([`getHomepage${locale}`], () => getHomePage(locale))
}

export const useGetByLuxuriaPage = (locale) => {
    return useQuery([`getByLuxuriaPage${locale}`], () => getByLuxuriaPage(locale))
}

export const useGetEnImagesPage = (locale) => {
    return useQuery([`getEnImagesPage${locale}`], () => getEnImagesPage(locale))
}

export const useGetContactPage = (locale) => {
    return useQuery([`getContactPage${locale}`], () => getContactPage(locale))
}

export const useGetGalerieChambre = (enabled, locale) => {
    return useQuery([`getGalerieChambre${locale}`], () => getGalerieChambre(locale), { enabled })
}

export const useGetGalerieSalon = (enabled, locale) => {
    return useQuery([`getGalerieSalon${locale}`], () => getGalerieSalon(locale), { enabled })
}

export const useGetGalerieSalleDeBain = (enabled, locale) => {
    return useQuery([`getGalerieSalleDeBain${locale}`], () => getGalerieSalleDeBain(locale), { enabled })
}

export const useGetGalerieCuisine = (enabled, locale) => {
    return useQuery([`getGalerieCuisine${locale}`], () => getGalerieCuisine(locale), { enabled })
}

export const useGetModal = (enabled, locale) => {
    return useQuery([`getModal${locale}`], () => getModal(locale), {enabled})
}

export const useGetListJeuxItems = (enabled, locale) => {
    return useQuery([`getListJeuxItems${locale}`], () => getListJeuxItems(locale), { enabled })
}

export const useGetListSituationItems = (enabled, locale) => {
    return useQuery([`getListSituationItems${locale}`], () => getListSituationItems(locale), { enabled })
}

export const useGetMapAndContact = (locale) => {
    return useQuery([`getMapAndContact${locale}`], () => getMapAndContact(locale))
}

export const useGetCardByLuxuria = (locale) => {
    return useQuery([`getCardByLuxuria${locale}`], () => getCardByLuxuria(locale))
}