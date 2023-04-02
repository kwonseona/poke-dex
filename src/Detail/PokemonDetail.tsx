import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPokemonDetail, PokemonDetailType} from "../Service/pokemonService";
import PokeMarkChip from "../Common/PokeMarkChip";
import styled from "@emotion/styled";
import {PokeImageSkeleton} from "../Common/PokeImageSkeleton";

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null)

  useEffect(() => {
    if(!id) {
      return;
    }

    (async () => {
      const result = await fetchPokemonDetail(id)
      setPokemon(result)
    })()
  }, [id])

  if(!pokemon) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeleton/>
        </ImageContainer>
        <Footer>
          <PokeMarkChip/>
        </Footer>
      </Container>
    )
  }

  return (
    <Container>
      <ImageContainer>
        <a href={pokemon.images.officialArtworkFront}>
          <Image src={pokemon.images.officialArtworkFront} alt={pokemon.koreanName}/>
        </a>
      </ImageContainer>
      <Divider/>
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{`${pokemon.koreanName} (${pokemon.name})`}</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.type.toString()}</td>
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height} m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight} Kg</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
          {
            pokemon.baseStats.map(stat => (
              <TableRow key={stat.name}>
                <TableHeader>{stat.name}</TableHeader>
                <td>{stat.value}</td>
              </TableRow>
            ))
          }
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Container>
  )
}

const Container = styled.section`
  margin: 16px 32px;
  border: 1px solid #C0C0C0;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px #C0C0C0;
`

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  margin: 8px 0;
`

const Image = styled.img`
  width: 350px;
  height: 350px;
`

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dotted #D3D3D3;
`

const Body = styled.section`
  margin: 0 32px;
`

const Table = styled.table`
  width: 100%;
  margin: 0 auto 1rem;
  border-collapse: collapse;
  border-spacing: 0;
  
  th, td {
    padding: 6px 12px;
  }
`

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
`

const TableHeader = styled.th`
  color: #737373;
  font-size: .875rem;
  font-weight: normal;
  text-align: left;
  width: 1px;
  white-space: nowrap;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`

export default PokemonDetail
