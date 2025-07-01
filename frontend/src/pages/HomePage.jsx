// HOME PAGE COMPONENT
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    // Get products and fetch function from global store
    const { fetchProducts, products } = useProductStore();

    // Fetch products when component mounts
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        // Main container with extra large width and vertical padding
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                {/* Page title with gradient effect */}
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Products 🚀
                </Text>

                {/* Responsive grid layout for products */}
                <SimpleGrid
                    columns={{
                        base: 1,  // 1 column on mobile
                        md: 2,    // 2 columns on medium screens
                        lg: 3,    // 3 columns on large screens
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {/* Map through products and render ProductCard components */}
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>

                {/* Show message when no products exist */}
                {products.length === 0 && (
                    <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                        No products found 😢{" "}
                        <Link to={"/create"}>
                            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};

export default HomePage;