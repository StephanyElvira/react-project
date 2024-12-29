import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  Divider,
  SimpleGrid,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  const {
    label,
    image,
    mealType = [],
    totalTime,
    dietLabels = [],
    healthLabels = [],
    cautions = [],
    ingredientLines = [],
    yield: servings,
    totalNutrients = {},
  } = recipe;

  const {
    ENERC_KCAL = { quantity: 0 },
    PROCNT = { quantity: 0 },
    FAT = { quantity: 0 },
    CHOCDF = { quantity: 0 },
    CHOLE = { quantity: 0 },
    NA = { quantity: 0 },
  } = totalNutrients;

  return (
    <Box bg="#F0BB78" minH="100vh" p={5} display="flex" justifyContent="center">
      <Card
        maxW="800px"
        variant="elevated"
        borderRadius="xl"
        overflow="hidden"
        bg="#FFF0DC"
      >
        <Image
          h="300px"
          w="100%"
          objectFit="cover"
          src={image}
          alt={label}
          borderBottom="1px solid #e2e8f0"
        />
        <CardBody fontSize="sm">
          <Heading mb={5} textAlign="center">
            {label}
          </Heading>

          <SimpleGrid columns={[1, 2]} spacing={5}>
            <Box>
              {mealType.length > 0 && (
                <Text>
                  <Badge mb={3} colorScheme="orange">
                    {mealType.join(", ")}
                  </Badge>
                </Text>
              )}

              <Text>
                Total Cooking Time:
                <strong> {totalTime > 0 ? `${totalTime} mins` : "N/A"}</strong>
              </Text>

              <Text>
                Servings: <strong>{servings}</strong>
              </Text>

              <Divider borderColor="#543A14" my={5} />

              <Heading size="xs" mb={3}>
                Ingredients
              </Heading>
              <List fontSize="xs" spacing={2} styleType="none">
                {ingredientLines.map((ingredient, index) => (
                  <ListItem key={index}> {ingredient}</ListItem>
                ))}
              </List>
            </Box>

            <Box>
              {healthLabels.length > 0 && (
                <Text>
                  <Heading size="xs" mb={1}>
                    Healthlabels:
                  </Heading>
                  <Stack direction="row" wrap="wrap" spacing={2} mb={5}>
                    {healthLabels.map((hl, index) => (
                      <Badge key={index} colorScheme="green">
                        {hl}
                      </Badge>
                    ))}
                  </Stack>
                </Text>
              )}

              {dietLabels.length > 0 && (
                <Text>
                  <Heading size="xs" mb={1}>
                    Dietlabels:
                  </Heading>
                  <Stack direction="row" wrap="wrap" spacing={2} mb={5}>
                    {dietLabels.map((dl, index) => (
                      <Badge key={index} colorScheme="yellow">
                        {dl}
                      </Badge>
                    ))}
                  </Stack>
                </Text>
              )}

              {cautions.length > 0 && (
                <Text>
                  <Heading size="xs" mb={1}>
                    Caution:
                  </Heading>
                  <Stack direction="row" wrap="wrap" spacing={2} mb={5}>
                    {cautions.map((ct, index) => (
                      <Badge key={index} colorScheme="red">
                        {ct}
                      </Badge>
                    ))}
                  </Stack>
                </Text>
              )}
              <Divider borderColor="#543A14" my={5} />
              <Heading size="sm" mb={3}>
                Total Nutrients
              </Heading>
              <SimpleGrid
                columns={[2, 3, 4]}
                spacing={0}
                bgColor="#FFF8E6"
                p={3}
              >
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(ENERC_KCAL.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Energy (kcal)
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(PROCNT.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Protein (g)
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(FAT.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Fat (g)
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(CHOCDF.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Carbs (g)
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(CHOLE.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Cholesterol (mg)
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontSize="sm" fontWeight="bold">
                    {Math.round(NA.quantity)}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Sodium (mg)
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </CardBody>
        <CardFooter justify="center">
          <Button colorScheme="orange" onClick={onBack}>
            Back to Recipes
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};
