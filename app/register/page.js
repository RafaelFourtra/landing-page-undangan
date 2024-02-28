"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Image, Button, Card, CardBody, Input } from "@nextui-org/react";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

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
        "http://localhost:8000/api/users/register",
        formData
      );

      if (response.status === 201) {
        router.push("/login");
      } else {
        console.log("gt");
        console.error("Gagal:", response);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("asda");
        setIsError(true);
        const errorData = error.response.data.errors;
        setErrorMessages({
          email: errorData.email ? errorData.email : "",
          name: errorData.name ? errorData.name : "",
          password: errorData.password ? errorData.password : "",
          whatsapp: errorData.whatsapp ? errorData.whatsapp : "",
        });
        // setMassage(error.response.data.errors.email);
      } else if (error.response && error.request) {
        setIsError(true);
        setErrorMessages(error.request);
      } else {
        setIsError(true);
        setErrorMessages(error.message);
      }
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mx-auto sm:w-full sm:max-w-sm">
        <Image className="mx-auto w-6/12" src="/image/logo/logo_text.svg" />
      </div>
      <Card className="py-4 w-4/12 bg-white rounded-xl  mx-auto">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <CardBody className="overflow-visible py-2">
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <Input
                  type="text"
                  label="Nama Lengkap"
                  variant="underlined"
                  name="name"
                  isRequired={true}
                  onChange={handleInputChange}
                  isInvalid={isError && errorMessages.name ? true : false}
                  errorMessage={
                    isError && errorMessages.name ? errorMessages.name : ""
                  }
                />
              </div>
              <div>
                <Input
                  type="email"
                  label="Email"
                  variant="underlined"
                  name="email"
                  isRequired={true}
                  onChange={handleInputChange}
                  isInvalid={isError && errorMessages.email ? true : false}
                  errorMessage={
                    isError && errorMessages.email ? errorMessages.email : ""
                  }
                />
              </div>

              <div>
                <Input
                  type="text"
                  label="Nomor WhatsApp"
                  variant="underlined"
                  name="whatsapp"
                  isRequired={true}
                  onChange={handleInputChange}
                  isInvalid={isError && errorMessages.whatsapp ? true : false}
                  errorMessage={
                    isError && errorMessages.whatsapp
                      ? errorMessages.whatsapp
                      : ""
                  }
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
                  isInvalid={isError && errorMessages.password ? true : false}
                  errorMessage={
                    isError && errorMessages.password
                      ? errorMessages.password
                      : ""
                  }
                />
              </div>

              <div>
                <Button
                  radius="full"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmitButton}
                >
                  Submit
                </Button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="#"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
