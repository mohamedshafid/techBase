import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  type?: string;
  id: string;
  placeholder?: string;
  icon?: React.ElementType;
  options?: string[];
  register: UseFormRegisterReturn;
};

const InputField = ({
  type = "text",
  id,
  placeholder,
  icon: Icon,
  options,
  register,
}: InputFieldProps) => {
  const renderInput = () => {

    switch (type) {
      case "text":
      case "phone":
      case "email":
      case "password":
      case "number":
        return <input type={type} placeholder={placeholder} {...register} />;
      case "select":
        return (
          <select id={id} {...register}>
            {options?.map((option, index) =>
              index === 0 && option === "Select the course" ? (
                <option key={index} value="" disabled>
                  {option}
                </option>
              ) : (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        );
      case "textarea":
        return <textarea id={id} placeholder={placeholder} {...register} />;
      case "date":
        return (
          <input
            type="date"
            placeholder={placeholder}
            {...register}
            value='2025-07-02' 
            
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-3">
      {Icon && (
        <div>
          <Icon className="text-gray-500" />
        </div>
      )}
      {renderInput()}
    </div>
  );
};

export default InputField;
