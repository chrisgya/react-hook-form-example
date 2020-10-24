import React, { FC } from "react";
import { Controller, FormState, UseFormMethods } from "react-hook-form";
import ReactSelect, { CommonProps } from "react-select";
import cx from "classnames";

type CustomSelectProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
  Partial<CommonProps<any>> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    isSearchable?: boolean;
    isClearable?: boolean;
    formState: FormState<any>;
  };

const CustomSelect: FC<CustomSelectProps> = ({
  label,
  name,
  isSearchable,
  isClearable,
  control,
  formState,
  placeholder,
  options,
  isMulti,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>

      <div className="control">
        <Controller
          as={ReactSelect}
          control={control}
          name={name}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          isSearchable={isSearchable}
          className={cx("", formState.touched[name] && formState.errors[name] && "is-danger")}
        />
        {formState.touched[name] && formState.errors[name] && (
          <p className="help is-danger" role="alert">
            {formState.errors[name].message}
          </p>
        )}
      </div>
    </div>
  );
};

export { CustomSelect };
