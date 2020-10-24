import React, { FC } from "react";
import cx from "classnames";
import { UseFormMethods, FieldErrors } from "react-hook-form";

type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    register: () => any;
    errors: FieldErrors<any>;
  };

const Textarea: FC<TextAreaProps> = ({ name, label, register, errors }) => (
  <div className="field">
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <div className="control">
      <textarea
        className={cx("textarea", errors[name] && "is-danger")}
        name={name}
        id={name}
        ref={register}
      />
      {errors[name] && (
        <p className="help is-danger" role="alert">
          {errors[name].message}
        </p>
      )}
    </div>
  </div>
);

export { Textarea };
