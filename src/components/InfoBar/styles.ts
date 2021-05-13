import styled from 'styled-components';

export const Container = styled.section`
background: var(--purple-light);
margin-top: 5rem;
`;

export const Content = styled.div`
max-width: 100%;
margin: 0 auto;
padding: 7rem 0;

ul {
    display: flex;
    justify-content: space-evenly;

    h2 {
        margin-bottom: 1rem;
        font-family: 'Sora', sans-serif;
        font-weight: 300;
    }

    li {
        display: flex;
        flex-direction:column;
        color: #FEFBFF;
        text-align: left;
        
        a {
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 400;
            text-decoration: none;
            color: #FAF8FE;
            margin-bottom: 1rem;
        }
    }
}

#APP {
    display: flex;
    margin-right: 20%;
    margin-left: 50%;
    position: relative;
    bottom: 2rem;
    justify-content: space-between;
    color: #FBF9FC;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        padding: 0.6rem 2.4rem 0.6rem 1.2rem;
        border-radius: 5px;
        border: 1px solid #EDEAEF;
        background: #EDEAEF;

        img {
            width: 1.17vw;
        }

        p {
            font-family: 'Assistant', sans-serif;
            color: var(--purple-dark);
            font-size: 12px;

            margin-left: 1rem;
            text-align: left;
            
            p {
                font-weight: bold;
                font-size: 16px;
                margin: 0;
                padding: 0;
            }
        }
    }
}

#line{
    margin: 2.5rem auto;
    background: #ffffff;
    height: 0.105rem;
    width: 90%;
    }
#lastBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 90%;
    padding: 1rem 2rem;
    
    #lastBarLogo {
        display: flex;
        align-items: center;
        
        img {
            margin-right: 0.5rem;
            width: 9vw;
        }

        p {
            color: #FBF9FC;
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 16px;
        }
    }

    #socialMedias {
        display: flex;
        padding: 1rem;
        margin-right: 6rem;
        align-items: center;
        
        img {
            margin-left: 1.5rem;
        }
    }
}
`;