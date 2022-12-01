import { Image } from '@chakra-ui/react'
import SliderContainer, { SliderItem } from '../slider'

const SkillsLogos = ({ logos, initialOffsetX = 0, speed }) => (
    <SliderContainer
        contentWidth={600}
        initialOffsetX={initialOffsetX}
        speed={speed}
    >
        {logos.map((logo, i) => (
            <SliderItem width={logo.width} key={`${logo.alt}_${i}`}>
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={50}
                    objectFit="contain"
                />
            </SliderItem>
        ))}
    </SliderContainer>
)

export default SkillsLogos
