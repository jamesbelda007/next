import React, { ReactElement, useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { AspectRatio, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
}

interface ThumbnailProps {
  alt: string
  imgUrl: string
  action: (i: number) => void
  index: number
}

const Thumbnail = ({
  alt,
  imgUrl,
  action,
  index,
}: ThumbnailProps): ReactElement => {
  const handleClick = useCallback(() => {
    action(index)
  }, [])
  return (
    <AspectRatio
      position="relative"
      ratio={16 / 9}
      bg="gray.100"
      mb={2}
      onClick={handleClick}
      cursor="pointer"
    >
      <Image alt={alt} src={imgUrl} layout="fill" objectFit="cover" />
    </AspectRatio>
  )
}

const ImageGallery = ({ images }: ImageGalleryProps): ReactElement => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 999,
          }}
          closeOnClickOutside={true}
        />
      )}
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {images.map((d, i) => (
          <GridItem w="100%" key={i.toString()}>
            <Thumbnail
              imgUrl={d}
              alt={`${i}-img`}
              action={openImageViewer}
              index={i}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default ImageGallery
