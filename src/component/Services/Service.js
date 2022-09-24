import React from 'react'
import { makeStyles } from '@material-ui/core'
import { FaAmazon, FaAndroid, FaArchive } from "react-icons/fa";

const Service = () => {
    const useStyles = makeStyles((theme) => ({
        service: {
            marginTop: 50,
            paddingBottom: 50,
            [theme.breakpoints.down('xs')] : {
                
            }
        },
        service_heading: {
            fontSize: 27,
            color:'#000',
            textAlign: "center",
            fontWeight: 600,
            marginTop: 10
        },
        service_desc: {
            width: 500,
            fontSize: 16,
            color:'grey',
            marginTop: 10,
            textAlign: 'center',
            [theme.breakpoints.down("xs")] : {
                width: '100%',
                paddingLeft: 10,
                paddingRight: 10
            }
        },
        service_title: {
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40
        },
        card_flex:{
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            paddingRight: 100,
            paddingLeft: 100,
            marginTop: 30,
        },
        card_icon1:{
            fontSize: 30,
            padding: 10,
            borderRadius: 10,
            color: "black"
        },
        card_icon2: {
            fontSize: 30,
            padding: 10
        }
    }))

    const classes = useStyles()

    return (
        <div className={classes.service} id='services'>
            <div className={classes.service_title}>
                <p className={classes.service_heading}>What We Provide</p>
                <p className={classes.service_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente culpa deserunt eligendi, ut nobis! Inventore hic nihil repellat quisquam, quis itaque incidunt? Quam blanditiis voluptatum omnis impedit aliquam provident.</p>
            </div>
            <div  className='card-flex'>
                <div className='card'>
                    <p className={classes.card_icon2}>
                        <FaAndroid />
                    </p>
                    <p>Recipe to Meals</p>
                    <p>Steps to make meals</p>
                </div>
                <div className='card2'>
                    <p className={classes.card_icon1}>
                        <FaAmazon />
                    </p>
                    <p>Recipe to Meals</p>
                    <p>Steps to make meals</p>
                </div>
                <div className='card'>
                    <p className={classes.card_icon2}>
                        <FaArchive />
                    </p>
                    <p>Recipe to Meals</p>
                    <p>Steps to make meals</p>
                </div>
            </div>
        </div>
    )
}

export default Service
