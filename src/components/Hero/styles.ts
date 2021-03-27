import styled from 'styled-components'

export const Container = styled.section `
   max-width: 1200px;
   margin: 0 auto;

   .hero-home{
       display: flex;
       justify-content: space-between;
       align-items: center;
       
       
       margin-top: 1rem;
   }
   .text-btn {
       h1 {
            font-size: 5rem;
       }
       p{
           font-size: 1rem;
           line-height: 150%;
           color: #89898B;
       }
   }
   .btns{
       margin-top: 2rem;
         a:nth-child(1){
            border: 3px solid #280063;
            color: #FFFFFF;
            background: var(--purple);

            border-radius: 1rem;
            padding: 1rem 2rem;
            margin-right: 1rem;

            text-decoration: none;
        }
        a:nth-child(2){
            border: 3px solid #280063;

            border-radius: 1rem;
            padding: 1rem 3.5rem;

            text-decoration: none;
        }
   }
   .plans {
       img {
           width: 100%;
       }
   }
   @media (max-width:720px){
    .hero-home{
        display: flex;
        flex-direction: column;
        
        text-align: center;
    }
    .text-btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 3.5rem;
        }
    }
    .btns{
        
        align-items: center;
        text-align: center;
    }
    .plans{
        margin-top: 3rem;
    }

   }
   @media (max-width:336px){
       .btns{
           a:nth-child(1){
               padding: 1rem 1rem;
           }
           a:nth-child(2){
               padding: 1rem 2.5em;
           }
       }
   }


`