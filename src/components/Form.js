import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { PostSurveyed } from "../hooks/useCreateSurveyed";
import db from "../utils/data.json";

const Forms = () => {
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const items = db.items.map((item) => item);

  return (
    <Formik
      initialValues={{
        full_name: "",
        email: "",
        birth_date: "",
        country_of_origin: "",
        terms_and_conditions: false,
      }}
      validate={(values) => {
        let error = {};
        if (!values.full_name) {
          error.full_name = "Por favor ingrese un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.full_name)) {
          error.full_name = "El nombre solo puede contener letras y espacios";
        }

        if (!values.email) {
          error.email = "Por favor ingrese un correo electronico";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          error.full_name =
            "El correo solo contener letras, numeros, puntos y guiones bajos";
        }

        if (!values.birth_date) {
          error.birth_date = "Por favor ingrese fecha de nacimiento";
        }

        return error;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        PostSurveyed(values);
        setSuccess(true);

        navigate(`/`);
      }}
    >
      {({ errors }) => (
        <Form>
          {items.map((item, index) => (
            <div className="grid gap-12 mb-12 md:grid-cols-1">
              {item.type === "text" && (
                <div className="">
                  <label
                    htmlFor={item.name}
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {item.label}
                  </label>
                  <div className="flex flex-col">
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type={item.type}
                      id={item.name}
                      name={item.name}
                      required={item.required}
                    ></Field>
                    <div className="text-red-600 text-xs">
                      <ErrorMessage name={item.name}>
                        {errors.name}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              )}

              {item.type === "email" && (
                <div className="flex flex-col">
                  <label
                    htmlFor={item.name}
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {item.label}
                  </label>

                  <div className="flex flex-col">
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type={item.type}
                      id={item.name}
                      name={item.name}
                      required={item.required}
                    />
                    <div className="text-red-600 text-xs">
                      <ErrorMessage name={item.name}>
                        {errors.name}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              )}

              {item.type === "date" && (
                <div>
                  <label
                    htmlFor={item.name}
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {item.label}
                  </label>

                  <div className="flex flex-col">
                    <Field
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type={item.type}
                      id={item.name}
                      name={item.name}
                      required={item.required}
                    ></Field>
                    <div className="text-red-600 text-xs">
                      <ErrorMessage name={item.name}>
                        {errors.name}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
              )}

              {item.type === "select" && (
                <div className="flex flex-col">
                  <label
                    htmlFor={item.name}
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {item.label}
                  </label>
                  <Field
                    name={item.name}
                    as={item.type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={item.required}
                  >
                    <option>Escoge tu pais</option>
                    {item.options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                    <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                  </Field>
                </div>
              )}

              {item.type === "checkbox" && (
                <div className="flex items-center">
                  <Field
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    required={item.required}
                  />
                  <label
                    htmlFor={item.name}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item.label}
                  </label>

                  <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                </div>
              )}

              {item.type === "submit" && (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type={item.type}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}

          {success && (
            <p className="text-green-400"> Encuesta enviada con exito !</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
