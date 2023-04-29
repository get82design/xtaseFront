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

export const useGetNavLinks = (enabled) => {
    return useQuery(['getNavLinks'], () => getNavLinks(), { enabled })
}

export const useGetSocials = () => {
    return useQuery(['getSocials'], () => getSocials())
}

export const useGetHomepage = () => {
    return useQuery([`getHomepage`], () => getHomePage())
}

export const useGetByLuxuriaPage = () => {
    return useQuery(['getByLuxuriaPage'], () => getByLuxuriaPage())
}

export const useGetEnImagesPage = () => {
    return useQuery(['getEnImagesPage'], () => getEnImagesPage())
}

export const useGetContactPage = () => {
    return useQuery(['getContactPage'], () => getContactPage())
}

export const useGetGalerieChambre = (enabled) => {
    return useQuery(['getGalerieChambre'], () => getGalerieChambre(), { enabled })
}

export const useGetGalerieSalon = (enabled) => {
    return useQuery(['getGalerieSalon'], () => getGalerieSalon(), { enabled })
}

export const useGetGalerieSalleDeBain = (enabled) => {
    return useQuery(['getGalerieSalleDeBain'], () => getGalerieSalleDeBain(), { enabled })
}

export const useGetGalerieCuisine = (enabled) => {
    return useQuery(['getGalerieCuisine'], () => getGalerieCuisine(), { enabled })
}

export const useGetModal = (enabled) => {
    return useQuery(['getModal'], () => getModal(), {enabled})
}

export const useGetListJeuxItems = (enabled) => {
    return useQuery(['getListJeuxItems'], () => getListJeuxItems(), { enabled })
}

export const useGetListSituationItems = (enabled) => {
    return useQuery(['getListSituationItems'], () => getListSituationItems(), { enabled })
}

export const useGetMapAndContact = () => {
    return useQuery(['getMapAndContact'], () => getMapAndContact())
}

export const useGetCardByLuxuria = () => {
    return useQuery(['getCardByLuxuria'], () => getCardByLuxuria())
}