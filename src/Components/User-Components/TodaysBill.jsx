import { useEffect, useState } from "react";
import { getallCart } from "../../Services/cartapi";
const moment = require('moment');
function TodaysBill() {
    const [carts, setCarts] = useState([])
    const [price, setPrice] = useState(0);
    useEffect(
        
        () => {
            p();
        }

        , [])
    const p = async () => {
        const response = await getallCart();
        console.log(response);
        let pr = 0;
        response.data.forEach(function (el) {

            let arr = (el.date).split('-')
            //console.log(" "+arr)
            let d1 = new Date(arr[2], arr[1] - 1, arr[0])
            console.log(arr[1])
            let timeElapsed = Date.now();
            let today = new Date(timeElapsed);
            //console.log(today)
            console.log((today.getDate()) + " Daye " + d1.getDate())

            if (((d1.getDate())) === (today.getDate())) {
                console.log(el);
                //if(el.dates)
                console.log("INside")
                pr += (el.price * el.plates);
            }

        }
        )
        setPrice(pr)
        console.log(pr + "hjj")
        console.log(price)
        return pr;
    }
    const getPrice = () => {
        carts.forEach(function (el) {
            setPrice((el.price * el.plates) + price);
        })
    }

    return (<>
     <div className="bill-div">
      <h2>Hello Vishu!</h2>
      <h3>Your Todays Sales : {price} Rs /-</h3>
    </div>
    </>);
}
export default TodaysBill;