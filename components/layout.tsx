import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import { Box, Container } from '@chakra-ui/react'

interface LayoutProps {
  children?: ReactNode
  title?: string
  description?: string
  image?: string
}

const Layout = ({
  children,
  title = 'Eventmaker',
  description = 'Event Suppliers Marketplace',
  image,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
        <meta
          property="og:description"
          content={description}
          key="description"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={image ?? '/images/square-logo.png'}
        />
      </Head>
      <Header />
      <Box mt={16} mb={16}>
        <Container maxW="container.xl">{children}</Container>
      </Box>
    </>
  )
}

export default Layout
