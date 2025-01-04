import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Jay Mehta',
   initials: 'JM',
   url: 'https://jay-mehta.tech',
   location: 'India, Madhya Pradesh',
   locationLink: '#',
   description:
    '"Driving innovation with a startup mindset—building MVPs, launching SaaS, and crafting seamless, user-centric products."',
 summary:
    'I am Jay Mehta, a full-stack developer passionate about building modern solutions with JavaScript, Next.js, Prisma, and cutting-edge web technologies.\n\n'  
+ 'Currently, I’m exploring the worlds of Web3 and AI/ML, combining knowledge to create impactful digital experiences.\n\n'  
+ 'Some key areas of focus for me include:\n'  
+ '- Building scalable, high-performance web applications\n'  
+ '- Experimenting with new development frameworks and tools\n\n'  
+ 'I’d love to connect if you’re working on innovative projects or can share mentorship insights as I grow.\n\n'  
+ 'Let’s collaborate if you:\n'  
+ '- Have exciting web projects or product ideas\n'  
+ '- Want to tackle complex design or development challenges\n'  
+ '- Love discussing the future of tech and disruptive innovation\n\n'  
+ 'I’m always excited to innovate, learn, and collaborate—let’s build something remarkable together!' ,
   avatarUrl: '/me.png',
   skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "C/C++",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Material-UI",
      "FastAPI",
      "Git",
      "Figma",
      "Bootstrap",
      "OpenAI", 
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      // { href: '/blog', icon: NotebookIcon, label: 'Blogs' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'jaymehta002@gmail.com',
      tel: '+919752980888',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/jaymehta002',
            icon: Icons.github,
            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/jaymehta002',
            icon: Icons.linkedin,
            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://x.com/jaymehta002',
            icon: Icons.x,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: 'mailto:jaymehta002@gmail.com',
            icon:  Icons.email,
            navbar: true,
         },
      },
   },

   work: [
      {
         company: 'Flutteryourway',
         href: '#',
         badges: ["Contract"],
         location: 'Remote',
         title: 'Full Stack Developer',
         logoUrl: '/flutteryourway.png',
         start: 'Jan 2024',
         end: 'Aug 2024',
         description:
            'Developed 3 admin panels with Vite and Firebase for efficient app management. Built SEO-optimized landing pages in Next.js, achieving 1st rank for key terms. Implemented full-stack projects with Node.js, MongoDB, Stripe, and AWS EC2.',
      },
      {
         company: 'Metamorph',
         href: '#',
         badges: ["Contract"],
         location: 'Remote',
         title: 'Full Stack Developer',
         logoUrl: '/metamorph.png',
         start: 'Sep 2023',
         end: 'Dec 2023',
         description:
            'Redesigned business website using Vite, Node.js, and MongoDB. Built admin panel for content management and form tracking. Customized WordPress themes and plugins for enhanced functionality.',
      },
   ],
   education: [
      {
         school: 'Lakshmi Narain College of Technology',
         href: '#',
         degree: 'B.Tech, Computer Science and Engineering',
         start: '2020',
         end: '2024',
         logoUrl:"/lnct.png",
      },
   ],
   projects: [
      {
         title: 'Authcraft',
         href: 'https://boilerplate-next-prisma.vercel.app/',
         dates: 'Nov 2024 - Dec 2024',
         active: true,
         description:'A full-stack web app on GitHub, offering travel management for users & admins. Users book packages, manage bookings & personal info. Admins oversee users, bookings & packages.',
         technologies: [
            "Next.js",
            "ShadCN UI",
            "Next-Auth",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "React Hook Form",
"Zod Validation"
         ],
         links: [
            {
               type: 'Website',
               href: 'https://boilerplate-next-prisma.vercel.app/',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/jaymehta002/Authcraft',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: '/project-2.webm',
      },
      {
         title: 'Casa-mobilia',
         href: 'https://casamobilia.in/',
         dates: 'Oct 2024 - Dec 2024',
         active: true,
         description:
        'A modern furniture store website built with Next.js, TailwindCSS, and ShadCN UI. It offers responsive design, dynamic product displays, and easy cart management. ShadCN UI provides customizable components, while Next.js ensures performance and SEO optimization.',
         technologies: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Mongoose",
            "Clerk",
            "TailwindCSS",
            "Shadcn-UI",
            "Zod",
         ],
         links: [
            {
               type: 'Website',
               href: 'https://casamobilia.in/',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: '/project-3.webm',
      },
      {
         title: 'Cricquest',
         href: '#',
         dates: 'Dec 2023 - Jan 2023',
         active: true,
         description:
            'Web-based game using Vite with auto-complete player names and 300+ player stats. Implemented smooth animations with Framer Motion and delivered pixel-perfect UI based on Figma designs.',
         technologies: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "TailwindCSS"
         ],
         links: [
            {
               type: 'Website',
               href: 'https://cricquest.in/',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video:
        '/cricquest.webm',
      }
   ],
   skillsByCategory: {
      "Frontend": [
        {
          name: "React",
          icon: Icons.react,
          level: 85
        },
        {
          name: "Next.js",
          icon: Icons.nextjs,
          level: 90
        },
        {
          name: "TypeScript",
          icon: Icons.typescript,
          level: 80
        }
      ],
    }
} as const
