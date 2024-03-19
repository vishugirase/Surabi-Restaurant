import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    

})

function Location() {
    const classes = useStyles();
    return (<>
        <div className={classes.maindivlocation}>
            <h1 className={classes.heading}>Surabi Restuarant Address :</h1>
            <p className={classes.para}>330 Conniburrow Blvd, Conniburrow, Milton Keynes MK14 7AG, United Kingdom</p>
            <iframe className={classes.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.588061169391!2d-0.7573623848640083!3d52.05081517864668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877abe2c1c4e325%3A0xba769b3b145452a2!2sSurabi%20Restaurant!5e0!3m2!1sen!2sin!4v1677084676715!5m2!1sen!2sin"></iframe>
        </div>
    </>);
}
export default Location;
