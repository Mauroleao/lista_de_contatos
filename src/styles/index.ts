import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background: #f7fafc;
    color: #2d3748;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
`

export const Main = styled.main`
  background: #f7fafc;
  min-height: 100vh;
  overflow-y: auto;
`

export default EstiloGlobal
