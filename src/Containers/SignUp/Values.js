import Button from "../../Components/comman/Button";
import TextField from "../../Components/comman/TextField";

const Page1 = (props) => {
  const { errors, setErrors, setValues, values, setCurrentPage } = props;

  function handleValueChange(val, name) {
    console.log(val, name);

    setErrors({});
    const valueCopy = { ...values };
    valueCopy[name] = val;
    setValues(valueCopy);
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <TextField
        required
        label="First Name"
        setText={(val) => handleValueChange(val, "First Name")}
        text={values["First Name"]}
        error={errors["First Name"]}
      />
      <TextField
        required
        label="Last Name"
        setText={(val) => handleValueChange(val, "Last Name")}
        text={values["Last Name"]}
        error={errors["Last Name"]}
      />
      <TextField
        required
        label="Email"
        setText={(val) => handleValueChange(val, "Email")}
        error={errors["Email"]}
        text={values["Email"]}
      />
      <TextField
        required
        label="Phone"
        setText={(val) => handleValueChange(val, "Phone")}
        error={errors["Phone"]}
        text={values["Phone"]}
      />
      <TextField
        required
        label="Password"
        setText={(val) => handleValueChange(val, "Password")}
        error={errors["Password"]}
        text={values["Password"]}
      />
      <TextField
        required
        label="Confirm Password"
        setText={(val) => handleValueChange(val, "Confirm Password")}
        error={errors["Confirm Password"]}
        text={values["Confirm Password"]}
      />
    </div>
  );
};

export default Page1;
