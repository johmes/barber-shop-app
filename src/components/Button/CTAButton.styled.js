import styled from 'styled-components';

export const Button = styled.button`
    float: left;
    background: ${({ theme, hierarchy }) => hierarchy === 'primary' ? theme.colorPrimary : 'transparent'};
    outline: none;
    margin: 0 15px 0 0;
    padding: 10px 20px;
    box-shadow: 0px 3px 6px #00000029;
    border: ${({ theme, hierarchy }) => hierarchy === 'primary' ? '2px solid ' + theme.colorPrimary : '2px solid ' + theme.primaryLight};
    border-radius: 4px;
    text-align: center;
    color: ${({ theme, hierarchy }) => hierarchy === 'primary' ? theme.primaryDark : theme.primaryLight};
    font-weight: ${({ theme, hierarchy }) => hierarchy === 'primary' ? theme.fontMedium : theme.fontThin};
    font-size: ${({ theme }) => theme.mediumTextFont};
    cursor: pointer;

    &:hover {
        transition: all .1s linear;
        background: ${({ theme, hierarchy }) => hierarchy === 'primary' ? theme.primaryHover : 'transparent'};
        color: ${({ theme, hierarchy }) => hierarchy === 'primary' ? theme.primaryDark : theme.secondaryHover};
        border: ${({ theme, hierarchy }) => hierarchy === 'primary' ? '2px solid ' + theme.primaryHover : '2px solid ' + theme.secondaryHover};
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        float: none;
        margin: 6px auto;
        font-size: ${({ theme }) => theme.smallTextFont};
      }

`;