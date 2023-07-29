import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Lora', serif;
    line-height: 1.2;
    background: rgb(0,3,81);
    background: linear-gradient(338deg, rgba(0,3,81,1) 22%, rgba(90,31,155,1) 63%, rgba(92,8,156,1) 93%);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  padding: 0;
  border: none;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
`;
