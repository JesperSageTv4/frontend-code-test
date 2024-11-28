import styled from 'styled-components'

const colors = {
  "Construction Worker": "#FFA07A",
  "Construction Expeditor": "#98FB98",
  "Estimator": "#87CEFA",
  "Project Manager": "#FFB6C1",
  "Construction Foreman": "#E0FFFF",
  "Surveyor": "#FFB6C1",
  "Engineer": "#FFFFE0",
  "Electrician": "#FFD700",
  "Construction Manager": "#90EE90",
  "Architect": "#DDA0DD",
  "Supervisor": "#FF69B4",
  "Subcontractor": "#ADD8E6"
}

type Props = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  city: string;
  experience: number;
  price: number;
}

export const Card = ({ avatar, first_name, last_name, email, role, city, experience, price }: Props) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt={`${first_name} ${last_name}`} />
      <Container>
        <InfoWrapper>
          <Name>{first_name} {last_name}</Name>
          <Text>{email}</Text>
          <Text>Price: <b>{price}€</b></Text>
        </InfoWrapper>
        <LastInfoWrapper>
          <Label style={{ backgroundColor: colors[role as keyof typeof colors] }}><Text>{role}</Text></Label>
          <Text>Experience: {experience} years</Text>
          <Text>{city}</Text>
        </LastInfoWrapper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div({
  backgroundColor: 'whitesmoke',
  padding: 12,
  display: 'flex',
  gap: 8,
  borderRadius: 8,
  width: 800,
  alignItems: 'center',
  boxSizing: 'border-box',
})

const Avatar = styled.img({
  width: 50,
  height: 50,
})

const Container = styled.div({ 
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

const InfoWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

const LastInfoWrapper = styled(InfoWrapper)({
  textAlign: 'right',
})

const Name = styled.h3({
  margin: 0,
})

const Text = styled.p({
  margin: 0,
})

const Label = styled.div({
  paddingBlock: 2,
  paddingInline: 8,
  borderRadius: 4,
  alignSelf: 'flex-end',
})