import React from 'react'
import {makeStyles, TextField} from '@material-ui/core'

const Contact = () => {
    const useStyles = makeStyles((theme) => ({
        contact_container: {
            background: "#fff",
            padding: 30,
            [theme.breakpoints.down("xs")]: {
                marginTop: 500
            }
        },
        contact_heading: {
            fontSize: 32,
            fontWeight:600,
            color: "#000",
            textAlign: "center",
            marginTop: 30
        },
        contact_p: {
            fontSize: 20,
            color: "grey",
            textAlign: "center"
        },
        contact_flex: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 30,
            [theme.breakpoints.down("xs")]: {
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center'
            }
        },
        button: {
            background: "#29c5f6",
            padding: 20,
            color: "#000",
            marginBottom: 20,
            height: 50,
            borderRadius: 6,
            cursor: "pointer",
            outline: "none"
        },
    }))

    const classes = useStyles()
    return (
        <div className='contact-container' id='contact'>
            <div className={classes.contact_heading}>
                Let's exchange
            </div>
            <div className={classes.contact_p}>We'll get back to you within 24hours</div>
            <div className={classes.contact_flex}>
                <TextField
                label="Your Email"
                variant="outlined"
                style={{ marginBottom: 20, width: "350px", fontSize: 20 }}
                />
                <TextField
                label="Your Message"
                variant="outlined"
                style={{ marginBottom: 20, width: "350px", fontSize: 20, fontFamily: "HK Grotesk"}}
                />
                <input type="submit" value="Send Message"  className={classes.button}/>
            </div>
        </div>
    )
}

export default Contact
