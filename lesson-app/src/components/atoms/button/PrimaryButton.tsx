import { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: string;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Button colorScheme="teal">{children}</Button>
    </>
  );
};
