import { Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const FlipContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    &:hover {
        .flip-inner {
            transform: rotateY(180deg);
        }
    }
    .flip-inner {
        transform-style: preserve-3d;
        transition: transform 0.8s ease;
        height: 100%;
        width: 100%;
        .front,
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 50%;
            overflow: hidden;
        }
        .front {
            transform: translateZ(1px);
        }
        .back {
            transform: rotateY(180deg);
        }
        .thumbnail {
            width: 100%;
        }
    }
`

const CoinFlippingImage = () => {
    return (
        <FlipContainer>
            <div className="flip-inner">
                <div className="front">
                    <Image
                        // borderColor="whiteAlpha.800"
                        // borderWidth={2}
                        // borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src={'/images/eu_cropped.jpg'}
                        alt="Profile Image"
                    />
                </div>
                <div className="back">
                    <Image
                        // borderColor="whiteAlpha.800"
                        // borderWidth={2}
                        // borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src={'/images/eu.jpg'}
                        alt="Profile Image"
                    />
                </div>
            </div>
        </FlipContainer>
    )
}

export default CoinFlippingImage
