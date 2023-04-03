import React from 'react'

const HomePage = () => {

    return (
        <div>
            <h1>HomePage Đăng Nhập</h1>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    {/* Login Form */}
                    <form>
                        <input type="text" id="login" className="fadeIn second mt-3" name="login" placeholder="name" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <button type="submit" className="fadeIn fourth" defaultValue="Log In" >Login</button>
                    </form>
                    {/* Remind Passowrd */}
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage