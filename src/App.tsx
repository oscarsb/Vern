import { Box, Heading, Page } from '@navikt/ds-react'
import { Verdiprofil } from './components/Verdiprofil'

function App() {
  return (
    <main>
      <Page.Block as="header" width="lg" gutters>
        <Box paddingBlock="space-24">
          <Heading level="1" size="xlarge">
            Vern
          </Heading>
        </Box>
      </Page.Block>
      <Page.Block width="lg" gutters>
        <Verdiprofil />
      </Page.Block>
    </main>
  )
}

export default App