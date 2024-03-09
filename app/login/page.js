"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Image, Button, Card, CardBody, Input } from "@nextui-org/react";
import Styles from "./css/loginCss.module.css"
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name } = event.target;

    const value = event.target.value;

    setFormData((prevInputValue) => {
      const updatedInputValue = { ...prevInputValue, [name]: value };
      return updatedInputValue;
    });
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        formData
      );

      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id_user: response.data.data.id,
            username: response.data.data.name,
            token: response.data.data.token,
          })
        );
        router.push("/");
      } else {
        console.log("gt");
        console.error("Gagal:", response);
      }
    } catch (error) {
      if (error.response.status == 400) {
        setIsError(true);
        const errorData = error.response.data.errors;
        setErrorMessages({
          email: errorData.email ? errorData.email : "",
          name: errorData.name ? errorData.name : "",
          password: errorData.password ? errorData.password : "",
          whatsapp: errorData.whatsapp ? errorData.whatsapp : "",
        });
        // setMassage(error.response.data.errors.email);
      } else if (error.request) {
        setIsError(true);
        setErrorMessages(error.request);
      } else {
        setIsError(true);
        setErrorMessages(error.message);
      }
    }
  };
  return (
    <div className={`${Styles.background} h-screen flex items-center justify-center`}>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="block">
            <Image className="w-4/12 mx-auto mb-6" src="/image/logo/logo_text.svg" />
            <p className="text-center px-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div>
          <Card className="py-4 w-9/12 bg-white rounded-xl  mx-auto">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Masuk
            </h2>
            <CardBody className="overflow-visible py-2">
              <div class="mt-10 px-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      variant="underlined"
                      name="email"
                      isRequired={true}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Input
                      type="password"
                      label="Password"
                      variant="underlined"
                      name="password"
                      isRequired={true}
                      onChange={handleInputChange}
                    />
                  </div>

                  <a className="float-right text-sm font-semibold underline mt-0 pt-0 pb-6">Lupa Password?</a>

                  <div>
                    <Button
                      radius="full"
                      className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${Styles.buttonBackground}`}
                      onClick={handleSubmitButton}
                    >
                      Masuk
                    </Button>
                  </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                  Belum memiliki akun?
                  <a
                    href="#"
                    class="font-semibold leading-6 text-[#54BAB9] hover:text-indigo-500"
                  >
                    Daftar Sekarang
                  </a>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
