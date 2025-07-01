import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Import icons for UI elements
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    // Hook to handle dark/light mode toggle 
	const { colorMode, toggleColorMode } = useColorMode();

	return (
        // Container component to maintain consistent max width and padding
		<Container maxW={"1140px"} px={4}>
            {/* Flex container for navbar layout */}
			<Flex
				h={16} // Height of 64px (16 * 4)
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>

            {/* Logo and Title -- Gradient effect*/}
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
                    {/* Link to home page */}
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

                {/* Right side buttons container */}
				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>

                    {/* Theme toggle button */}
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;