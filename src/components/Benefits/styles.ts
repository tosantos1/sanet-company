import styled from 'styled-components'

export const Section = styled.section `
    max-width: 1200px; 
    margin: 0 auto;
    padding: 1rem 0rem;

    border: 1px solid red;

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
    .title-benefits{
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1rem 1rem;
    }
    .cards-benefits {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-benefits {
        background-color: #F0EDF4;
        border-radius: 0px 0px 20px 20px;

        h2 {
            background-color: none;
        }
        
        h2 {
            text-align: center;
            padding: 1rem 1rem;
        }

        p{
            text-align: center;
            padding: 1rem 1rem;

            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 150%;
            color: #868587;
        }

        
    }

`

