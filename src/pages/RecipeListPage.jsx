import { useState } from "react";
import {
  Box,
  Input,
  Heading,
  SimpleGrid,
  Center,
  Text,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const recipes = data.hits;

  const filteredRecipes = recipes.filter((item) => {
    const { label, healthLabels } = item.recipe;

    return (
      label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      healthLabels.some((hl) =>
        hl.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <Box px={20} pb={20} minH="100vh" bgColor="#F0BB78" align="center">
      <Heading py={5} color="#543A14">
        Small recipe checker
      </Heading>

      {/* search for recipes */}
      <Input
        placeholder="Search recipes"
        value={searchQuery}
        variant="outline"
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={5}
        size="lg"
        borderColor="white"
        bgColor="white"
        width="300px"
      />

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {filteredRecipes.map((item) => {
          return (
            <RecipeCard
              key={item.recipe.label}
              item={item.recipe}
              clickFn={clickFn}
            />
          );
        })}
      </SimpleGrid>

      {filteredRecipes.length === 0 && (
        <Center mt={10}>
          <Text>No recipes found matching your search.</Text>
        </Center>
      )}
    </Box>
  );
};
