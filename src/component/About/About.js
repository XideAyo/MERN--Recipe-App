import React from 'react'
import { makeStyles } from '@material-ui/core'
import { createTheme, ThemeProvider} from '@material-ui/core/styles'
import {Link} from "react-router-dom"
import {Data} from '../Carousel/CarouselData'

import AliceCarousel from 'react-alice-carousel'

const About = () => {

    const image = require("../../image/img1.jpg")

    const useStyles = makeStyles((theme) => ({
        about: {
            marginTop: 60,
            paddingTop: 50,
            paddingBottom: 50,
            background: "#000"
        },
        about_p : {
            textAlign: "center",
            fontSize: 16,
            color: "#29c5f6",
            textTransform: "uppercase"
        },
        about_heading: {
            fontSize: 27,
            color:'#fff',
            textAlign: "center",
            fontWeight: 600,
            marginTop: 10,
        }, 
        about_flex: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingRight: 100,
            paddingLeft: 100,
            [theme.breakpoints.down("lg")] : {
                paddingLeft: 20,
                paddingRight: 20,
                width: "100%",
                display: "block",
            }
        }, 
        about_item: {
            alignItems: "center",
            textAlign: "center",
            width: 300,
            marginTop: 40,
            [theme.breakpoints.down("xs")] : {
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: 'auto',
                marginRight: 'auto'
            },
        },
        about_icon:{
            fontSize: 34,
            color: "#29c5f6"
        },
        about_text: {
            fontSize: 18,
            marginBottom: 12,
            color: "#fff",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            [theme.breakpoints.down("xs")]: {
                fontSize: 16,
            }
        },
        text_flex:{
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 600,
            marginLeft: 20,
            [theme.breakpoints.down("xs")] : {
                width: "100%",  
                order: 1
            }
        },
        img: {
            width: 400,
            height: 400,
            borderRadius: 500,
            marginBottom: 20,
            
            [theme.breakpoints.down("sm")] : {
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        button:{
            background: "#29c5f6",
            fontSize: 16,
            padding: 20,
            textDecoration: "none",
            color: "#fff",
            borderRadius: 10,
            marginTop: 60,
            textAlign: 'center'
        }
    }))

    const classes = useStyles()

    return (
            <div className={classes.about} id="about">
                <div className='about-flex'>
                    <div className='image-wrap'>
                        <div>
                            <img src={image} alt="Food Image"  className='about-img' />
                        </div>
                    </div>
                    <div className="text-flex">
                        <p className={classes.about_p}>Who We Are</p>
                        <p className={classes.about_heading}>About Nutrix</p>
                        <p className={classes.about_text}>Nutrix helps users cook tasty, healthy & hygenic meals. Magnam in incidunt enim quidem suscipit accusantium, dolorem, aliquid ratione iste dolorum ab tempora.</p>
                        <p className={classes.about_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis, aut quos quae at et delectus. Magnam in incidunt enim quidem suscipit accusantium, dolorem, aliquid ratione iste dolorum ab tempora.</p>
                        <Link to='/search' className={classes.button}>See Recipes</Link>
                    </div>
                </div>
            </div>
    )
}

export default About
