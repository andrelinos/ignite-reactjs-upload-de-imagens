import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <>
      <Box bgColor="gray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={[5, 10, 10, 20]}
          py={6}
        >
          <Image src="logo.svg" h={10} />
          {isWideVersion ? (
            <Button onClick={() => onOpen()}>Adicionar imagem</Button>
          ) : (
            <>
              <Button
                display={!isWideVersion && 'none'}
                onClick={() => onOpen()}
              >
                Adicionar imagem
              </Button>
              <Button overflow="hidden" w={12} h={12} onClick={() => onOpen()}>
                <AddIcon zIndex="9" w={6} h={6} />
              </Button>
            </>
          )}
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
