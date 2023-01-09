import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postFormdata } from "../hooks/useFormData";
import { useNavigate } from "react-router-dom";

const Forms = ({ items }) => {
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

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

        if (values.terms_and_conditions === false) {
          error.birth_date = "Por favor acepte si desea continuary";
        }

        return error;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        postFormdata(values);
        setSuccess(true);

        navigate("/");
      }}
    >
      {({ errors }) => (
        <Form className="flex flex-col w-60">
          {items.map((item, index) => (
            <div className="flex flex-col">
              {item.type === "text" && (
                <div className="flex flex-col">
                  <label htmlFor={item.name}>{item.label}</label>

                  <Field
                    className="border"
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    required={item.required}
                  ></Field>

                  <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                </div>
              )}

              {item.type === "email" && (
                <div className="flex flex-col">
                  <label htmlFor={item.name}>{item.label}</label>

                  <Field
                    className="border"
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    required={item.required}
                  />
                  <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                </div>
              )}

              {item.type === "date" && (
                <div>
                  <label htmlFor={item.name}>{item.label}</label>

                  <Field
                    className="border"
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    required={item.required}
                  />
                  <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                </div>
              )}

              {item.type === "select" && (
                <div className="flex flex-col">
                  <label htmlFor={item.name}>{item.label}</label>
                  <Field
                    name={item.name}
                    as={item.type}
                    className="border"
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
                <div>
                  <label htmlFor={item.name}>{item.label}</label>

                  <Field
                    className="border"
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    required={item.required}
                  />
                  <ErrorMessage name={item.name}>{errors.name}</ErrorMessage>
                </div>
              )}

              {item.type === "submit" && (
                <button
                  className="border bg-blue-600 text-white hover:bg-blue-400"
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
