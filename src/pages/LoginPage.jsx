import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/button";
import FormInput from "components/formInput";
import { toastify } from "lib/toast";
import { logInSchema } from "lib/yup";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const onSubmit = async ({ email, password }) => {
    let result = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      toastify(result.message, "success");
      navigate("/");
      reset();
    } else {
      toastify("Incorrect email or password.", "error");
    }
  };

  return (
    <div className="mb-24 flex h-auto flex-col items-center justify-center gap-4">
      <p className="text-4xl font-black uppercase">Log in</p>
      <div className="mt-3 flex flex-row items-center gap-4">
        <p className="text-xl  font-bold">Don't have an Account ?</p>
        <Link to={"/signup"}>
          <Button buttonType="inverted">Sign Up</Button>
        </Link>
      </div>
      <div className="mt-5 flex w-80 flex-col gap-3 text-center font-semibold">
        <p>Sign in with your Email and Password</p>
        <hr className="border border-black" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormInput
            placeholder="Email Address"
            type="text"
            name="email"
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            register={{ ...register("password") }}
            errorMessage={errors.password?.message}
          />
          <Button buttonType="inverted" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
