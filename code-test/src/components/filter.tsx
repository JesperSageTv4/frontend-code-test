import styled from 'styled-components'

export const Filter = () => {
  return (
    <Wrapper>
      <Input placeholder="Search" />
      <Container>
        <div>
          <select>
            <option>Role</option>
          </select>
          <input type="range" />
        </div>
        <div>
          <select>
            <option>Order by</option>
          </select>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: 800,
  gap: 8,
})

const Input = styled.input({
  padding: 8,
  borderRadius: 4,
  border: '1px solid lightgray',
  width: '100%',
  boxSizing: 'border-box',
})

const Container = styled.div({
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
  width: '100%',
})