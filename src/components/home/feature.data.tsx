import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Fasil y Accessible',
    description: 'Realizar tu solicitud con "FAPCLAS" R. L. te daras cuenta que es lo mas accesible y fasil posible',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Intereses Bajos',
    description: 'Nosotros te ofrecemos los intereses mas bajos, a sola firma sin mucho tramite',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Rapidez y Eficiencia',
    description: 'Las solicitudes son desembolsadas en un maximo de 72 horas, brindando eficiencia',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Soporte en linea',
    description: 'Te ofrecemos la plataforma virtual, para que puedas realizar tus pagos y consultas en linea',
    icon: <ContactSupportIcon />,
  },
]
