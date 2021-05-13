import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1200px;
    margin: 5rem auto;
    #box-suport{
        margin-top:1rem;
        display: grid;
        text-align: center;
        h1{
            color: var(--purple-dark);
            font-weight: 700;
            font-size: 48px;
        }
        form{
            display: grid;
            padding: 1.5rem;
            margin: auto;
            width: 50%;
            
            input{
                :first-child{
                    margin-top:0;
                }
                margin: 3rem auto 0;
                border: 1.6px solid var(--purple-light);
                border-radius: 20px;
                background: #FBFAFF;
                padding: 1rem 0.2rem;
                width: 100%;
                font-size: 24px;
                font-weight: 400;
                color: var(--gray-dark);
            }
            #submitForms{
                width:30%;
                padding:0.7rem;
                background: var(--purple-light);
                border-radius: 16px;
                font-size: 18px;
                color: #F3F0F5;
                :hover{
                    cursor: pointer;
                    opacity: 0.96;
                    transition: 0.2;
                }
            }
            textarea{
                margin: 3rem auto 0;
                resize: none;
                border: 1.6px solid var(--purple-light);
                border-radius: 20px;
                padding:0.35rem;
            }
        }
    }
`