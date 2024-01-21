import * as S from './styled'

interface IButton {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: IButton) => {
  return (
    <S.StyledButton onClick={onClick}>{title}</S.StyledButton>
  )
}

export { Button }