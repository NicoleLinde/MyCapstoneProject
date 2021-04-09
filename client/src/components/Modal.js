import styled from 'styled-components'
import { useRef } from 'react';
import Plantcard from './PlantCard';
import Cancel from '../assets/cancel.svg'

export default function Modal({
    showModal,
    setShowModal,
    modalPlant,
    onSelectFavorites,
    isFavorite,
    favorites
}) {
    const modalRef = useRef();

    const closeModal = (event) => {
        if (modalRef.current === event.target) {
            setShowModal(false);
        }
    };
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalButton onClick={() => setShowModal(false)}><Icon src={Cancel} /></ModalButton>
                    <ModalContent>

                        <Plantcard showModal={showModal}
                            image={modalPlant.image}
                            name_de={modalPlant.name_de}
                            name_lat={modalPlant.name_lat}
                            bienenfreundlich={modalPlant.bienenfreundlich}
                            falterfreundlich={modalPlant.falterfreundlich}
                            vogelfreundlich={modalPlant.vogelfreundlich}
                            wasser={modalPlant.wasser}
                            onSelectFavorites={() => onSelectFavorites(modalPlant._id)}
                            isFavorite={isFavorite(favorites, modalPlant._id)}

                        >
                        </Plantcard>


                    </ModalContent>
                </Background>

            ) : null}
        </>
    )

}


const Background = styled.div`
left:0;
top:0;
bottom:0;
right:0;
background: rgba(255, 255, 255, 0.9);
position:fixed;
display:flex;
justify-content: center;
align-items:center;
z-index:10;
`

const ModalContent = styled.div`
position:absolute;
max-height: calc(100vh - 3rem);
overflow-y: auto;
padding: 1rem;
`

const ModalButton = styled.span`
cursor: pointer;
position:absolute;
top:10%;
right:3%;
z-index: 11;
`
const Icon = styled.img`
height: 1.5rem;
margin: 0.4rem;
`
