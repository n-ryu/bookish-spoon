import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Container = styled.div({
  position: "relative",
  cursor: "pointer",
  width: 35,
});

const SelectedValue = styled.div({
  position: "relative",
  width: "100%",
  textAlign: "center",
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  zIndex: 0,
});

const Placeholder = styled(SelectedValue)({
  opacity: 0.4,
});

const Options = styled.ul({
  position: "absolute",
  left: "50%",
  bottom: -4,
  backgroundColor: "black",
  margin: 0,
  padding: 0,
  transform: "translate(-50%, 100%)",
  zIndex: 10,
});

const Option = styled.li({
  paddingInline: 8,
  paddingBlock: 2,
  listStyle: "none",
  "&:hover": {
    backgroundColor: "gray",
  },
});

interface Props {
  value?: string;
  options?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Select = ({ value, options, onChange, placeholder }: Props) => {
  const [opened, setOpened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLElement)) setOpened(false);
    };

    window.addEventListener("click", callback);
    return () => {
      window.removeEventListener("click", callback);
    };
  }, []);

  return (
    <Container
      ref={ref}
      onClick={(e) => {
        setOpened((prev) => !prev);
      }}
    >
      {value ? (
        <SelectedValue>{value}</SelectedValue>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
      {opened && (
        <Options>
          {options?.map((option) => (
            <Option onClick={() => onChange?.(option)}>{option}</Option>
          ))}
        </Options>
      )}
    </Container>
  );
};
