import React, { ReactElement } from 'react'
import { Box, Avatar } from '@chakra-ui/react'
import Image from 'next/image'

interface UserCircleProps {
  name: string
  imgUrl: string | undefined
  avatarSize?: 'xs' | 'sm' | 'md' | 'lg' | '2xl'
}

const UserCircle = ({
  name,
  imgUrl,
  avatarSize,
}: UserCircleProps): ReactElement => {
  return (
    <Box>
      {imgUrl ? (
        <Box borderRadius="full" overflow="hidden" h={30}>
          <Image
            alt={name}
            src={imgUrl}
            height={30}
            width={30}
            objectFit="cover"
          />
        </Box>
      ) : (
        <Avatar size={avatarSize ?? 'sm'} name={name} />
      )}
    </Box>
  )
}

export default UserCircle
