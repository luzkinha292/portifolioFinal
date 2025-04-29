const Login = () => {
    const handleSignIn = () => {
        // Simulate sign-in action
        console.log("Sign in with Google");
    };

    return (
        <div className="dashboard">
            <button onClick={handleSignIn}>
                Sign in with Google
            </button>
        </div>
    )
}

export default Login;
