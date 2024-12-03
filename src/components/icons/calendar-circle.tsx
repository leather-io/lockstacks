import * as React from 'react';

import { Box, Flex, FlexProps } from 'leather-styles/jsx';
import { token } from 'leather-styles/tokens';

type CalendarIconProps = FlexProps;

export const CalendarIcon: React.FC<CalendarIconProps> = props => (
  <Flex
    position="relative"
    width="40px"
    height="40px"
    justifyContent="center"
    alignItems="center"
    {...props}
  >
    <Box position="absolute" display="grid" margin="auto" zIndex={1}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.97656 19.334H17.6191C19.8652 19.334 21.1055 18.0938 21.1055 15.8672V4.06055C21.1055 1.82422 19.8652 0.59375 17.6191 0.59375H3.97656C1.73047 0.59375 0.490234 1.82422 0.490234 4.06055V15.8672C0.490234 18.1035 1.73047 19.334 3.97656 19.334ZM4.20117 16.7168C3.47852 16.7168 3.10742 16.375 3.10742 15.6133V7C3.10742 6.23828 3.47852 5.89648 4.20117 5.89648H17.3945C18.1074 5.89648 18.4883 6.23828 18.4883 7V15.6133C18.4883 16.375 18.1074 16.7168 17.3945 16.7168H4.20117ZM8.9668 9.02148H9.54297C9.89453 9.02148 10.0215 8.91406 10.0215 8.55273V7.97656C10.0215 7.625 9.89453 7.50781 9.54297 7.50781H8.9668C8.60547 7.50781 8.47852 7.625 8.47852 7.97656V8.55273C8.47852 8.91406 8.60547 9.02148 8.9668 9.02148ZM12.0527 9.02148H12.6289C12.9902 9.02148 13.1172 8.91406 13.1172 8.55273V7.97656C13.1172 7.625 12.9902 7.50781 12.6289 7.50781H12.0527C11.7012 7.50781 11.5742 7.625 11.5742 7.97656V8.55273C11.5742 8.91406 11.7012 9.02148 12.0527 9.02148ZM15.1484 9.02148H15.7246C16.0762 9.02148 16.2031 8.91406 16.2031 8.55273V7.97656C16.2031 7.625 16.0762 7.50781 15.7246 7.50781H15.1484C14.7871 7.50781 14.6602 7.625 14.6602 7.97656V8.55273C14.6602 8.91406 14.7871 9.02148 15.1484 9.02148ZM5.88086 12.0684H6.44727C6.80859 12.0684 6.93555 11.9512 6.93555 11.5898V11.0234C6.93555 10.6621 6.80859 10.5449 6.44727 10.5449H5.88086C5.51953 10.5449 5.39258 10.6621 5.39258 11.0234V11.5898C5.39258 11.9512 5.51953 12.0684 5.88086 12.0684ZM8.9668 12.0684H9.54297C9.89453 12.0684 10.0215 11.9512 10.0215 11.5898V11.0234C10.0215 10.6621 9.89453 10.5449 9.54297 10.5449H8.9668C8.60547 10.5449 8.47852 10.6621 8.47852 11.0234V11.5898C8.47852 11.9512 8.60547 12.0684 8.9668 12.0684ZM12.0527 12.0684H12.6289C12.9902 12.0684 13.1172 11.9512 13.1172 11.5898V11.0234C13.1172 10.6621 12.9902 10.5449 12.6289 10.5449H12.0527C11.7012 10.5449 11.5742 10.6621 11.5742 11.0234V11.5898C11.5742 11.9512 11.7012 12.0684 12.0527 12.0684ZM15.1484 12.0684H15.7246C16.0762 12.0684 16.2031 11.9512 16.2031 11.5898V11.0234C16.2031 10.6621 16.0762 10.5449 15.7246 10.5449H15.1484C14.7871 10.5449 14.6602 10.6621 14.6602 11.0234V11.5898C14.6602 11.9512 14.7871 12.0684 15.1484 12.0684ZM5.88086 15.1055H6.44727C6.80859 15.1055 6.93555 14.9883 6.93555 14.6367V14.0605C6.93555 13.6992 6.80859 13.5918 6.44727 13.5918H5.88086C5.51953 13.5918 5.39258 13.6992 5.39258 14.0605V14.6367C5.39258 14.9883 5.51953 15.1055 5.88086 15.1055ZM8.9668 15.1055H9.54297C9.89453 15.1055 10.0215 14.9883 10.0215 14.6367V14.0605C10.0215 13.6992 9.89453 13.5918 9.54297 13.5918H8.9668C8.60547 13.5918 8.47852 13.6992 8.47852 14.0605V14.6367C8.47852 14.9883 8.60547 15.1055 8.9668 15.1055ZM12.0527 15.1055H12.6289C12.9902 15.1055 13.1172 14.9883 13.1172 14.6367V14.0605C13.1172 13.6992 12.9902 13.5918 12.6289 13.5918H12.0527C11.7012 13.5918 11.5742 13.6992 11.5742 14.0605V14.6367C11.5742 14.9883 11.7012 15.1055 12.0527 15.1055Z"
          fill={token('colors.ink.text-primary')}
        />
      </svg>
    </Box>
    <Box
      position="absolute"
      minWidth="40px"
      minHeight="40px"
      border={`1px solid`}
      borderColor="ink.border-default"
      backgroundColor="ink.background-primary"
      borderRadius="50%"
    />
  </Flex>
);
