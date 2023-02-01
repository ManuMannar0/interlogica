import SweetComp from './SweetComp';
import styled from "styled-components";
import { SiteTitle, infoCopyButton, currency, sweety } from './datas';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INGREDIENTS_BOX_VISIBLE } from './store/ingredientsDetails/actions';
import { isvisibleSelector, ingredientsSelector, titleSelector } from './store/ingredientsDetails/selectors';

const StyledIngredientsDetailsBkg = styled.div`
  display: ${props => props.isvisible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`
const StyledIngredientsDetails = styled.div`
  display: ${props => props.isvisible ? 'block' : 'none'};
  position: absolute;
  padding: 1rem;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  button {
    margin-left: 90%;
    cursor: pointer;
  }
`

const IngredientsDetails = (props) => {
  const dispatch = useDispatch()
  const isVisible = useSelector(isvisibleSelector)
  const ingredients = useSelector(ingredientsSelector)
  const title = useSelector(titleSelector)
  return(
    <>
      <StyledIngredientsDetailsBkg isvisible={isVisible}/>
      <StyledIngredientsDetails isvisible={isVisible}>
        <button onClick={() => dispatch(SET_INGREDIENTS_BOX_VISIBLE(false))}>X</button>
        <h1>{title}</h1>
        <h3>Ingredienti:</h3>
        <ul>
          {
            Object.entries(ingredients).map((el, i) => {
              return(
                <>
                  <li key={i}>{el[0]} - {el[1]}</li>
                </>
              )
            })
          }
        </ul>
      </StyledIngredientsDetails>
    </>
  )
}

const App = () => {  
  return (
    <main style={{padding: '1rem'}}>
      <h1 style={{textAlign: 'center', paddingBottom: '1rem'}}>{SiteTitle}</h1>
      <IngredientsDetails />
      {
        sweety
          .map((el, i) => <SweetComp 
                        key={i}
                        name={el.name} 
                        price={el.price} 
                        ingredients={el.ingredients} 
                        img={el.img} 
                        description={el.description} 
                        buttonCopy={infoCopyButton} 
                        currency={currency} 
                      />)
      }
    </main>
  );
}

export default App;
