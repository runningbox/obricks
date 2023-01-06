import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 25px;
  width: 100%auto;
  font-size: 1em;
  // border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
  padding-bottom: 20px;
`;

export default function TodoInput() {
  return (
    <Box>
      <Input placeholder="할 일을 입력해주세요." />
    </Box>
  );
}
