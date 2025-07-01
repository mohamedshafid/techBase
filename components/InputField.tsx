import React from "react";

type InputFieldProps = {
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  icon?: React.ElementType;
};

const InputField = ({
  type = "text",
  id,
  name,
  placeholder,
  icon: Icon,
}: InputFieldProps) => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-3">
      {Icon && (
        <div>
          <Icon className="text-gray-500" />
        </div>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-[190px] md:w-[280px] outline-none border-none"
      />
    </div>
  );
};

export default InputField;
