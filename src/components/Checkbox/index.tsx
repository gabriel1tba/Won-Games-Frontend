import { useState } from 'react';

import * as S from './styles';

export type CheckBoxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked; // true => false => true
    setChecked(status);

    onCheck && onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
