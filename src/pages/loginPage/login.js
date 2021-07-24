import './login.css';
import Logo from '../../images/logo.jpg'
function Login() {
  return (
    <>
    <div className="login-wrap">
        <div className="logo">
            <img src={Logo} alt="VetNow"/>
        </div>
        <div className="form">
            <h1>ورود/ ثبت نام</h1>
            <h2>شماره موبایل خود را وارد کنید </h2>
          <input type="text"  name="un"/>
          <button ><a href="/sendNumber">ورود به وتنا</a></button>
          <h4>با ورود و یا ثبت نام در وتنا  شما شرایط و قوانین استفاده از سرویس های سایت وتنا و قوانین حریم خصوصی آن را می‌پذیرید </h4>
        </div>
    </div>
    </>
  );
}

export default Login;
