import styled from "styled-components";
import variant from "../../../../helpers/variant";

import { base } from "./base";
import { primary, secondary } from "./variants";

const use = variant("use", {
  primary,
  secondary,
});

export const StyledButton = styled(base)(use);
