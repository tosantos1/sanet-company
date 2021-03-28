import styled from 'styled-components'

export const Section = styled.section `
    max-width: 1200px; 
    margin: 0 auto;
    padding: 1rem 0rem;
    margin-top: 2rem;

    h3 {
        text-transform: uppercase;
        color: #100025;
        font-style: normal;
        font-weight: 600;
        line-height: 110%;

        text-align: center;
    }
    h1 {
        font-style: normal;
        font-weight: 800;
        font-size: 4rem;
        line-height: 110%;
        color: #240059;
        
        text-align: center;
    }
    .cards-benefits {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-benefits {
        background: #FAF8FE;
        border-radius: 0px 0px 20px 20px;
        img {
            width: 100%;
        }

        h2 {
            background-color: none;
        }
        
        h2 {
            text-align: center;
            padding: 1rem 1rem;
            text-transform: uppercase;

            color: #100025;
            font-size: 1.2rem;
        }

        p{
            text-align: center;
            padding: 1.3rem 1rem;

            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 150%;
            color: #868587;
            background: #F0EDF4;
        }
        p:nth-child(6){
            border-radius: 0px 0px 20px 20px;
        }    
    }

    @media (max-width: 1050px) {
        .cards-benefits{
            flex-direction: column;
            padding: 1rem 1rem;
        }
        img {
            width: 80%;
        }
        h2 { 
            margin: 1.5rem;
        }
    }

`

