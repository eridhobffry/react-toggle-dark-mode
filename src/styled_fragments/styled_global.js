import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: all 0.25s linear;
    }

    footer {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
    }

    small {
        display: block;
    }

    button {
        display: block;
    }

    a {
        color: ${({ theme }) => theme.text}
    }
`;
