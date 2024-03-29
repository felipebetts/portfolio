import { Box } from '@chakra-ui/react'
import NoSsr from '../no-ssr'
import SkillsLogos from './skills-logos'

const frontendLogos = [
    {
        alt: 'React',
        src: '/images/skills/react.png',
        width: 50
    },
    {
        alt: 'Nextjs',
        src: '/images/skills/nextjs.png',
        width: 70
    },
    {
        alt: 'JavaScript',
        src: '/images/skills/javascript.png',
        width: 50
    },
    {
        alt: 'HTML',
        src: '/images/skills/html.png',
        width: 50
    },
    {
        alt: 'CSS',
        src: '/images/skills/css.png',
        width: 50
    },
    {
        alt: 'Material-UI',
        src: '/images/skills/mui.png',
        width: 50
    },
    {
        alt: 'Styled-Components',
        src: '/images/skills/styled-components-light.png',
        width: 50
    }
]

const backendLogos = [
    {
        alt: 'Node.js',
        src: '/images/skills/nodejs.png',
        width: 50
    },
    {
        alt: 'TypeScript',
        src: '/images/skills/typescript.png',
        width: 50
    },
    {
        alt: 'Python',
        src: '/images/skills/python.png',
        width: 50
    },
    {
        alt: 'PostgreSQL',
        src: '/images/skills/postgresql.png',
        width: 50
    },
    {
        alt: 'MongoDB',
        src: '/images/skills/mongodb.png',
        width: 100
    },
    {
        alt: 'Redis',
        src: '/images/skills/redis.svg',
        width: 42
    },
    {
        alt: 'Sequelize',
        src: '/images/skills/sequelize.svg',
        width: 42
    }
]

const Skills = () => {
    return (
        <Box w="full" py={4}>
            <Box py={2} key="frontend-logos">
                <SkillsLogos logos={frontendLogos} intialOffsetX={25} />
            </Box>
            <Box py={2} key="backend-logos">
                <SkillsLogos
                    logos={backendLogos}
                    intialOffsetX={75}
                    speed={0.7}
                />
            </Box>
        </Box>
    )
}

export default Skills
