
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    fontSize: 11
  },
}))

// header is a function () and here is what it does => {}
export const Footer = () => {

    const classes = useStyles()

    return(
    <>
        <div className={classes.footer}>
            <footer><p>© 2022 by 0xBonanza, visit <a style={{ color: 'white' }} href="https://github.com/0xBonanza">our Github</a> for more!</p></footer>
        </div>
    </>
    )
}
