import {
  Card,
  CardBody,
  Image,
  Badge,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";

export const RecipeCard = ({ item, clickFn }) => {
  const {
    label,
    image,
    mealType = [],
    healthLabels = [],
    dietLabels = [],
    dishType = [],
    cautions = [],
  } = item;

  return (
    <Card
      maxW="300px"
      overflow="hidden"
      color="#543A14"
      bg="#FFF0DC"
      variant="elevated"
      borderRadius="xl"
      cursor="pointer"
      onClick={() => clickFn(item)}
    >
      <Image h="200px" w="sm" objectFit="cover" src={image} alt={label} />
      <CardBody>
        <Stack spacing={1} align="center">
          {mealType.length > 0 && (
            <Text>
              <Badge colorScheme="orange">{mealType}</Badge>
            </Text>
          )}
          <Text align="center" fontSize="lg" fontWeight="bold">
            {label}
          </Text>
          <Divider borderColor="#543A14" borderStyle="dashed" my={2} />
          {dishType.length > 0 && <Text> {dishType}</Text>}
          <Text>
            {healthLabels.includes("Vegan") && (
              <Badge colorScheme="purple">Vegan</Badge>
            )}
          </Text>

          <Text>
            {healthLabels.includes("Vegetarian") && (
              <Badge colorScheme="purple">Vegetarian</Badge>
            )}
          </Text>
          {dietLabels.length > 0 && (
            <Text>
              <Badge colorScheme="green">{dietLabels.join(", ")}</Badge>
            </Text>
          )}

          {cautions.length > 0 && (
            <Text>
              <Badge colorScheme="red">{cautions.join(", ")}</Badge>
            </Text>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
