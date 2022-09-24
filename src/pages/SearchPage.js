import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { randomRecipes, selectedCuisine } from '../api'
import axios from 'axios'

const SearchPage = () => {
    
    const [openDropdown, setOpenDropdown] = useState(false)
    const [icon, setIcon] = useState(true)
    const [cuisine, setCuisine] = useState("")
    const [recipes, setRecipes] = useState([])

    const getRandomRecipes = async () => {

        const {data} = await axios.get(randomRecipes(100)) 
        const recipes = data.recipes

        setRecipes(recipes)
        console.log(recipes)
    }

    useEffect(() => {
        getRandomRecipes()
    }, [])

    const useStyles = makeStyles(() => ({
        search_container: {
            padding: 30
        },
        search_hero:{
            background: "#29c5f6",
            fontSize: 40,
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            borderRadius: 20,
        },
        button: {
            background: "#29c5f6",
            fontSize: 14,
            borderRadius: 7,
            color: "#fff",
            marginLeft: 20,
            marginBottom: 5,
            paddingLeft:20,
            paddingRight: 20,
            paddingTop: 14,
            paddingBottom: 14,
            border: "none",
            fontFamily: "Poppins"
        }
    }))

    const changeAfrican =async () => {

        setOpenDropdown(!openDropdown)
        setIcon(!icon)
        setCuisine("African")

        const {data} = await axios.get(selectedCuisine(cuisine))
        console.log(data.results)
        setRecipes(data.results)
        console.log(cuisine)
    }

    const changeAmerican =async () => {
        setCuisine("American")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeBritish = async () => {
        setCuisine("British")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeChinese =async () => {
        setCuisine("Chinese")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeIndian =async () => {
        setCuisine("Indian")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeMexican =async () => {
        setCuisine("Mexican")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeSpanish =async () => {
        setCuisine("Spanish")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }
    const changeKorean =async () => {
        setCuisine("Korean")
        setOpenDropdown(!openDropdown)
        setIcon(!icon)

        const {data} = await axios.get(selectedCuisine(cuisine))
        setRecipes(data.results)
    }

    const classes = useStyles()

    const onClick = () => {
        setOpenDropdown(!openDropdown)
        setIcon(!icon)
    }
    


    return (
        <div className={classes.search_container}>
            <div className={classes.search_hero}>
                See Recipes
            </div>
            <div className='input-flex'>
                <div>
                    <p className='cuisine' onClick={onClick}>{
                        cuisine ? cuisine : "Select Cuisine"
                    }</p>
                    {openDropdown ? 
                        <div className='dropdown'>
                            <div>
                                <p onClick={changeAfrican}>African</p>
                                <p onClick={changeAmerican}>American</p>
                                <p onClick={changeBritish}>British</p>
                                <p onClick={changeChinese}>Chinese</p>
                            </div>
                            <div>
                                <p onClick={changeIndian}>Indian</p>
                                <p onClick={changeMexican}>Mexican</p>
                                <p onClick={changeSpanish}>Spanish</p>
                                <p onClick={changeKorean}>Korean</p>
                            </div>
                        </div> : null}
                    <span className='icon' onClick={onClick}>{icon? <FaChevronDown /> : <FaChevronUp/>}</span>    
                </div>
            </div>
            <div className='recipes-flex'>
                    {recipes.map((recipe, index) => {
                        return(
                            <Link to={`/single_recipe/${recipe.id}`} className='recipe-card' key={recipe.id}>
                                <img src={recipe.image} alt="" className='img2'/>
                                <h3>{recipe.title}</h3>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default SearchPage
