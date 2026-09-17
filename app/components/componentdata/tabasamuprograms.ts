import heroimage from '../../images/LauWeb.jpg'
import mloimage from '../../images/Addde7.png'
import somaimage from '../../images/Talia3web.jpg'
import kuzaimage from '../../images/gamesv3.jpg'

export const programintro = {
    image: heroimage,
    introtxt: 'More than just a beacon of hope, our programs are a reminder that every star has a silver lining. From donating books, uniforms and other school material to improving and nuturing talent, our programs aim to atleast touch most if not all those living in slums, under-developed and or marignalised areas.'
}

export type ProgramItem = {
    title: string,
    image: string,
    location: 'Kibra, Nairobi',
    subtitle: string
}

export const programitems: ProgramItem[] = [
    {
        title: 'MLO',
        image: mloimage,
        subtitle: 'Providing food and healthy water to educational centers and schools.',
        location: 'Kibra, Nairobi'
    },
    {
        title: 'SOMA',
        image: somaimage,
        subtitle: 'Donating learning material and offering financial support to pupils and students.',
        location: 'Kibra, Nairobi'
    },
    {
        title: 'KUZA',
        image: kuzaimage,
        subtitle: 'Promoting and nuturing talent through games and fun activities, engaging children and youth.',
        location: 'Kibra, Nairobi'
    },
    {
        title: 'MLO',
        image: mloimage,
        subtitle: 'Providing food and healthy water to educational centers and schools.',
        location: 'Kibra, Nairobi'
    }
]

type ImapctItem = {
    value: string,
    title: string
}

export type ExtendedProgramItem = {
    title: string,
    subtitle: string,
    // change images from pictures to creative nice and lovely patterns
    image: string,
    introtxt: string,
    location: 'Kibra, Nairobi'
    mission: string[],
    impact: ImapctItem[]
}

export const extendedprogramitems: ExtendedProgramItem[] = [
    {
        title: 'MLO',
        subtitle: 'Feeding Program',
        image: mloimage,
        introtxt: 'In the harsh reality of slum life, the basic necessity of three meals a day is a formidable challenge for many children. The struggle to secure even a single meal is a harsh reality faced by these resilient youngsters. At TaaBasamu, through MLO Project Initiative we recognize the gravity of this situation and have implemented feeding programs as a cornerstone of our mission. Witnessing the sheer delight on the faces of these children as they receive nourishment is both heartening and poignant. These meals not only satiate their hunger but serve as a lifeline, infusing them with joy and hope for a brighter tomorrow.',
        mission: [
            'Provide at most 2 meals to students and pupils.',
            'Register more than 30% of schools to the program.',
            'Register most if not all children per registered school.',
            'Regular food drives to support parents and the slum community.'
        ],
        impact: [
            {
                value: '400+',
                title: 'Registered students'
            },
            {
                value: '50+',
                title: 'Registered Schools'
            },
            {
                value: '5',
                title: 'Success Food Drives'
            },
            {
                value: '30',
                title: 'Students Registered per School'
            }
        ],
        location: 'Kibra, Nairobi'
    },
    {
        title: 'SOMA',
        subtitle: 'Education Program',
        image: somaimage,
        introtxt: 'The Soma Project Initiative by TaaBasamu focuses on bringing hope and transformation to vulnerable children in the slums by providing access to education. Our mission is to break the cycle of poverty, empowering these children to live fulfilled lives and realize their dreams through the transformative power of education. Children in slums in Nairobi face lofty challenges when it comes to the quality of education they can afford to secure. Due to this, most of them fail to complete the most basic primary and secondary education that they are entitled to thus leading them to early child marriages, and the triple threat to adolescents teenage pregnancies, HIV, and gender-based violence. These slum dwellers are threatened by lack of access to the most basic human requirements such as water, sanitation, shelter, health and education.',
        location: 'Kibra, Nairobi',
        mission: [
            'Register atleast 1 child per house hold.',
            'Offer more than 50% financial support to registered children.',
            'Financial aid partnership for registered schools.'
        ],
        impact: [
            {
                value: '150+',
                title: 'Registered Children'
            },
            {
                value: '64',
                title: 'Success Stories'
            },
            {
                value: '45+',
                title: 'Partnered Schools'
            }
        ]
    },
    {
        title: 'KUZA',
        subtitle: 'Sports & Social Program',
        image: kuzaimage,
        introtxt: 'Kuza Project initiative is centered around games and fun activitieswith the aim to keep children and youth engaged, providing a positive outlet to deter them from negative influences and fostering talent discovery. Our vision is to establish a Recreation Hub, offering a dedicated platform for holistic development and community engagement. The emphasis is on flexibility, adaptability, and making the most of available resources to foster talent and promote physical activity within the community. Engaging children in games and fun activities is not merely a source of entertainment; it plays a pivotal role in their holistic development, a significance particularly profound for kids in slum communities. Beyond the laughter and joy, these activities act as catalysts for fostering self-confidence and instilling a sense of belonging. In the challenging environment of slums, where resources are limited, the transformative power of play is unparalleled. By supporting such initiatives, we provide children with a platform to explore their capabilities, discover their talents, and uncover hidden passions.',
        location: 'Kibra, Nairobi',
        mission: [
            'Identify and nuture young talent.',
            'Boost confidence, networking and peer to peer relationships.',
            'Offer guidance and support to children and youth.',
            'At least 4 social activties every 3 months.'
        ],
        impact: [
            {
                value: '18',
                title: 'Successful Social Events'
            },
            {
                value: '10+',
                title: 'Sponsors'
            },
            {
                value: '9',
                title: 'Successful Tournaments'
            }
        ]
    }
]