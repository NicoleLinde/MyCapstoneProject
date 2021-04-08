import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Links() {
    return (
        <Wrapper>
            <Link to='/Bee'>Biene</Link>
            <Link to='/Butterfly'>Falter</Link>
            <Link to='/Bird'>Vogel</Link>
        </Wrapper>
    )

}

const Wrapper = styled.div`
height: 100vh;
`



