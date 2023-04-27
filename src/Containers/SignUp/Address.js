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

  const [location, setLocation] = useState("");
  useEffect(() => {
    position();
  }, []);

  async function reversegeo(latitude, longitude) {
    latitude = "28.6304";
    longitude = "77.2177";
    let apiURL = `https://us1.locationiq.com/v1/reverse?key=pk.d0418625b19c0c40a2c699b57abb7e05&lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const res = await fetch(apiURL);
      const data = await res.json();

      console.log(data);
      let addressCopy = { ...address };
      let geoloc = data.address;
      if (geoloc["house_number"])
        addressCopy["House No"] = geoloc["house_number"];

      if (geoloc.postcode) addressCopy["PIN"] = geoloc["postcode"];
      if (geoloc.postcode) addressCopy["State"] = geoloc["state"];
      if (geoloc.postcode) addressCopy["Locality"] = geoloc["road"];
      if (geoloc.postcode) addressCopy["City"] = geoloc["city"];
      if (geoloc.postcode) addressCopy["Street"] = geoloc["neighbourhood"];
      if (geoloc.postcode) addressCopy["Landmark"] = geoloc["suburb"];

      setAddress(addressCopy);
      setLocation(geoloc.display_name);
    } catch (e) {
      console.log(e);
    }
  }

  const position = async () => {
    console.log("Hi there");
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let accuracy = position.coords.accuracy;
        console.log({ latitude, longitude, accuracy });
        reversegeo(latitude, longitude);
      },
      (err) => console.log(err)
    );
  };

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
        required
        label="House No"
        setText={(val) => handleValueChange(val, "House No")}
        error={errors["House No"]}
        text={address["House No"]}
      />
      <TextField
        required
        label="Street"
        setText={(val) => handleValueChange(val, "Street")}
        error={errors["Street"]}
        text={address["Street"]}
      />
      <TextField
        required
        label="Locality"
        setText={(val) => handleValueChange(val, "Locality")}
        error={errors["Locality"]}
        text={address["Locality"]}
      />
      <TextField
        required
        label="City"
        setText={(val) => handleValueChange(val, "City")}
        error={errors["City"]}
        text={address["City"]}
      />
      <TextField
        required
        label="Landmark"
        setText={(val) => handleValueChange(val, "Landmark")}
        error={errors["Landmark"]}
        text={address["Landmark"]}
      />
      <TextField
        required
        label="PIN"
        setText={(val) => handleValueChange(val, "PIN")}
        error={errors["PIN"]}
        text={address["PIN"]}
      />

      <div className="flex justify-end my-2 col-span-2 gap-2">
        <Button title="Create" width="full" onClick={handleCreateAccount} />
        <Button title="Clear" width="full" onClick={handleCreateAccount} />
      </div>
    </div>
  );
};

export default Page1;
