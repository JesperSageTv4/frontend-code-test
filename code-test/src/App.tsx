import styled from 'styled-components'
import data from './data/MOCK_DATA.json'
import { useState } from 'react'
import { Card } from './components/card'
import { Filter } from './components/filter'

function App() {
  const [contractors] = useState(data)

  return (
    <Wrapper>
      <Title>Find your contractor</Title>
      <Filter />
      <CardWrapper>
        {contractors.map((contractor) => (
          <Card key={contractor.id} {...contractor} />
        ))}
      </CardWrapper>
    </Wrapper>
  )
}

const Title = styled.h1({
  fontSize: '4rem',
})

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 16,
})

const CardWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export default App
