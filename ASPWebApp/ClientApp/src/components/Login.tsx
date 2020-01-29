import * as React from 'react';
const { useState } = React;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h5> Log in to manage your inventory </h5>
            <form>
                Email:<br/>
                <input type="text" name="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <br/>
                Password:<br/>
                <input type="password" name="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        );
}

export default Login;