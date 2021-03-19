import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/auth.context";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };

    const registerHandler = async () => {
      try {
          const data = await request('api/auth/register', 'POST', {...form});
          message(data.message);
      }  catch (e) {

      }
    };

    const loginHandler = async () => {
        try {
            const data = await request('api/auth/login', 'POST', {...form});
            message(data.message);
            auth.login(data.token, data.userId);
        }  catch (e) {

        }
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Increase link</h1>

                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input id="email" type="email" name="email" value={form.email}
                                onChange={changeHandler} />
                                    <label htmlFor="first_name">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password" type="password" name="password" value={form.password} onChange={changeHandler} />
                                <label htmlFor="first_name">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn orange darker-4" style={{marginRight: 15}} disabled={loading} onClick={loginHandler}>
                            Login
                        </button>
                        <button className="btn blue darken-4" disabled={loading} onClick={registerHandler}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};