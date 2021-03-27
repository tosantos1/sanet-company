import styled from 'styled-components'

export const Container = styled.header `
    .menu-mobile {
        display: none;
    }
    .navbar-desktop {
        margin: 0 auto;
        max-width: 1200px;
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .item-2{
        }
        
        .navlist-desktop{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.4rem;
            list-style: none;
        }
        .navlink-desktop {
            text-decoration: none;
            margin: 0.7rem 1.3rem;
            
            position: relative;
            
            &::after {
                content: "";
                position: absolute;

                top: 80%;
                left: 0px;

                width: 0%;
                height: 3px;
                
                transition: 1s ease;
                
                background-color: #FFCF15;
            }
            &:hover {

                 &::after{
                width: 105%;
            }
            }
        }
        li:nth-child(5){
            cursor: pointer;
            border: 2px solid #240059;
            border-radius: 1rem;
            padding: 0.8rem 1.5rem;

            transition: ease-in-out 1s;

            :hover {
                    background-color: #FFCF15;
            }
        }
    }
    @media (max-width: 1050px) {
        .navbar-desktop {
            display: none;
        }
    }
    .navbar-mobile {
        display: none;
        padding: 1rem;

        justify-content: space-between;
        align-items: center;
    }
    .logo-m {
    }
    .bx {
        width: 36px;
        height: 36px;

        position: relative;
        cursor: pointer;

        z-index: 999;
        transition: .7s ease;

        &::after {
            content: '';
            position: absolute;
            top: 40%;
            left: 17%;

            width: 70%;
            height: 2px;
            border-radius: 1rem;

            background: var(--purple);
        }
        &::before {
        content: '';
        position: absolute;
        top: 64%;
        left: 17%;

        width: 70%;
        height: 2px;

        transition: .7s ease;

        background-color: var(--purple);
        }
        
    }

    @media (max-width: 1050px) {
            .navbar-mobile{
                display: flex;
            }
        }

`