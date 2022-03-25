
import {makeStyles} from "@material-ui/core"
import cover from "../0x.png"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    redSpan: {
        color: "red"
    },
    img: {
        width: "400px",
    },
    logo: {
        fontSize: 45,
        background: 'linear-gradient(15deg, #000000 0%, #9F9F9F 90%)',
        color: "white",
        border: 0,
        borderRadius: 10,
    }
}))

// header is a function () and here is what it does => {}
export const Header = () => {

    const classes = useStyles()

    return(

        <div className={classes.container}>
            <img className={classes.img} src={cover} />
        </div>

    )
}
