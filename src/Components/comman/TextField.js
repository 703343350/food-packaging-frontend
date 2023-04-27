const TextField = (props) => {
  let { setText, text, label, color, error, required } = props;
  if (error) {
    color = "red";
  }

  return (
    <div>
      <div className="flex justify-between">
        <label
          className="block mt-2 mb-1 text-sm font-medium text-gray-900"
          style={{ color: color }}
        >
          {label}{required && "*"}
          <span className="text-xs">{required? "  (required)":""} </span>
        </label>
        {error && (
          <label
            className="block mt-2 mb-1 text-xs font-thin text-gray-900"
            style={{ color: color }}
          >
            *{error}
          </label>
        )}
      </div>
      <input
        type="text"
        name={label}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:border-blue-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder={label}
        onChange={(e) => setText(e.target.value, e.target.name)}
        value={text}
        style={{ borderColor: color }}
      />
    </div>
  );
};

export default TextField;
