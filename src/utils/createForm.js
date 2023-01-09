export const createForm = ({ items, handleChange, state }) => {
  const result = items.map((item) => {
    if (item.type === "text") {
      return (
        <div key={item.name} className="text">
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="text"
            name={item.name}
            id={item.name}
            required={item.required}
            placeholder="Ingrese su nombre completo"
            value={state[item.name]}
            onChange={handleChange}
          />
        </div>
      );
    }
    if (item.type === "email") {
      return (
        <div key={item.name} className="email">
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="email"
            name={item.name}
            id={item.name}
            required={item.required}
            placeholder="example@mail.com"
            value={state[item.name]}
            onChange={handleChange}
          />
        </div>
      );
    }
    if (item.type === "date") {
      return (
        <div key={item.name} className="date">
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type="date"
            name={item.name}
            id={item.name}
            required={item.required}
            value={state[item.name]}
            onChange={handleChange}
          />
        </div>
      );
    }
    if (item.type === "select") {
      return (
        <div key={item.name} className="select">
          <label htmlFor={item.name}>{item.label}</label>
          <select
            name={item.name}
            id={item.name}
            required={item.required}
            value={state[item.name]}
            onChange={handleChange}
          >
            <option value="" selected>
              Seleccione un pais
            </option>
            {item.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }
    if (item.type === "checkbox") {
      return (
        <div key={item.name} className="checkbox">
          <input
            type="checkbox"
            name={item.name}
            id={item.name}
            required={item.required}
            value={state[item.name]}
            onChange={handleChange}
          />
          <label htmlFor={item.name}>{item.label}</label>
        </div>
      );
    }
    if (item.type === "submit") {
      return (
        <div className="submit">
          {state.terms_and_conditions ? (
            <button type="submit" key={item.name}>
              {item.label}
            </button>
          ) : (
            <button type="submit" disabled key={item.name}>
              {item.label}
            </button>
          )}
        </div>
      );
    }
  });
  return result;
};
