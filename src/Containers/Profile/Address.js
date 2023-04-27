import { useState, useEffect } from "react";
import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";

const Page1 = (props) => {
  const {
    errors,
    setErrors,
    setAddress,
    address,
    setCurrentPage,
    handleCreateAccount,
  } = props;


  function handleValueChange(val, name) {
    console.log(val, name);

    setErrors([]);
    const valueCopy = { ...address };
    valueCopy[name] = val;
    setAddress(valueCopy);
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <TextField
        label="House No"
        setText={(val) => handleValueChange(val, "House No")}
        error={errors["House No"]}
        text={address["House No"]}
      />
      <TextField
        label="Street"
        setText={(val) => handleValueChange(val, "Street")}
        error={errors["Street"]}
        text={address["Street"]}
      />
      <TextField
        label="Locality"
        setText={(val) => handleValueChange(val, "Locality")}
        error={errors["Locality"]}
        text={address["Locality"]}
      />
      <TextField
        label="City"
        setText={(val) => handleValueChange(val, "City")}
        error={errors["City"]}
        text={address["City"]}
      />
      <TextField
        label="Landmark"
        setText={(val) => handleValueChange(val, "Landmark")}
        error={errors["Landmark"]}
        text={address["Landmark"]}
      />
      <TextField
        label="PIN"
        setText={(val) => handleValueChange(val, "PIN")}
        error={errors["PIN"]}
        text={address["PIN"]}
      />

      <div className="flex justify-end my-2 col-span-2 gap-2">
        <Button
          title="Update"
          width="full"
          onClick={handleCreateAccount}
        />
         
      </div>
    </div>
  );
};

export default Page1;
