import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1200px;
    margin: 5rem auto;
    #box-suport{
        margin-top:1rem;
        display: grid;
        text-align: center;

        h1 {
            color: var(--purple-dark);
            font-weight: 700;
            font-size: 3rem;
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
                border: 0.1rem solid var(--purple-light);
                border-radius: 20px;
                background: #FBFAFF;
                padding: 1rem 0.2rem;
                width: 100%;
                font-size: 1.5rem;
                font-weight: 400;
                color: var(--gray-dark);
            }

            #submitForms{
                width:30%;
                padding:0.7rem;
                background: var(--purple-light);
                border-radius: 16px;
                font-size: 1.125rem;
                color: #F3F0F5;
                :hover{
                    cursor: pointer;
                    opacity: 0.96;
                    transition: 0.2;
                }
            }

            #msg{
                margin: 3rem auto 0;

                textarea {
                    width: 100%;
                    border: 0.1rem solid var(--purple-light);
                    border-radius: 20px;;
                    resize: none;
                    padding: 0.35rem;
                }
            }
        }
    }

    @media(max-width: 1080px){
        #box-suport{
            h1{
                font-size: 93.75%;
            }
            
            form {
                input {
                    font-size: 93.75%;
                    padding: 0.3rem;
                }

                #submitForms {
                    width: 40%;
                    font-size: 93.75%;
                }

                #msg {
                    textarea {
                        font-size: 93.75%;
                    }
                }
            }
        }       
    }
`