import { useState, useRef } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Lupe from '../assets/loupe.svg'
import Modal from '../components/Modal'
import Logo from '../assets/plantLife.svg'

export default function Searchbar({ plants, onSelectFavorites, isFavorite, favorites }) {

    const [input, setInput] = useState('');
    const [filterDisplay, setFilterDisplay] = useState([]);
    const [inputChanged, setInputChanged] = useState(false);
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalPlant, setModalPlant] = useState()

    const inputFocus = useRef();

    const handleChange = ((value) => {

        if (value !== '') {
            let newList = [];
            setInput(value);
            newList = plants.filter(plant => plant.name_de.toLowerCase().includes(input.toLowerCase()));
            setFilterDisplay(newList);
            setInputChanged(true)

        } else if (value === '') {
            setInputChanged(false)
            setInput('')
        }

        else {
            setFilterDisplay(plants);
        }
    });

    function handleClick(plant, i) {
        const inputPlant = filterDisplay.find((plant, index) => {
            return index === i
        });
        setInput(inputPlant.name_de)

        setModalPlant(inputPlant)
    }

    function onFormSubmit(event) {
        event.preventDefault();
        setInput('');
        setSearchBarOpen(false);
        setInputChanged(false);
        setShowModal(true)



    }
    return (
        <div>
            <HeaderImg src={Logo} />

            <Form
                searchBarOpen={searchBarOpen}
                onClick={() => {
                    setSearchBarOpen(true)
                    inputFocus.current.focus();
                }}
                onFocus={() => {
                    inputFocus.current.focus();
                }}
                onSubmit={onFormSubmit}>
                <Button searchBarOpen={searchBarOpen}><Img src={Lupe} /></Button>
                <Input
                    onChange={event => handleChange(event.target.value)}
                    value={input}
                    ref={inputFocus}
                    searchBarOpen={searchBarOpen}
                    placeholder="Search for plants" />
                <SubmitButton type='submit' searchBarOpen={searchBarOpen}>Submit</SubmitButton>
            </Form>

            <Container inputChanged={inputChanged}   >
                {filterDisplay.map((plant, i) => (

                    <Items key={i} onClick={() => handleClick(plant, i)} >
                        {plant.name_de} &nbsp;

                    </Items>
                ))} </Container>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                modalPlant={modalPlant}
                onSelectFavorites={onSelectFavorites}
                isFavorite={isFavorite}
                favorites={favorites}></Modal>

        </div>
    )
}

const HeaderImg = styled.img`
margin: 2rem 0 0 2rem;
`


const Container = styled.div`
display: ${props => (props.inputChanged ? 'block' : 'none')};
width: 13rem;
margin: 0 1.5rem 3rem auto;
background-color: linear-gradient(0deg, var(--primary) 40%, #dee8db 69%, #FFFFFF 100%);
margin-top:-0.2rem;
padding: 0.5rem;
border-radius: 0 0 0.5rem 0.5rem;
`
const Items = styled.p`
  margin: 0.25rem 1.1rem;
  padding: 0 0.6rem;
  height: 1rem;
  font-size: 0.7rem;
  font-weight: 300;
  cursor: pointer;
  color: var(--primary);
  letter-spacing: 0.03rem;

`

const Form = styled.form`
position:relative;
display:flex;
align-items: center;
boxshadow:0 4px 8px rgba(0,0,0,0.2);
background-color:#96B78E;
width: ${props => (props.searchBarOpen ? '14rem' : '3rem')};
cursor: ${props => (props.searchBarOpen ? 'auto' : 'pointer')};
padding: 0.8rem;
border-radius: 10rem;
transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
margin:1rem 1rem 0 auto;
`
const Input = styled.input`
font-size: 14px;
line-height: 1.5;
background-color:transparent;
width: 80%;
border:none;
color:white;
transition:margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

&:focus,
&:active {
    outline: none;
}
&::placeholder{
    color:white;
}
`

const Button = styled.button`
line-height:1.5;
pointer-events: ${props => (props.searchBarOpen ? 'auto' : 'none')};
cursor:${props => (props.searchBarOpen ? 'pointer' : 'none')};
background-color:transparent;
border:none;
outline:none;
color:white;
`

const Img = styled.img`
height:1rem;
`

const SubmitButton = styled.button`
border:none;
outline: none;
background-color:transparent;
display:${props => (props.searchBarOpen ? 'inline' : 'none')};
color: white;
cursor:pointer;
`


Searchbar.propTypes = {
    plants: PropTypes.array
}