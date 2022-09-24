import React from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Jumbotron = () => {

    const image = require("../../image/Chef-cuate.png")

    const useStyles = makeStyles((theme) => ({
        container: {
            paddingLeft: 100,
            paddingRight: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            marginTop: 40,
            [theme.breakpoints.down("xs")] : {
                paddingLeft: 10,
                paddingRight: 10,
                display: "block",
                textAlign: "center"
            },
            [theme.breakpoints.down("md")] : {
                paddingLeft: 20,
                paddingRight: 20,
            },
        },
        jumbotron_text: {
            width: "100%",
            flexBasis: "100%",
            padding: 10,
            display: 'flex',
            flexDirection:"column",
            [theme.breakpoints.down("md")]: {
                width: "100%",
                flexBasis: "100%",
            },
            [theme.breakpoints.down("xs")]: {
                justifyContent: "center",
                alignItems: 'center',
            }
        },
        jumbotron_img: {
            width: '100%',
            flexBasis: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                width: "100%",
                flexBasis: "100%"
            }
        },
        button: {
            background: "#29c5f6",
            width: '150px',
            padding: 15,
            fontSize: 16,
            textAlign: "center",
            borderRadius: 6,
            textDecoration: "none",
            color: "#fff",
            alignItems: "center",
            marginLeft: 20,
            [theme.breakpoints.down("sm")]: {
                width: '120px',
                fontSize: 14,
                borderRadius: 6,
                textAlign: "center"
            },
            img: {
                width: 300,
                height: 300,
                [theme.breakpoints.down("xs")]: {
                    width: 200,
                    height: 200
                }
            }
        }
    }))
    
    const classes = useStyles()
    return (
        <>
            <div className='container'>
                <div className="jumbotron-text">
                    <div style={{
                            fontWeight: 600,
                            fontFamily: "HK Grotesk",
                            fontSize: 32,
                            lineHeight: 1.1,
                            padding: 20,
                        }}>
                            Find the recipes to your favourite meals easily
                    </div>
                    <div style={{
                            fontFamily: "HK Grotesk",
                            fontSize: 18,
                            lineHeight: 1.2,
                            letterSpacing: .6,
                            padding: 20,
                            color: "grey",
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione qui ipsa reiciendis, praesentium sit minima doloribus. Atque tempora dolor deserunt suscipit. Tempore, in est? Quis ea optio laudantium blanditiis dolor?
                    </div>
                    <Link to='/search' className={classes.button}>See Recipes</Link>
                </div>
                <div className='jumbotron-image'>
                    <div className='glass'>
                        <img src={image} className='image'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
