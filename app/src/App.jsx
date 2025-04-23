import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import styled from "styled-components";
import SearchResults from './components/SearchResults/SearchResults';



export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
  
      try{
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
  
        setData(json);
        setFilteredData(json);
        setLoading(false);
      }catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);



  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    
    if(searchValue == ""){
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if(type == "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };


  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ]

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>


    return (
      <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src="/image/logo3.png" alt="logo" />
          </div>

          <div className='search'>
            <input onChange={searchFood} placeholder="Search Food" />

          </div>
        </TopContainer>

        <FilterContainer>
          {
            filterBtns.map((value) =>(
              <Button
              isSelected={selectedBtn == value.type}
              key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
            ))
          }
        
        </FilterContainer>

      </Container>

      <SearchResults data={filteredData}/>

      </>
    )
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`

  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid #8AA1B1;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder{
        color: black;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }

  .logo {
    img{
    max-width: 150px;

  }
}
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({isSelected}) =>(isSelected  ? "#949DA4": "#8AA1B1")};
  outline: 1px solid ${({isSelected}) =>(isSelected  ? "#383636": "#8AA1B1")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #949da4;
  }

`; 


