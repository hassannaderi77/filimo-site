import { useEffect, useState } from "react";
import "./Accounts.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import logoB from '../../assets/images/logoB.png'
import Account from '../../components/account/Account'

function Accounts() {

  const [accounts , setAccounts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/account')
      .then(response => setAccounts(response.data))
  },[])

  return (
    <>
      <div className="accountContainer">
        <img src={logoB} />
        <NavLink to="/" className="back"><Button variant="outline-secondary">بازگشت</Button></NavLink>

        <div className="information">
            <h5>خرید اشتراک فیلیمو</h5>
            <p>اشتراکی که تهیه میکنید برای تماشای <b>اسکار و قطب شمال و شب های مافیا </b></p>
            <p><b>زودیاک و و بیش از 90,000 فیلم و سریال </b> دیگر است.</p>
        </div>

        {accounts.map(account => (
            <Account key={account.id} {...account} />
        ))}

        <p style={{marginTop : "10px"}}>%10 مالیات بر ارزش افزوده به قیمت همه اشتراک‌ها اضافه می‌شود.</p>
        
      </div>
    </>
  );
}

export default Accounts;