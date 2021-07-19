import { useState } from 'react';

import * as S from './styles';

export type CheckBoxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked((prev) => !prev);

    if (onCheck) {
      onCheck(checked);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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
