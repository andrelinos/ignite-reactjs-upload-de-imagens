import { SimpleGrid, Text, Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentImageUrl, setCurrentImageUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }

  return (
    <>
      {cards.length > 0 ? (
        <SimpleGrid columns={[1, 2, 2, 3]} spacing="40px">
          {cards.map(card => (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex justify="center">
          <Text fontSize={20} color="yellow.100">
            Adicione uma imagem...
          </Text>
        </Flex>
      )}

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={currentImageUrl}
        onClose={onClose}
      />
    </>
  );
}
