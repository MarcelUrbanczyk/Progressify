import PlusIcon from "./plusIcon";
import { Wrapper, Button, Paragraph } from "./styled";
import React from "react";

export default () => (
  <Wrapper>
    <Button>
      <PlusIcon />
    </Button>
    <Paragraph>Add new project</Paragraph>
  </Wrapper>
);
