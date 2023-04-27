import { useState } from "react";
import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";
import usePasswordLogin from "../../hooks/usePasswordLogin";
import Page1 from "./Values";
import Page2 from "./Address";

const initialValue = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  Phone: "",
  Password: "",
  "Confirm Password": "",
};
const initialAddress = {
    "House No": "",
    Street: "",
    Locality: "",
    Landmark: "",
    City: "",
    State: "",
    PIN: "",
}
const SignUp = () => {
  const [values, setValues] = useState(initialValue);
  const [address, setAddress] = useState(initialAddress);
  const [currentPage, setCurrentPage] = useState(1);
  const { createAccount, errors, setErrors } = usePasswordLogin();

  function handleCreateAccount(){
      createAccount(values, address)
  }

  return (
    <div>
      <div className="absolute -z-20 w-full h-screen">
        <div className="w-full h-full grid grid-cols-2">
          <div className="" style={{ background: "#eaa44d" }}>
            .
          </div>
          <div className="" style={{ background: "#363331" }}>
            .
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-5/6 rounded border-zinc-500 border-2 m-44 mt-14 p-16 bg-white">
          <h1 className="text-xl">Create Account</h1>
          <div>
              <Page1
                errors={errors}
                setErrors={setErrors}
                setValues={setValues}
                values={values}
                setCurrentPage={setCurrentPage}
              />
              <Page2
                errors={errors}
                setErrors={setErrors}
                setAddress={setAddress}
                address={address}
                setCurrentPage={setCurrentPage}
                handleCreateAccount={handleCreateAccount}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
