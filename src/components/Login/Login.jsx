import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/slices/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Initialize state for login form values
    const [values, setValues] = useState({
        name: "",
        password: "",
    });

    // Handle input change
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    // Handle login action
    const handleLogin = () => {
        dispatch(login(values));
    };

    // Use the selector to get authentication state
    const { authUser } = useSelector((state) => state.user.user);

    // Navigate if the user is authenticated
    useEffect(() => {
        if (authUser) {
            navigate("/");
        }
    }, [authUser, navigate]);

    return (
        <div className="grid grid-cols-1 items-center justify-items-center h-screen">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        label="Name"
                        size="lg"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                    <Input
                        label="Password"
                        size="lg"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        variant="gradient"
                        fullWidth
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    <Button
                        variant="text"
                        color="blue"
                        fullWidth
                        onClick={() => navigate("/register")}
                        className="mt-2"
                    >
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
