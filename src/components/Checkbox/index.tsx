import * as S from './styles';

export type CheckBoxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckBoxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
);

export default Checkbox;
