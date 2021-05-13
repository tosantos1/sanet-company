import styled from 'styled-components'

export const Container = styled.section`
   max-width: 1200px;
   margin: 0 auto;
   margin-top: 4rem;
   text-align: center;
    h3 {
        text-transform: uppercase;
        color: #100025;
        font-style: normal;
        font-weight: 600;
        line-height: 110%;
        
    }
    h1 strong {
        font-style: normal;
        font-weight: 800;
        font-size: 4rem;
        line-height: 110%;
        color: #240059;
    }
    h1{
        font-size: 3rem;
        font-style: normal;
        font-weight: 300;
        line-height: 79px;
    }
   .cards{
       margin-top: 1rem;
       padding: 3rem 0rem;

       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 2rem;
   }
   .card-item {
        background-color: #F0EDF4;
        border-radius: 20px;

        text-align: center;
        padding: 2rem 2rem;
        
        position: relative;

        h5 {
            text-transform: uppercase;
            font-size: .8rem;
            color: #868587;
        }
        h1{
            font-style: normal;
            font-weight: 600;
            font-size: 7rem;
            line-height: 110%;

            text-transform: uppercase;

            color: #100025;
        }
        h2 {
            font-style: normal;
            font-weight: 200;
            font-size: 48px;
            line-height: 110%;

            text-transform: uppercase;

            color: #100025;
        }
        h3 {
            font-style: normal;
            font-weight: 200;
            font-size: 1rem;
            line-height: 110%;
            padding: .4rem 1rem;
            

            color: #FFFFFF;
            text-transform: uppercase;


            background: #240059;
            border-radius: 8px;
        }
        p {
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 150%;
            color: #868587;
            margin: .5rem .5rem;
        }
        .cash {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            p {
                font-family: Sora;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 110%;
                /* or 26px */

                text-transform: uppercase;

                /* primary / purple-dark */

                color: #240059
            }
            h4 {
                font-family: Sora;
                font-style: normal;
                font-weight: 600;
                font-size: 48px;
                line-height: 110%;
                /* identical to box height, or 53px */

                text-transform: uppercase;

                /* primary / purple-dark */

                color: #240059;
            }
        }
        .btn {
            display: block;
            position: absolute;

            padding: .8rem 1.5rem;
            margin: 0 2rem;

            background: #240059;
            border: 2px solid #240059;
            
            border-radius: 20px;

            right:0;
            left: 0;
            bottom: -25px;

            transition: ease .25s;

            &:hover{
                transform: scale(1.1);
                border: 2px solid #FFD731;
            }

            a{ 
            font-family: Sora;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 110%;

            
            color: #fff;
            text-decoration: none;

            }
            
        }
        
        @media (max-width:1050px){
                .btn {
                }
            }
   }

   @media (max-width: 1050px) {
    .cards {
        display: grid;
       grid-template-columns: repeat(1, 1fr);
       gap: 2rem;
    }
    .card-item{
        margin: 2rem;
    }
   }

`