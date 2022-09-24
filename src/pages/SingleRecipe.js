import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { singleMeal } from '../api'
import ReactHtmlParser from 'react-html-parser'
import {FiClock} from 'react-icons/fi'
import {BiDish} from 'react-icons/bi'

const SingleRecipe =() => {
    const {id} = useParams()
    const [meal, setMeal] =useState([])
    const [mealArray, setMealArray] = useState([])
    const [steps, setSteps] = useState([])

    const getMealRecipe = async () => {
        const {data} =await axios.get(singleMeal(id))
        const meal = data
        setMeal(meal)
        setMealArray(meal.extendedIngredients)
        console.log(meal)

        const mealInstruction = meal.analyzedInstructions.map((food) => food.steps.map((step) => step.step))

        console.log(mealInstruction)
        setSteps(mealInstruction)
    }

    useEffect(() => {
        getMealRecipe()
    }, [])

    const useStyles = makeStyles((theme) => ({
        container: {
            padding: 40
        },
        recipe_flex:{
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("lg")]: {
                flexDirection: "column"
            }
        },
        recipe_picture: {
            flexBasis: "50%",
            alignItems: "center",
        },
        recipe_desc: {
            flexBasis: "50%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: 20,
            fontWeight: 500,
        },
        img: {
            width: 500,
            height: 500
        },
        meal_title: {
            fontSize: 30,
            fontWeight:700,
            color:'#29c5f6'
        },
        icons:{
            fontSize: 40,
            color: '#29c5f6'
        }
    }))

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className="recipe-flex">
                <div className={classes.recipe_picture}>
                    <img src={meal.image} alt=""  className={classes.img}/>
                </div>
                <div className={classes.recipe_desc}>
                    <h1 className={classes.meal_title}>{meal.title}</h1>
                    <h2>{ReactHtmlParser(meal.summary)}</h2>
                   <div className='time-flex'>
                        <div>
                            <div className={classes.icons}><FiClock /></div>
                            <h3>Time to Cook : {meal.readyInMinutes}mins</h3>
                        </div>
                        <div>
                            <div className={classes.icons}><BiDish /></div>
                            <h3>Serving : {meal.servings} people</h3>
                        </div>
                   </div>
                </div>
            </div>
            <div className="ing-container">
                <div className='ingredients'>
                    <h2>Ingredients: </h2>
                    {mealArray.map((ing, index) => {
                                return(
                                    <div className='ing'>
                                        <p>{ing.original}</p>
                                    </div>
                                )
                            })}
                </div>
                <div className='steps'>
                    <h2>Steps to Prepare</h2>
                    {steps.map((step,index) => {
                        return(
                            <p className='step-p'>{steps}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe
