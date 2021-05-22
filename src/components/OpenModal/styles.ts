import styled from 'styled-components';

export const Container = styled.form`
display: flex;
justify-content: center;
ul {
    width: 100%;
    list-style: none;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
li {
    & + li {
        margin-top: 2rem;
    }

    &:last-child {
        a {
            color: var(--yellow-light);
        }
    }

    a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.25rem;
    color: #FAF8FE;
    }
}

`