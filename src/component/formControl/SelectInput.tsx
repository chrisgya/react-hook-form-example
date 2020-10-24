import React, { FC } from "react";
import cx from "classnames";
import { FormState, UseFormMethods } from "react-hook-form";

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
    formState: FormState<any>;
  };

const SelectInput: FC<SelectInputProps> = ({ name, label, selectOption, register, formState }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className={cx("select", formState.touched[name] && formState.errors[name] && "is-danger")}>
      <select name={name} id={name} ref={register}>
        {selectOption.map((v, k) => (
          <option value={v.value}>{v.display}</option>
        ))}
      </select>

      {formState.touched[name] && formState.errors[name] && (
        <p className="help is-danger" role="alert">
          {formState.errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { SelectInput };
