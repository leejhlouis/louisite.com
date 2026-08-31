import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'
import { social } from '@/constants'

const github: LinkProps = {
  label: 'Source code',
  icon: 'github'
}

const live: LinkProps = {
  label: 'Live',
  icon: 'external'
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'React',
  'Next.js',
  'Vue.js',
  'Laravel',
  'TypeScript',
  'JavaScript',
  'Java',
  'Python',
  'ASP.NET',
  'Android SDK',
  'Firebase',
  'Google Cloud',
  'Spotify API'
]

const projects: ProjectProps[] = [
  {
    slug: 'spotify-top5',
    icon: '🎵',
    featured: true,
    title: 'Spotify Top 5',
    illustrations: [
      {
        src: '/assets/projects/spotify-top5.png',
        alt: 'Conceptual illustration of five ranked music selections and sound waves'
      }
    ],
    description: 'Your Top 5 Spotify songs & artists in one place built with Next.js.',
    techStacks: ['Next.js', 'TypeScript', 'Spotify API'],
    otherTechStacks: ['Tailwind CSS', 'HTML/CSS', 'JavaScript', 'React', 'Spotify API'],
    category: 'Front-end development',
    links: getLinks('spotify-top5', 'https://spotifytop5.louisite.com')
  },
  {
    slug: 'erp-system',
    icon: '🏭',
    featured: true,
    title: 'ERP System',
    illustrations: [
      {
        src: '/assets/projects/erp.png',
        alt: 'Conceptual illustration of connected accounting, inventory, warehouse, and quality systems'
      }
    ],
    description:
      'A freelance enterprise resource planning (ERP) web application for an undisclosed client, covering accounting, transactions, suppliers, sales, items, brands, buyers, inventory, warehouses, and quality checks. Built with PERN stack.',
    techStacks: ['PostgreSQL', 'Express.js', 'React', 'Node.js'],
    otherTechStacks: ['TypeScript', 'JavaScript'],
    category: 'Full-stack development',
    links: []
  },
  {
    slug: 'travelin',
    icon: '🗺️',
    featured: true,
    title: 'Travelin',
    illustrations: [
      {
        src: '/assets/projects/travelin.png',
        alt: 'Conceptual illustration of a collaborative travel itinerary and destination route'
      },
      {
        src: '/assets/projects/travelin-2.png',
        alt: 'Conceptual illustration of a collaborative travel itinerary and destination route'
      }
    ],
    description:
      'A web-based travel itinerary planner. Users can plan collaboratively, share itineraries publicly, and discover destinations through proximity, rating, and preference-based recommendations powered by the Google Places API.',
    techStacks: ['Laravel', 'MySQL', 'Google Cloud'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    category: 'Full-stack development',
    links: []
  },
  {
    slug: 'vue-member-management',
    icon: '👥',
    featured: false,
    title: 'Member Management App',
    description: [
      {
        type: 'text',
        content:
          'A member management system app built with Vue.js. Built as a probation project during my internship at '
      },
      { type: 'link', content: 'Blibli', href: 'https://blibli.com' },
      { type: 'text', content: '.' }
    ],
    techStacks: ['Vue.js', 'Axios Mock'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('vue-member-management', 'https://leejhlouis.github.io/vue-member-management/')
  },
  {
    slug: 'find-a-coach',
    icon: '🧑‍🏫',
    featured: false,
    title: 'Find a Coach',
    description: [
      {
        type: 'text',
        content:
          'A coach finder web app that allows users to search for and connect with coaches who specialize in a variety of fields. A project from '
      },
      {
        type: 'link',
        content: 'Maximilian Schwarzmüller',
        href: 'https://github.com/maxschwarzmueller'
      },
      { type: 'text', content: "'s Udemy course." }
    ],
    techStacks: ['Vue.js', 'Firebase'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('find-a-coach', 'https://find-a-coach-355c2.web.app/')
  },
  {
    slug: 'e-grocery',
    icon: '🛒',
    featured: false,
    title: 'e-grocery',
    description: "An e-grocery web app built with Laravel. Built for Web Programming's final exam.",
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    category: 'Full-stack development',
    links: getLinks('e-grocery')
  },
  {
    slug: 'movielist',
    icon: '🎬',
    featured: false,
    title: 'MovieList',
    description: "A movie list web app built with Laravel. Built for Web Programming's project.",
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    category: 'Full-stack development',
    links: getLinks('movielist')
  },
  {
    slug: 'election-2022',
    icon: '🗳️',
    title: 'HIMTI Election 2022',
    illustrations: [
      {
        src: '/assets/projects/himti-election-2022.png',
        alt: 'Conceptual illustration of a ballot box and voting process'
      }
    ],
    description:
      'An e-voting website that allows students and lecturers of the School of Computer Science to vote for the next Chairman of Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS University.',
    category: 'Project management',
    techStacks: ['Bootstrap', 'Laravel', 'Project management'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: []
  },
  {
    slug: 'giant-book-supplier',
    icon: '📚',
    featured: false,
    title: 'Giant Book Supplier',
    description:
      "A book supplier website built with Laravel. Built for Web Programming's mid exam.",
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    category: 'Full-stack development',
    links: getLinks('giant-book-supplier')
  },
  {
    slug: 'balaitani',
    icon: '🌾',
    featured: false,
    title: 'BalaiTani',
    description:
      'An e-commerce web app designed as a platform for connecting small farmers to buyers directly to avoid middlemen from inflating the retail costs.',
    category: 'Full-stack development',
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('balaitani')
  },
  {
    slug: 'balaitani-asp',
    icon: '🌾',
    featured: false,
    title: 'BalaiTani, built with ASP.NET',
    description:
      'Another rendition of BalaiTani built with ASP.NET and domain-driven design implementation.',
    category: 'Full-stack development',
    techStacks: ['ASP.NET', 'Bootstrap', 'Domain-driven design'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('balaitani-asp')
  },
  {
    slug: 'got-wordle',
    icon: '🎮',
    featured: false,
    title: 'GOT Wordle',
    description: [
      { type: 'text', content: 'A fun ' },
      { type: 'emphasis', content: 'Game of Thrones' },
      { type: 'text', content: '-themed Wordle clone. This is a fork of ' },
      {
        type: 'link',
        content: 'cwackerfuss/reactle',
        href: 'https://github.com/cwackerfuss/reactle'
      },
      { type: 'text', content: '.' }
    ],
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('got-wordle', `https://${social.github}.github.io/got-wordle/`)
  },
  {
    slug: 'unified-registration',
    icon: '🏫',
    featured: false,
    title: 'HIMTI unified registration',
    description:
      'The official website of HIMTI BINUS University. Contributed to this project during my time at the student association.',
    category: 'Full-stack development',
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('unified-registration', 'https://registration.himtibinus.or.id')
  },
  {
    slug: 'himti.or.id',
    icon: '🏫',
    title: 'himti.or.id',
    description:
      'The official website of HIMTI BINUS University. Managed this project during my time as Manager of Web Development Division.',
    category: 'Project management',
    techStacks: ['Bootstrap', 'PHP', 'Project management'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('himti.or.id', 'https://himti.or.id/')
  },
  {
    slug: 'javascript30',
    icon: '📅',
    title: '30 Days of JavaScript',
    description:
      'A 30-day vanilla JavaScript coding challenge with some modifications and add-ons to advance my JavaScript fundamentals.',
    techStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('javascript30', 'https://leejhlouis.github.io/javascript30')
  },
  {
    slug: 'tukang-travel',
    icon: '✈️',
    title: 'TukangTravel',
    description:
      'The landing page of TukangTravel—a lifestyle traveling app designed for travelers who love adventure and hidden gems.',
    category: 'Front-end development',
    techStacks: ['React', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('tukang-travel', 'https://tukang-travel.web.app/')
  },
  {
    slug: 'louisite-v1',
    icon: '🌐',
    title: 'louisite v1',
    description: 'First iteration of my personal website.',
    category: 'Front-end development',
    techStacks: ['JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    links: getLinks('louisite-v1', `https://${social.github}.github.io/louisite-v1/`)
  },
  {
    slug: 'hci-danbam',
    icon: '🍜',
    title: 'DanBam',
    description: [
      {
        type: 'text',
        content:
          'The landing page of DanBam—a fictitious Korean restaurant featured in the K-drama hit '
      },
      { type: 'emphasis', content: 'Itaewon Class' },
      { type: 'text', content: ". Built for Human and Computer Interaction's project." }
    ],
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript', 'jQuery'],
    links: getLinks('hci-danbam', `https://${social.github}.github.io/hci-danbam`)
  },
  {
    slug: 'fame',
    icon: '🎮',
    title: 'FAME',
    description:
      'The landing page of FAME Workshop—a game development workshop held by HIMTI BINUS University’s programming class division.',
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('fame', `https://${social.github}.github.io/fame`)
  },
  {
    slug: 'cinema-cgp',
    icon: '🎬',
    title: 'Cinema CGP',
    description: "A movie ticket-booking Android app. Built for Mobile Programming's final exam.",
    category: 'Android app development',
    techStacks: ['Java', 'Android SDK', 'Android Studio'],
    links: getLinks('cinema-cgp')
  },
  {
    slug: 'tokoku',
    icon: '🛒',
    title: 'Tokoku',
    description:
      "An Android app showing list of available items on a shop in which the users can add them to their own list. Built for Mobile Programming's group project.",
    category: 'Android app development',
    techStacks: ['Java', 'Android SDK', 'Android Studio'],
    links: getLinks('tokoku')
  },
  {
    slug: 'final-fla',
    icon: '🏨',
    title: 'Hotel Reservation System',
    description:
      "A hotel reservation console app built with Java. Built for Framework Layer Architecture's final exam.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('final-fla')
  },
  {
    slug: 'transactease',
    icon: '💳',
    title: 'POS Console App',
    description:
      "A POS console app built with Java. Built for Framework Layer Architecture's group project.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('transactease')
  },
  {
    slug: 'binus-board',
    icon: '📋',
    title: 'BINUS Board',
    description:
      "A bulletin board console application built with Java. Built for Framework Layer Architecture's mid exam.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('binus-board')
  },
  {
    slug: 'atm-python',
    icon: '🏦',
    title: 'ATM Console App',
    description:
      'An ATM console app built using Python. Built as a project for the bootcamp held by HIMTI BINUS University x Progate.',
    category: 'Console app development',
    techStacks: ['Python'],
    links: getLinks('atm-python')
  }
]

export { filters, projects }
