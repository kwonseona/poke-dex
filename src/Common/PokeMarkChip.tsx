import styled from "@emotion/styled";

const PokeMarkChip = () => {
  return (
    <Container>
      <Text>Pokémon</Text>
    </Container>
  )
}

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #C0C0C0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`

const Container = styled(Chip)`
  margin-left: auto;
  margin-right: 16px;
`

const Text = styled.span`
  padding: 0 8px;
  font-size: 14px;
`

export default PokeMarkChip