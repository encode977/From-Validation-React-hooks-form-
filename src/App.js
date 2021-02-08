import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSignUp = (data) => console.log(data);

  return (
    <div className="app">
      <div className="app__body">
        <h2>Sign Up Page</h2>
        <form onSubmit={handleSubmit(onSignUp)}>
          <div className="form__control">
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              ref={register({ required: true })}
            />
            {errors.firstname && errors.firstname.type === "required" && (
              <p className="error">First Name is required</p>
            )}
          </div>
          <div className="form__control">
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              ref={register({ required: true })}
            />
            {errors.lastname && errors.lastname.type === "required" && (
              <p className="error">Last Name is required</p>
            )}
          </div>
          <div className="form__control">
            <input
              type="text"
              placeholder="Email"
              name="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">Email is required</p>
            )}

            {errors.email && errors.email.type === "pattern" && (
              <p className="error">Email is invalid</p>
            )}
          </div>
          <div className="form__control">
            <input
              type="number"
              placeholder="Number"
              name="number"
              ref={register({ required: true })}
            />
            {errors.number && errors.number.type === "required" && (
              <p className="error">Number is required</p>
            )}
          </div>
          <button className="signup__btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
