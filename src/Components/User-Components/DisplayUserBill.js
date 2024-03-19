import { useEffect, useState } from "react";
import { getallCart, getallCartByUser } from "../../Services/cartapi";
const moment = require('moment');
function DisplayUserBill() {
    const [carts, setCarts] = useState([])
    const [price, setPrice] = useState(0);
    useEffect(
        
        () => {
            let uname=sessionStorage.getItem('user');
            console.log(JSON.parse(uname).username);
            p();
        }

        , [])
    const p = async () => {
        let uname=sessionStorage.getItem('user');
            console.log(JSON.parse(uname).username);
        const response = await getallCartByUser(JSON.parse(uname).username);
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

            
                pr += (el.price * el.plates);
            

        }
        )
        setPrice(pr)
        console.log(pr + "hjj")
        console.log(price)
        return pr;
    }
    
  

    return (<>
     <div className="bill-div">
      <h2>Hello Customer</h2>
      <h3>Your Total Bill is : {price} Rs /-</h3>
    </div>
    </>);
}
export default DisplayUserBill;