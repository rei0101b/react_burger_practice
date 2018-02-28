import React from 'react';
import classes from './Burger.css';
import BurgerIndredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey =>{
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIndredient key={igKey + i} type={igKey} />;
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIndredient type="bread-top" />
      {transformedIngredients}
      <BurgerIndredient type="bread-bottom" />
    </div>
  );
}

export default burger
