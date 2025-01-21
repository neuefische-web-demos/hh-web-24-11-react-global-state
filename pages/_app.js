import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  {
    id: "1",
    name: "Cats",
    count: 0,
  },
  {
    id: "2",
    name: "Dogs",
    count: 0,
  },
  {
    id: "3",
    name: "Sheep",
    count: 0,
  },
  {
    id: "4",
    name: "Dragons",
    count: 0,
  },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) =>
        animalId === animal.id ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(animalId) {
    setAnimals(
      animals.map((animal) => {
        if (animal.id === animalId) {
          return { ...animal, count: animal.count - 1 };
        } else {
          return animal;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </Layout>
    </>
  );
}
