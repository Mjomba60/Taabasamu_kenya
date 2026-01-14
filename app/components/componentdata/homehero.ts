import { TestimonialBody } from "../header"
import user1 from '../../images/teamitem1.jpg'
import user2 from '../../images/teamitem2.jpg'
import user3 from '../../images/teamitem3.jpg'
import user4 from '../../images/teamitem4.jpg'
import user5 from '../../images/teamitem5.jpg'
import impactimg1 from '../../images/sponsorship.png'
import impactimg2 from '../../images/support.png'
import impactimg3 from '../../images/vest.png'
import impactimg4 from '../../images/leadership.png'

export type Stats = {
    arrow?: 'left' | 'right' | 'up' | 'down',
    statvalue: string,
    statxt: string,
    arrowtxt?: string,
    statimage: string
}

export const homeherodata = {
  maintext: 'Bringing more than smiles to the destitute',
  subtext:
    'We aim to break the cycle of  segregation  of  those  in devoid,  thus in holding the hands of the underprivileged, the less fortunate, and the needy, walk beside them with compassion and unwavering support. We strive to offer not just temporary relief, but a lasting foundation upon which they can build a better future. Through our efforts, we aim to inspire hope, foster self-reliance, and open doors to opportunities that can transform lives.'
}

export const homeprogramsstats: Stats[] = [
  {
    arrow: 'left',
    statvalue: '30+',
    statxt: 'Total Programs',
    arrowtxt: '+3.45%',
    statimage: impactimg1
  },
  {
    arrow: 'right',
    statvalue: '5K',
    statxt: 'Donors',
    arrowtxt: '+3.75%',
    statimage: impactimg2
  },
  {
    arrow: 'up',
    statvalue: '402',
    statxt: 'Sponsors',
    arrowtxt: '+8%',
    statimage: impactimg3
  },
  {
    arrow: 'up',
    statvalue: '7K',
    statxt: 'Enrolled Persons',
    arrowtxt: '+14%',
    statimage: impactimg4
  }
]

export const user_testimonials: TestimonialBody[] = [
  {
    image: user1,
    name: "Talia Makena",
    title: "Beneficiary",
    review: "Through Taabasamu I was able to go back to school, study and complete my junior level education."
  },
  {
    image: user2,
    name: "Mark Kamande",
    title: "Beneficiary",
    review: "Taabasamu helped me build back my business after the fire incident at the market."
  },
  {
    image: user3,
    name: "Liz Karanja",
    title: "Volunteer",
    review: "I have a lot to be thankful for after seeing what the underprivileged go through to make ends meet."
  },
  {
    image: user4,
    name: "Martin Obwage",
    title: "Sponsor",
    review: "Seeing the future take shape and everyone feeling equal has always been my dream."
  },
  {
    image: user5,
    name: "Madina Abdi",
    title: "Beneficiary",
    review: "I can now provide for my family after years of pain and agony, all thanks to Taabasamu."
  }
]

export const promotext = [
    "Together we build brighter futures",
    "One smile, one opportunity",
    "One empowered child at a time",
    "Your support is more than a donation",
    "Provide a brighter equitable tomorrow"
]

export const donate_assist_txt = 'Thank you for choosing to donate. Donations contribute largely towards achieving our goals and mission as Taabasamu.'