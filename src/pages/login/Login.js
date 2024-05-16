import "./Login.css";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import logoB from '../../assets/images/logoB.png'

function Login() {
  return (
    <>
      <div className="loginContainer">
        <img src={logoB} />
        <NavLink to="/" className="back"><Button variant="outline-secondary">بازگشت</Button></NavLink>
        <div className="boxLogin">
          <div className="create">
            <Button variant="success">ایجاد حساب کاربری</Button>
            <p>اگر در فیلیمو حساب کاربری ندارید، ثبت‌نام کنید:</p>
          </div>
          <div className="emailLog">
            <p>اگر در فیلیمو حساب کاربری دارید، وارد شوید:</p>
            <div className="boxButtons">
              <Button variant="success">ورود</Button>
              <Button variant="outline-warning">فراموش کردید</Button>
              <Button variant="outline-secondary">ایمیل یا نام کاربری</Button>
            </div>
          </div>
          <Button variant="outline-primary" className="btnGoogle">Continue with Google<FcGoogle size="30" style={{backgroundColor : "transparent" , paddingRight : "5px"}} /> </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
