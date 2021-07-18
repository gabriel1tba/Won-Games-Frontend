import * as S from './styles';

export type CheckBoxType = {
  label?: string;
  labelFor?: string;
};

const Checkbox = ({ label, labelFor = '' }: CheckBoxType) => (
  <S.Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </S.Wrapper>
);

export default Checkbox;
