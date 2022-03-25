
import {makeStyles, List, ListItem} from "@material-ui/core"
import react from "../react.png"
import solidity from "../solidity.png"
import contact from "../contact.png"
import logo from "../0xLogo.png"
import lknd from "../linkedin.png"
import mail from "../mail.png"
import twitter from "../twitter.png"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(1),
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        color: "black"
    },
    list: {
        display: "flex",
        marginBottom: 24,
        listStyleType: "none",
        color: '#F2F2F2',
        fontWeight: "bold",
    },
    instruction: {
        display: "flex",
        fontWeight: "lighter",
        padding: theme.spacing(1),
        marginRight: 12,
        background: 'linear-gradient(45deg, #FFFCC1 30%, #FFF558 90%)',
        boxShadow: '0 6px 5px 2px rgba(255, 245, 88, .3)',
        border: 0,
        borderRadius: 3,
        color: "black",
    },
    img: {
        width: "350px"
    },
    logo: {
        padding: theme.spacing(2),
        border: 15,
        borderColor: "white",
        width: "350px",
        overflow: "hidden",
        borderWidth: 150,
        borderRadius: 50
    },
    contact: {
        display: "in-line",
        padding: theme.spacing(2),
    },
    icon: {
        width: "50px"
    }

}))


/**
 * @dev this handles the main page
 */

export const Main = () => {

    const classes = useStyles()

    return (
    <>
        <div className={classes.container}>
            <div style={{ color: 'white', fontSize: 16, paddingBottom: 20, }}><b>Welcome to the main page of this project, dedicated to Ethereum and DeFi!</b></div>
            <div style={{ color: 'white', fontSize: 16, paddingBottom: 20, }}><i>You'll find a few links down below to different repos I created, feel free to visit, test and fork them!</i></div>
            <img className={classes.logo} src={logo} />
            <div style={{ color: 'white', fontSize: 14, paddingBottom: 25, }}>Yes ser, it's my dog ...</div>
            <div style={{ color: 'white', fontSize: 14, paddingBottom: 55, }}>But now go on, it's free!</div>
            <h1><img className={classes.img} src={solidity} /></h1>
                <div >
                    <List>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href="https://github.com/0xBonanza/Solidity-erc721-NFT/"><span className={classes.instruction}>ERC721 NFT</span></a>Solidity contract + Python (Brownie) deployment to create an ERC721 NFT collection.</ListItem>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href="https://github.com/0xBonanza/Solidity-erc20-token/"><span className={classes.instruction}>ERC20 TOKEN</span></a>Solidity contract + Python (Brownie) deployment to create an ERC20 token.</ListItem>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href="https://github.com/0xBonanza/Solidity-erc20-staking/"><span className={classes.instruction}>STAKING</span></a>Solidity contract + Python (Brownie) deployment to stake/unstake ERC20 tokens on Aave.</ListItem>
                  </List>
                </div>
            <h1><img className={classes.img} src={react} /></h1>
                <div >
                    <List>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href="https://0xbonanza.github.io/REACT-ERC20-staking/"><span className={classes.instruction}>ERC20 STAKING</span></a>React app for staking ERC20 tokens on Aave.</ListItem>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href="https://0xbonanza.github.io/REACT-ETH-prediction/"><span className={classes.instruction}>ETH PREDICTION</span></a>React app for predicting ETH/USDT future price in competition with other users.</ListItem>
                        <ListItem className={classes.list}><a style={{ textDecoration: 'none' }} href=""><span className={classes.instruction}>NFT MINTING</span></a>React app for minting NFTs from a new collection (coming soon...)</ListItem>
                  </List>
                </div>
            <h1><img className={classes.img} src={contact} /></h1>
                <a href="https://be.linkedin.com/in/benjamintermonia" className={classes.contact}><img className={classes.icon} src={lknd} /></a>
                <a href="https://twitter.com/0xBonanza" className={classes.contact}><img className={classes.icon} src={twitter} /></a>
                <div className={classes.contact} style={{ color: 'white', fontSize: 16 }}>You can also contact us on <span style={{ color: 'black', backgroundColor: "white" }}>0xBonanza@gmail.com</span> for any question/inquiry!</div>
        </div>
    </>
  )
}