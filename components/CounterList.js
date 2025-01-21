import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => (
          <Counter
            key={animal.id}
            animalName={animal.name}
            onAdd={handleAdd}
            onSubtract={handleSubtract}
            id={animal.id}
            count={animal.count}
          />
        ))}
      </List>
    </>
  );
}
