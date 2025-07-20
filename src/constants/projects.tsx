import InlineLink from '@/components/ui/InlineLink'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'
import { social } from '@/constants'
import { RiExternalLinkFill, RiGithubFill } from '@remixicon/react'

const github: LinkProps = {
  label: 'Source code',
  icon: <RiGithubFill size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <RiExternalLinkFill size={22} />
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
  'jQuery',
  'Tailwind CSS',
  'Bootstrap',
  'HTML/CSS',
  'PHP',
  'Java',
  'Python',
  'ASP.NET',
  'Android SDK',
  'Firebase',
  'Axios Mock',
  'Spotify API'
]

const projects: ProjectProps[] = [
  {
    slug: 'louisite',
    featured: true,
    title: 'louisite',
    description:
      'My all-new personal website—this is the second and latest iteration—built with React and TypeScript.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('louisite', 'https://louisite.com')
  },
  {
    slug: 'spotify-top5',
    featured: true,
    title: 'Spotify Top 5',
    description: 'Your Top 5 Spotify songs & artists in one place built with Next.js.',
    techStacks: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'React', 'Spotify API'],
    category: 'Front-end development',
    links: getLinks('spotify-top5', 'https://spotifytop5.louisite.com')
  },
  {
    slug: 'vue-member-management',
    featured: true,
    title: 'Member Management App',
    description: (
      <span>
        A member management system app built with Vue.js. Built as a probation project during my
        internship at <InlineLink href='https://blibli.com'>Blibli</InlineLink>.
      </span>
    ),
    techStacks: ['Vue.js', 'Axios Mock'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('vue-member-management', 'https://leejhlouis.github.io/vue-member-management/')
  },
  {
    slug: 'find-a-coach',
    featured: true,
    title: 'Find a Coach',
    description: (
      <span>
        A coach finder web app that allows users to search for and connect with coaches who
        specialize in a variety of fields. A project from{' '}
        <InlineLink href='https://github.com/maxschwarzmueller'>
          Maximilian Schwarzmüller
        </InlineLink>
        's Udemy course.
      </span>
    ),
    techStacks: ['Vue.js', 'Firebase'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('find-a-coach', 'https://find-a-coach-355c2.web.app/')
  },
  {
    slug: 'e-grocery',
    title: 'e-grocery',
    description: "An e-grocery web app built with Laravel. Built for Web Programming's final exam.",
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    category: 'Full-stack development',
    links: getLinks('e-grocery')
  },
  {
    slug: 'movielist',
    featured: true,
    title: 'MovieList',
    description: "A movie list web app built with Laravel. Built for Web Programming's project.",
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    category: 'Full-stack development',
    links: getLinks('movielist')
  },
  {
    slug: 'election-2022',
    featured: true,
    title: 'HIMTI Election 2022',
    description:
      'An e-voting website that allows students and lecturers of the School of Computer Science to vote for the next Chairman of HIMTI BINUS University.',
    category: 'Project management',
    techStacks: ['Bootstrap', 'Laravel', 'Project management'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('himti-election-2022', 'https://election.himtibinus.or.id/')
  },
  {
    slug: 'giant-book-supplier',
    featured: true,
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
    featured: true,
    title: 'BalaiTani',
    description:
      'An e-commerce web app designed as a platform for connecting small farmers to buyers directly to avoid middlemen from inflating the retail costs.',
    category: 'Full-stack development',
    techStacks: ['Laravel', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('balaitani', 'http://balaitani.herokuapp.com')
  },
  {
    slug: 'balaitani-asp',
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
    featured: false,
    title: 'GOT Wordle',
    description: (
      <span>
        A fun <i>Game of Thrones</i>-themed Wordle clone. This is a fork of{' '}
        <InlineLink href='https://github.com/cwackerfuss/reactle'>cwackerfuss/reactle</InlineLink>.
      </span>
    ),
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('got-wordle', `https://${social.github}.github.io/got-wordle/`)
  },
  {
    slug: 'unified-registration',
    featured: true,
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
    title: '30 Days of JavaScript',
    description:
      'A 30-day vanilla JavaScript coding challenge with some modifications and add-ons to advance my JavaScript fundamentals.',
    techStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('javascript30', 'https://leejhlouis.github.io/javascript30')
  },
  {
    slug: 'tukang-travel',
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
    title: 'louisite v1',
    description: 'First iteration of my personal website.',
    category: 'Front-end development',
    techStacks: ['JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    links: getLinks('louisite-v1', `https://${social.github}.github.io/louisite-v1/`)
  },
  {
    slug: 'hci-danbam',
    title: 'DanBam',
    description: (
      <span>
        The landing page of DanBam—a fictitious Korean restaurant featured in the K-drama hit{' '}
        <i>Itaewon Class</i>. Built for Human and Computer Interaction's project.
      </span>
    ),
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript', 'jQuery'],
    links: getLinks('hci-danbam', `https://${social.github}.github.io/hci-danbam`)
  },
  {
    slug: 'fame',
    title: 'FAME',
    description:
      'The landing page of FAME Workshop—a game development workshop held by HIMTI BINUS University’s programming class division.',
    category: 'Front-end development',
    techStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('fame', `https://${social.github}.github.io/fame`)
  },
  {
    slug: 'cinema-cgp',
    title: 'Cinema CGP',
    description: "A movie ticket-booking Android app. Built for Mobile Programming's final exam.",
    category: 'Android app development',
    techStacks: ['Java', 'Android SDK', 'Android Studio'],
    links: getLinks('cinema-cgp')
  },
  {
    slug: 'tokoku',
    title: 'Tokoku',
    description:
      "An Android app showing list of available items on a shop in which the users can add them to their own list. Built for Mobile Programming's group project.",
    category: 'Android app development',
    techStacks: ['Java', 'Android SDK', 'Android Studio'],
    links: getLinks('tokoku')
  },
  {
    slug: 'final-fla',
    title: 'Hotel Reservation System',
    description:
      "A hotel reservation console app built with Java. Built for Framework Layer Architecture's final exam.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('final-fla')
  },
  {
    slug: 'transactease',
    title: 'POS Console App',
    description:
      "A POS console app built with Java. Built for Framework Layer Architecture's group project.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('transactease')
  },
  {
    slug: 'binus-board',
    title: 'BINUS Board',
    description:
      "A bulletin board console application built with Java. Built for Framework Layer Architecture's mid exam.",
    category: 'Console app development',
    techStacks: ['Java'],
    links: getLinks('binus-board')
  },
  {
    slug: 'atm-python',
    title: 'ATM Console App',
    description:
      'An ATM console app built using Python. Built as a project for the bootcamp held by HIMTI BINUS University x Progate.',
    category: 'Console app development',
    techStacks: ['Python'],
    links: getLinks('atm-python')
  }
]

export { filters, projects }
