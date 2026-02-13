import loveimg from '../../images/love.png'
import careimg from '../../images/caring.png'
import humilityimg from '../../images/humility_v1.png'
import appreciateimg from '../../images/clap.png'
import user1 from '../../images/teamitem1.jpg'
import user2 from '../../images/teamitem2.jpg'
import user3 from '../../images/teamitem3.jpg'
import user4 from '../../images/teamitem4.jpg'
import user5 from '../../images/teamitem5.jpg'
import impactimg1 from '../../images/sponsorship.png'
import impactimg2 from '../../images/support.png'
import impactimg3 from '../../images/vest.png'
import impactimg4 from '../../images/leadership.png'

export const aboutherohlghttxt = [
  "The light that sparks smiles and brightens community's shared future.",
  'A shining light that turns hope into smiles across our community.',
  'The light that awakens smiles and restores hope among slums.',
  'A guiding light that fuels smiles and strengthens community hope.',
  'The light that spreads smiles and illuminates a hopeful tomorrow.',
  'The light that brightens faces and lifts the spirit of our community.',
  'Addressing factors that are undermined in our community.'
] 

export const aboutintrotext =
  'We are a non-pprofit organization taking key interest in under developed areas, especially slums. In the narrow lanes of urban slums where dreams often go unheard, we stand and together become the voice of the voiceless. Our non-profit organization is dedicated to nuturing potential, healing lives and building inclusive communities where everyone has a chance to thrive. At our core, we are change makers committed to reshaping the narrative for those living in poverty. Through grassroot engagement and community partnerships, we deliver impactful programs that restore hope and dignity. We stand at the intersection of poverty and potential. We believe that together greater things can be achieved and in that spirit, we align our work on the backbone of our core values as below;'

export type Corevalue = {
  value_image: string
  value_title: string
  value_body: string
}

export const corevalues: Corevalue[] = [
  {
    value_image: loveimg,
    value_title: 'Love',
    value_body:
      'We express love in all the activities that we engage in giving heartfully whenever we can.'
  },
  {
    value_image: careimg,
    value_title: 'Care',
    value_body:
      'In the activities that we engage in, we treat each individual with equal care.'
  },
  {
    value_image: humilityimg,
    value_title: 'Humility',
    value_body:
      'We treat everyone who engages with us with equal importance and value while also offering the utmost humility '
  },
  {
    value_image: appreciateimg,
    value_title: 'Appreciation',
    value_body:
      'Everyone who engages with us in our mission and vision is and will always be appreciated'
  }
]

export const missionstatement =
  'We are on a mission to bridge the gap between those in slums and underdeveloped areas who have potential but luck opportunities, exposure and resources. We aim to restoring dignity, health and access to education to those in poverty where most people luck resources or the resources available are scarce.'

export const visionstatement =
  'Our vision is to bring hope, dignity and opportunity to those underlooked. We work hand in hand with communities in slums and impoverished areas, offering support that meets real needs including; food, education, healthcare and more. We believe that every person deserves a chance to live a full and meaningful life, and we are committed to walking alongside them every step of the way. With love, compassion and unwavering dedication, we strive to help build a world where no one is left behind.'

export const teamstatement =
  'Behind every smile we bring and every life we touch is a passionate team driven with love, purpose and hope. With each day, we step into underserved communities with the goal of listening, learning and taking actions that change the lives of many. Our strength lies not just in what we do, but in how we do it. These helps us stand out as our core values have been embedded within our DNA as Taabasamu.Meet our team.'

type Membersocials = {
  facebook?: string
  twitter?: string
  linkedin?: string
}

export type Teammember = {
  member_image: string
  member_name: string
  member_role: string
  socials?: Membersocials
}

export const team_members: Teammember[] = [
  {
    member_image: user1,
    member_name: 'Sabrinah Achibellah',
    member_role: 'CEO',
    socials: {
      facebook: '/',
      twitter: '/',
      linkedin: '/'
    }
  },
  {
    member_image: user2,
    member_name: 'Archibald Nyaga',
    member_role: 'Head of Operations',
    socials: {
      facebook: '/',
      twitter: '/',
      linkedin: '/'
    }
  },
  {
    member_image: user3,
    member_name: 'Samantha Kamau',
    member_role: 'Head of Communications',
    socials: {
      facebook: '/',
      twitter: '/',
      linkedin: '/'
    }
  },
  {
    member_image: user4,
    member_name: 'Simon Abednego',
    member_role: 'Team Lead',
    socials: {
      facebook: '/',
      twitter: '/',
      linkedin: '/'
    }
  },

  {
    member_image: user5,
    member_name: 'Talia Wambua',
    member_role: 'Team Member',
    socials: {
      facebook: '/',
      twitter: '/',
      linkedin: '/'
    }
  }
]

export const impactstatement =
  'Since our inception, everyday has always been considered as a special day to us, it is because of this that we have been able to make a great impact into the lives of most people living in slums. Every day we get to listen, learn and watch how improving the lives of people helps communities grow and have a voice that can be heard. Although we meet some challenges along the way of our campaign, we do mark milestones that we achieve and this helps us track our path in accordance to our mission and vison.Some of the key and overall achievments are as listed below;'

export type Impactvalue = {
  impact_image: string
  impact_value: string
  impact_value_definer: string,
  impact_value_assistive_txt: string
}

export const impactvalues: Impactvalue[] = [
  {
    impact_image: impactimg1,
    impact_value: '70+',
    impact_value_definer: 'Volunteers',
    impact_value_assistive_txt: 'Volunteers play a major role towards achieveing our goals. Their love, dedication and hardwork helps us in organizing events and identifying new sections in slums that require our attention.'
  },
  {
    impact_image: impactimg2,
    impact_value: '30+',
    impact_value_definer: 'Active Programs',
    impact_value_assistive_txt: 'Our programs assist in bulding a future that involves those who feel underserving and forgotten. They remind the destitute that they are not forgotten and somebody cares.'
  },
  {
    impact_image: impactimg3,
    impact_value: '15K',
    impact_value_definer: 'Registered Persons',
    impact_value_assistive_txt: 'We acknowledge every one who seeks our support and we are always committed to giving everything we can to ensure that they feel deserving and have a chance in the outside world.'
  },
  {
    impact_image: impactimg4,
    impact_value: '3K',
    impact_value_definer: 'Donors',
    impact_value_assistive_txt: 'Our donors are among the major pillars of our organization. They have always proved that they are always ready to show up and give support to slum communities.'
  }
]
