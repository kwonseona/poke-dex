import styled from "@emotion/styled";

interface PokeNameChipProps {
  id:number // 000
  numberColor: string // '#32CD32'
  name: string // 포켓몬
}

const PokeNameChip = (props:PokeNameChipProps) => {
  const renderNumber = (number:number) => {
    let result = '';
    const digits = 3;
    const numberString = number.toString();

    if (numberString.length < digits) {
      for (let i = 0; i < digits - numberString.length; i++)
        result += '0';
    }
    return result + numberString;
  }

  return (
    <Chip>
      <Number color={props.numberColor}>
        <NumberText>{renderNumber(props.id)}</NumberText>
      </Number>
      <Title>{props.name}</Title>
    </Chip>
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

const Number = styled.div<{ color: string}>`
  padding: 4px 6px;
  background-color: ${props => props.color};
  opacity: 0.8;
  border-radius: 16px;
`

const NumberText = styled.label`
  opacity: 1;
`

const Title = styled.h4`
  margin: 0 8px 0 6px;
`

export default PokeNameChip