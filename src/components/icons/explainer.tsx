import * as React from 'react';

import { Box, BoxProps } from '@stacks/ui';

export const ExplainerIcon = React.forwardRef((props: BoxProps, ref) => (
  <Box ref={ref as any} {...props}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.9971 12C9.28565 12 12 9.28565 12 6.0029C12 2.71435 9.27985 0 5.9913 0C2.70855 0 0 2.71435 0 6.0029C0 9.28565 2.71435 12 5.9971 12ZM5.9971 10.7994C3.33494 10.7994 1.20638 8.65926 1.20638 6.0029C1.20638 3.34074 3.33494 1.20058 5.9913 1.20058C8.65346 1.20058 10.7936 3.34074 10.7994 6.0029C10.8052 8.65926 8.65926 10.7994 5.9971 10.7994ZM5.8695 7.14548C6.1885 7.14548 6.39149 6.96568 6.40889 6.72789C6.40889 6.70469 6.41469 6.67569 6.41469 6.65829C6.43209 6.35669 6.64089 6.1595 7.01208 5.9159C7.58627 5.53891 7.95167 5.20251 7.95167 4.53552C7.95167 3.57274 7.08168 3.01595 6.0493 3.01595C5.05752 3.01595 4.38473 3.46834 4.19913 4.01353C4.16433 4.11213 4.14693 4.21653 4.14693 4.32093C4.14693 4.59932 4.36153 4.77332 4.63412 4.77332C4.97052 4.77332 5.05172 4.59932 5.22571 4.40213C5.41131 4.11213 5.66071 3.94393 5.9971 3.94393C6.46109 3.94393 6.75689 4.20493 6.75689 4.59352C6.75689 4.94732 6.51329 5.13871 6.0203 5.48091C5.60851 5.7651 5.31271 6.0609 5.31271 6.58289V6.64669C5.31271 6.97728 5.50991 7.14548 5.8695 7.14548ZM5.8579 8.93185C6.2349 8.93185 6.54229 8.65926 6.54229 8.28806C6.54229 7.92267 6.2407 7.65007 5.8579 7.65007C5.48091 7.65007 5.17351 7.92267 5.17351 8.28806C5.17351 8.65346 5.48671 8.93185 5.8579 8.93185Z"
        fill="#A1A7B3"
      />
    </svg>
  </Box>
));
