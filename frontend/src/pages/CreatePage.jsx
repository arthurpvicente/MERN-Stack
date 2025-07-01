import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    // Initialize state for new product with empty values
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    // Hook for displaying toast notifications
    const toast = useToast();

    // Get createProduct function from custom product store
    const { createProduct } = useProductStore();

    // Handle form submission and product creation
    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        
        // Show appropriate toast based on operation result
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
            });
        }
        // Reset form after submission attempt
        setNewProduct({ name: "", price: "", image: "" });
    };

    return (
        // Container with responsive max width
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                {/* Page title */}
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>

                {/* Form container with theme-aware background */}
                <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        {/* Product input fields */}
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />

                        {/* Submit button */}
                        <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;