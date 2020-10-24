import React, { FC } from "react";
import cx from "classnames";
import { FieldErrors, UseFormMethods } from "react-hook-form";

type RadioProps = React.DetailedHTMLProps<any, any> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    disabled?: boolean;
    register: () => any;
    errors: FieldErrors<any>;
  };

const Radio: FC<RadioProps> = ({ name, label, disabled, register, errors }) => (

  <div className="field">
    <div className="control">
      <label className={cx("radio", errors[name] && "is-danger")}>
        <input type="radio" name={name} disabled={disabled} ref={register} />
        {label}
      </label>
      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Radio };
