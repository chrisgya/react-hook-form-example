import React, { FC } from "react";
import { Controller, FieldErrors, UseFormMethods } from "react-hook-form";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import cx from "classnames";

type InputFormatProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  NumberFormatProps &
  Partial<UseFormMethods> & {
    label: string;
    name: string;
    errors: FieldErrors<any>;
  };

//can be use for password, numbers, amount, phone, credit card and any other format...reference documentation for more details
//https://www.npmjs.com/package/react-number-format
const InputFormat: FC<InputFormatProps> = ({
  label,
  name,
  control,
  errors,
  type,
  thousandSeparator,
  decimalSeparato,
  allowNegative,
  prefix,
  suffix,
  format,
  mask,
  allowEmptyFormatting,
  decimalScale,
  isNumericString,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>

      <div className="control">
        <Controller
          as={NumberFormat}
          type={type}
          control={control}
          name={name}
          className={cx("input", errors[name] && "is-danger")}
          thousandSeparator={thousandSeparator}
          decimalSeparato={decimalSeparato}
          allowNegative={allowNegative}
          prefix={prefix}
          suffix={suffix}
          format={format}
          mask={mask}
          decimalScale={decimalScale}
          allowEmptyFormatting={allowEmptyFormatting}
          isNumericString={isNumericString}
        />
        {errors[name] && (
          <p className="help is-danger" role="alert">
            {errors[name].message}
          </p>
        )}
      </div>
    </div>
  );
};

export { InputFormat };
