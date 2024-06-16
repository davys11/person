import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100..1000&family=Poppins:wght@300;400;500;600;700&display=swap');

    body {
        margin: 0;
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};

        &:hover {
            color: ${theme.colors.aHover}
        }
    }

    ul {
        list-style: none;
    }

    button {
        background: unset;
        border: none;
    }
`