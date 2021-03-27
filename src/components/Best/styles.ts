import styled from 'styled-components'
import entailImg from '../../assets/entail.svg';

export const Section = styled.section `
    max-width: 1200px; 
    margin: 0 auto;
    padding: 1rem 0rem;
    .best {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 2rem;
        
        border-radius: 25px;

        background: #F0EDF4;
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: relative;

        padding: 4rem 0rem;

        &::after {
            content: '';
            display: block;
            position: absolute;

            top: 0;
            left: 50%;

            transform: translate(-50%, 0);

            width: 124px;
            height: 32px;
            background-image: url(${entailImg});
            background-repeat: no-repeat;
        }
    }
    .flex-item-auto {
        margin: 1rem 2rem;
    }
    .best-item{
        margin: 1rem 2rem;
        text-align: center;
        img{
            width: 72px;
            height: 72px;

            border-radius: 1rem;

            padding: 1rem 1rem;
            margin: 1rem 1rem;
            
            background: #FEFBFF;
        }
    }
    @media (max-width: 720px) {
        padding: 1rem 1.5rem;
        .best{
            flex-direction: column;
        }
        img{
            margin: 1rem 2rem;
        }
    }

`