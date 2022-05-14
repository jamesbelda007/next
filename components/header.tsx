import React, { ReactElement, useCallback } from 'react'
import {
  Box,
  Icon,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from '@chakra-ui/react'
import { FiHome, FiSearch, FiBell } from 'react-icons/fi'
import UserCircle from '@components/userAvatar'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@services/firebase'
import { signOut } from 'firebase/auth'

const AvatarMenu = ({ onLogout }: { onLogout: () => void }): ReactElement => {
  return (
    <Menu>
      <MenuButton as={Box} cursor="pointer">
        <UserCircle name="First Last" imgUrl={undefined} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

interface HeaderProps {
  hasSearch?: boolean
  hasAuth?: boolean
}

const Header = ({ hasSearch, hasAuth }: HeaderProps): ReactElement => {
  const [user] = useAuthState(auth)

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [auth])

  return (
    <Box
      bg="white"
      w="100%"
      py={4}
      position="fixed"
      zIndex={999}
      top={0}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Text flex={1} fontWeight={600} color="primary.500">
            App Name
          </Text>
          <Flex alignItems="center" gap={6}>
            <Icon h={6} w={6} as={FiHome} />
            {hasSearch && <Icon h={6} w={6} as={FiSearch} />}
            {hasAuth && (
              <>
                {user ? (
                  <>
                    <Icon h={6} w={6} as={FiBell} />
                    <AvatarMenu onLogout={handleLogout} />
                  </>
                ) : (
                  <Link href="/login">
                    <a>
                      <Text color="primary.500" fontWeight={500}>
                        Login or Signup
                      </Text>
                    </a>
                  </Link>
                )}
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
