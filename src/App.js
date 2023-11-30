// App.js

import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./App.css"; // Import the CSS file

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="app-container">
      
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Controller Example</h2>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <div className="input-container">
              <label>Email:</label>
              <input {...field} type="email" placeholder="Enter your email" />
              {fieldState.error && <p className="error-message">{fieldState.error.message}</p>}
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <div className="input-container">
              <label>Password:</label>
              <input {...field} type="password" placeholder="Enter your password" />
              {fieldState.error && <p className="error-message">{fieldState.error.message}</p>}
            </div>
          )}
        />

        <button type="submit" className="submit-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default App;
