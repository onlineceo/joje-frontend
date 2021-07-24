import './login.css';
import Logo from '../../images/logo.jpg'
function SendNumber() {
  return (
    <>
    <div className="login-wrap">
        <div className="logo">
            <img src={Logo} alt="VetNow"/>
        </div>
        <div className="form">
            <h1>کد تایید را وارد نمایید</h1>
            <h2>کد تایید برای شماره موبایل 09141472686 ارسال گردید </h2>
          <input type="text"  name="un"/>
          <h3>دریافت مجدد کد تایید</h3>
          <button>ادامه</button>
          
        </div>
    </div>
    </>
  );
}

export default SendNumber;
