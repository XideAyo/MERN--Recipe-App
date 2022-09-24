import React from 'react'
import { makeStyles } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import {Data} from '../Trending/TrendingData'
import { Link } from 'react-router-dom'



const Trending = () => {

    const useStyles = makeStyles((theme) => ({
        trend_container: {
            paddingLeft: 100,
            paddingRight: 100,
            marginTop: 50,
        },
        trendH1: {
            textAlign: "center",
            color: "#000",
            fontWeight: 600,
            fontSize: 27,
            [theme.breakpoints.down("xs")] : {
                marginTop: 250
            },
        },
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 6,
            width: 400
        },
    })) 

    const classes = useStyles()

    const items = Data.map((item, index) => {
        return(
            <Link to='/'>
                <div className={classes.card} key={item.id}>
                    <img src={item.img} alt="" className='img'/>
                    <h3>{item.title}</h3>
                    <p>{item.title_desc}</p>
                </div>
            </Link>
        )
    })

    const responsive ={
        0: {
            items: 2,
        },
        512: {
            items: 4,
        }
    }

    return (
        <>
            <div className={classes.trend_container}>
                <div className={classes.trendH1}>See Trending Recipes</div>
                    <AliceCarousel 
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        autoPlay
                        items={items}
                    />
            </div>
        </>
    )
}

export default Trending
