import newsintroimg from '../../images/gatwekerav2.png'
import newsimage1 from '../../images/teamimg1.png'
import newsimage2 from '../../images/teamimg2.png'
import newsimage3 from '../../images/teamimg3.png'
import newsimage4 from '../../images/teamimg4.png'
import eventimage1 from '../../images/eventimg1.png'
import eventimage2 from '../../images/eventimg2.png'
import eventimage3 from '../../images/eventimg3.png'
import eventimage4 from '../../images/eventimg4.png'
import { dateToFormatString } from '../utilities/converter'

export const eventintro = {
    // TODO edit image to correct size
    introimg: newsintroimg,
    introtxt: 'Walk with us as we combine our efforts, minds and abilities everyday to help the needy and those in slums. Do not be left behind, stay updated with the latest news from Taabasamu. '
}

export type NewsItemType = {
    newsimage: string,
    newstitle: string,
    source: 'facebook' | 'twitter' | 'linkedin' | 'medium',
    likes: number,
    comments: number,
    link: string | '/'
    date: string
}

export const samplenews: NewsItemType[] = [
    // TODO edit the images to the correct sizes
    {
        newsimage: newsimage1,
        newstitle: 'Empowering Post-Secondary Graduates through Computer Training.',
        source: 'medium',
        likes: 145,
        comments: 118,
        link: '/',
        date: dateToFormatString(new Date(2024, 7, 18))
    },
    {
        newsimage: newsimage4,
        newstitle: 'Welcoming our new sponsors to the campaign and the road ahead.',
        source: 'twitter',
        likes: 72,
        comments: 31,
        link: '/',
        date: dateToFormatString(new Date(2024, 12, 21))
    },
    {
        newsimage: newsimage2,
        newstitle: 'Taabasamu receives awards at the annual worlds heroes ceremony.',
        source: 'facebook',
        likes: 212,
        comments: 189,
        link: '/',
        date: dateToFormatString(new Date(2025, 2, 7))
    },
    {
        newsimage: newsimage3,
        newstitle: 'Successful drive yields results and takes us a step further in Kibra slums.',
        source: 'linkedin',
        likes: 457,
        comments: 336,
        link: '/',
        date: dateToFormatString(new Date(2025, 6, 25))
    }
]

type EventLocation = {
    name: string,
    lat: number,
    long: number
}

export type EventItem = {
    name: string,
    event_img: string,
    category: 'Fundraiser' | 'Charity',
    date: string
    location: EventLocation,
    description: string,
    donation_link: '/'
}

export const samplevents: EventItem[] = [
    // TODO edit the images to fit perfectly
    {
        name: 'Kuza Talanta Gala',
        event_img: eventimage1,
        category: 'Fundraiser',
        date: dateToFormatString(new Date(2025, 6, 13)),
        location: {
            name: 'Kibra, Nairobi',
            lat: 3.1645,
            long: 8.9765
        },
        description: 'The Kuza Talanta Gala is a fundraiser event whose donations will go towards helping young girls grow and enrich there talent. It mainly focuses on children in Kibra slum who luck amenities that facilitate the growth andd nuturing of their talent. Some of the items that this fundraiser aims to provide for the children include, jersys, cones, trainers and balls.',
        donation_link: '/'
    },
    {
        name: 'Mlo Feed Drive',
        event_img: eventimage2,
        category: 'Charity',
        date: dateToFormatString(new Date(2025, 10, 19)),
        location: {
            name: 'Kibra, Nairobi',
            lat: 3.165,
            long: 8.9764
        },
        description: 'The Mlo Feed Drive is a charity event that aims to boost education of young children by providing food to selected schools within Kibra, Nairobi Kenya. The purpose of this event is to help cement the building blocks of a program that will help a large sum of pupils who are not able to get something to feed on during their school hours. Some of the items expected to be acquired from this charity event include; food supplies and utensils that can carter for a population of 4k and above pupils, means of transport for delivering the food to various locations, a location compliant to the regulations that govern how and where a food preperation area should be.',
        donation_link: '/'
    },
    {
        name: 'Tech-Ed Mashinani',
        event_img: eventimage3,
        category: 'Fundraiser',
        date: dateToFormatString(new Date(2024, 2, 27)),
        location: {
            name: 'Kibra, Nairobi',
            lat: 3.1645,
            long: 8.9765
        },
        description: 'The Tech-Ed Mashinani event focuses on providing children in underdeveloped areas with education on technology and application of technology in their day to day lives. The success from this event will see that children learn about the role of technology in the mordern world and how to use it appropriately to securing a better future. Items expected to be acquired from the completion of the event include; laptops, educational software, eductaors who are well versed and venturing in the technology field, a suitable location for edcating the children.',
        donation_link: '/'
    },
    {
        name: 'Slum Tour',
        event_img: eventimage4,
        category: 'Charity',
        date: dateToFormatString(new Date(2025, 9, 6)),
        location: {
            name: 'Kibra, Nairobi',
            lat: 3.165,
            long: 8.9765
        },
        description: 'The Slum Tour event is to bring to life the challenges faced by those living in slums in Nairobi. This is to be executed by making a three day trip in to different locations of Kibra. To make the tour a success some items may be required which will be donated to some house holds within the slum while in the tour.',
        donation_link: '/'
    }
]