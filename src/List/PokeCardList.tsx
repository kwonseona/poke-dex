import PokeCard from "./PokeCard";
import {useEffect, useState} from "react";
import {fetchPokemons, PokemonListResponse} from "../Service/pokemonService";
import styled from "@emotion/styled";
import useInfiniteScroll from "react-infinite-scroll-hook";

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponse>({
    count: 0,
    next: '',
    results: []
  })

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: true,
    onLoadMore: async () => {
      const result = await fetchPokemons(pokemons.next)
      setPokemons({
        ...result,
        results: [...pokemons.results, ...result.results]
      })
    },
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 100px 0px',
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemons()
      setPokemons(result)
    })()
  }, [])

  return (
    <>
      <List>
        {
          pokemons.results.map((pokemon, idx) => (
            <PokeCard key={`${pokemon.name}_${idx}`} name={pokemon.name} resource={pokemon.url}/>
          ))
        }
      </List>
      <div ref={infiniteRef}>로딩</div>
    </>
  );
}

const List = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export default PokeCardList
