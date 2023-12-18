import React from "react";
import { useState } from "react";
import { Box, Paragraph, Wrapper, Button, AnimationWrapper } from "./styled";
import ArrowToRight from "../../common/svg/arrowToRight";

const Settings = () => {
  const [areThemeSettingsOpened, setAreThemeSettingsOpened] = useState(false);
  const toggleAreThemeSettingsOpened = () => {
    setAreThemeSettingsOpened(!areThemeSettingsOpened);
  };
  return (
    <Wrapper>
      <Box>
        <Paragraph>Theme</Paragraph>
        <Button onClick={toggleAreThemeSettingsOpened}>
          <AnimationWrapper $flip={areThemeSettingsOpened}>
            <ArrowToRight />
          </AnimationWrapper>
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Settings;
