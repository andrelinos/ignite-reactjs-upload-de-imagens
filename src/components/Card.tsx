import {
  Box,
  Heading,
  Text,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
}

interface CardProps {
  data: Card;
  viewImage: (url: string) => void;
}

export function Card({ data, viewImage }: CardProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      key={data.ts}
      borderRadius="md"
      bgColor="gray.800"
      border="1px solid"
      borderColor="transparent"
      _hover={{ borderColor: 'orange.500' }}
    >
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={data.url}
          alt={data.title}
          objectFit="cover"
          w="full"
          h={48}
          borderTopRadius="md"
          onClick={() => viewImage(data.url)}
          onLoad={() => setIsLoading(false)}
          cursor="pointer"
        />
      </Skeleton>

      <Box pt={5} pb={4} px={6}>
        {isLoading ? (
          <>
            <SkeletonText fontSize="2xl" mt={2} noOfLines={1} />
            <SkeletonText fontSize="md" mt={7} noOfLines={1} />
          </>
        ) : (
          <>
            <Heading fontSize="2xl">{data.title}</Heading>
            <Text
              mt={2.5}
              fontSize="md"
              _after={{
                content: '" ..."',
              }}
            >
              {data.description}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
}
