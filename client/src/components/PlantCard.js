import styled from 'styled-components'
import PropTypes from 'prop-types';
import Bee from '../assets/bee.svg';
import Butterfly from '../assets/butterfly.svg'
import Bird from '../assets/bird.svg'
import Sun from '../assets/sun.svg'
import CloudySun from '../assets/cloudy.svg'
import Cloud from '../assets/cloud.svg'
import Waterdrop from '../assets/water-drop.svg'
import grayWaterdrop from '../assets/water-drop-gray.svg'
import Bookmarks from './Bookmarks'

export default function Plantcard({
    id,
    name_de,
    name_lat,
    image,
    bienenfreundlich,
    falterfreundlich,
    vogelfreundlich,
    standort,
    wasser,
    modalPlant,
    onSelectFavorites,
    isFavorite
}) {

    const standortIcon = () => {
        if (standort === 'Sonne') {
            return <Icon src={Sun} />
        } else if (standort === 'Halbschatten') {
            return <Icon src={CloudySun} />

        } else if (standort === 'Sonne/Halbschatten') {
            return <span>
                <Icon src={Sun} />
                <Icon src={CloudySun} />
            </span>
        } else if (standort === 'Halbschatten/Schatten') {
            return <span>
                <Icon src={CloudySun} />
                <Icon src={Cloud} />
            </span>

        } else {
            return <Icon src={Cloud} />
        }
    }

    const wasserIcon = () => {
        if (wasser === 'wenig') {
            return <span>
                <Icon src={Waterdrop} />
                <Icon src={grayWaterdrop} />
                <Icon src={grayWaterdrop} />
            </span>
        } else if (wasser === 'mittel') {
            return <span>
                <Icon src={Waterdrop} />
                <Icon src={Waterdrop} />
                <Icon src={grayWaterdrop} />
            </span>
        } else {
            return <span>
                <Icon src={Waterdrop} />
                <Icon src={Waterdrop} />
                <Icon src={Waterdrop} />
            </span>
        }
    }


    return (
        <>
            <Wrapper>
                <Bookmarks onSelectFavorites={onSelectFavorites} id={id} isFavorite={isFavorite} />
                <img src={image} alt={name_de}></img>
                <Headline>{name_de}</Headline>
                <LatName>{name_lat}</LatName>
                <IconWrapper>
                    {bienenfreundlich ?
                        (<Icon src={Bee} />) : null}
                    {falterfreundlich ?
                        (<Icon src={Butterfly} />) : null}
                    {vogelfreundlich ?
                        (<Icon src={Bird} />) : null}
                </IconWrapper>
                <IconWrapper>
                    {standortIcon()}
                </IconWrapper>
                <IconWrapper>
                    {wasserIcon()}
                </IconWrapper>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
min-width: 45vw;
min-height:45vw;
flex-direction: column;
align-items: center;
overflow: hidden;
  box-shadow:9px 13px 40px var(--primary);
  border-radius: 1rem;
  margin: 1rem 1rem 1.5rem 1rem;
  background-color: white;
  position: relative;
`

const Headline = styled.h3`
margin: 0;
color: #246914;
position: absolute;
top: 14rem;
`
const LatName = styled.p`
margin-top: -1rem;
color:#647362;

`

const IconWrapper = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
margin: 0.5rem;

`

const Icon = styled.img`
height: 1.5rem;
margin: 0.4rem;

`


Plantcard.propTypes = {
    name_de: PropTypes.string,
    name_lat: PropTypes.string,
    image: PropTypes.string,
    bienenfreundlich: PropTypes.bool,
    falterfreundlich: PropTypes.bool,
    vogelfreundlich: PropTypes.bool,
    standort: PropTypes.string,
    wasser: PropTypes.string,
    modalPlant: PropTypes.object
}
