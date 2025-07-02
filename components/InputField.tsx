import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type option = {
  label: string;
  value: string;
};

type InputFieldProps = {
  type?: string;
  id: string;
  placeholder?: string;
  icon?: React.ElementType;
  options?: option[];
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
};

const InputField = ({
  type = "text",
  id,
  placeholder,
  icon: Icon,
  options,
  register,
  readOnly = false,
}: InputFieldProps) => {
  const renderInput = () => {
    switch (type) {
      case "text":
      case "phone":
      case "email":
      case "password":
      case "number":
        return (
          <input
            type={type}
            placeholder={placeholder}
            {...register}
            readOnly={readOnly}
          />
        );
      case "select":
        return (
          <select id={id} {...register} defaultValue="">
            {options?.map((option, index) =>
              index === 0 ? (
                <option key={index} value="" disabled>
                  {option.label}
                </option>
              ) : (
                <option key={index} value={option.value}>
                  {option.label}
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
            value="2025-07-02"
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
