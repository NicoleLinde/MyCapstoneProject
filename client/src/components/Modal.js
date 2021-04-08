import styled from 'styled-components'
import { useRef } from 'react';
import Plantcard from './PlantCard';

export default function Modal({ showModal, setShowModal, modalPlant }) {
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
                    <ModalContent>
                        <Contentwrapper>
                            <Plantcard showModal={showModal}
                                image={modalPlant.image}
                                name_de={modalPlant.name_de}
                                name_lat={modalPlant.name_lat} >
                            </Plantcard>
                            <ModalButton onClick={() => setShowModal(false)}>X</ModalButton>
                        </Contentwrapper>
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
background: grey;
position:fixed;
display:flex;
justify-content: center;
align-items:center;
z-index:10;
`

const Contentwrapper = styled.div`
position:relative;
`

const ModalContent = styled.div`
position:absolute;

max-height: calc(100vh - 210px);
overflow-y: auto;
`

const ModalButton = styled.span`
cursor: pointer;
position:absolute;
top:5%;
right:8%;
z-index: 10;
`