import ReactLink from 'next/link';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300px', '500px', '900px']}
        maxH={['350px', '450px', '600px']}
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            maxW={['300px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
            borderTopRadius="md"
          />
        </ModalBody>
        <ModalFooter bg="gray.800" h="2rem" py="20px" borderBottomRadius="5px">
          <Link
            color="yellow.200"
            _hover={{
              textDecor: 'none',
              color: 'orange',
            }}
            href={imgUrl}
            isExternal
            fontSize="1rem"
            mr="auto"
            alt="Abrir imagem em nova aba"
          >
            Abrir original
            <ExternalLinkIcon mx="5px" />
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
