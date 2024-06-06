import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Event Management Platform
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Organize and manage your events effortlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.jpg" alt="Event Management" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaPlusCircle />}>
          Create New Event
        </Button>
        <Button colorScheme="blue" size="lg" leftIcon={<FaCalendarAlt />}>
          View Upcoming Events
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;