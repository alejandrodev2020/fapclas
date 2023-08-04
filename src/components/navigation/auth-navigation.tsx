import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Ingresar
      </StyledButton>
      <StyledButton disableHoverEffect={true}>Registrarse</StyledButton>
    </Box>
  )
}

export default AuthNavigation
