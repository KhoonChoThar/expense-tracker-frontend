import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
:root{
    --primary-color: #ffe924;
    --secondary-color: #FBF8DD;
    --tertiary-color: #A34343;
    --quaternary-color: #C0D6E8;
    --red-color: #ff0404;
    --green-color: #b7ff8a;
    --blue-color: #074173;
}
body{
    font-family: "Sedan", serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--blue-color);
}
.error{
    color: var(--tertiary-color);
animation: shake 0.5s ease-in-out;
@keyframes shake{
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
}
}
`;
