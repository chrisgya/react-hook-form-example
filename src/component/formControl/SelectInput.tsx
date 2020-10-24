import React, { FC } from "react";
import cx from "classnames";
import { FieldErrors, UseFormMethods } from "react-hook-form";

interface IOption {
  value: string | number;
  display: string;
}

type SelectInputProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    selectOption: IOption[];
    register: () => any;
    errors: FieldErrors<any>;
  };

const SelectInput: FC<SelectInputProps> = ({ name,  label, selectOption, register, errors }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div  className={cx("select", errors[name] && "is-danger")}>
      <select
        name={name}
        id={name}
        ref={register}
      >{
        selectOption.map((v, k) => (
        <option value={v.value}>{v.display}</option>
        ))
      }
      </select>

      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { SelectInput };
