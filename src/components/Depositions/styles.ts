import styled from 'styled-components'

export const Container = styled.section `
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 3rem;
    h3{
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 110%;

        text-transform: uppercase;

        color: #240059;
    }
    h1{
        text-align: center;
        margin-bottom: 2rem;

        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 110%;

        color: #240059;
    }
    .card-depositions{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-d {
        background: #F0EDF4;

        border-radius: 1.5rem;

        padding: 2rem 2rem;
        margin: 1rem 1rem;

        img {
            margin-bottom: .5rem;
        }
        h4 {
            font-family: Sora;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 110%;
            color: #353436;
            margin-bottom: .5rem;
        }
        p {
            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 150%;

            color: #868587;
        }
    }
    @media (max-width: 1050px) {
        .card-depositions{
            flex-direction: column;
        }
    }


`