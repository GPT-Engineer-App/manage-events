import React from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const Events = ({ events }) => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Upcoming Events</Heading>
        {events.length === 0 ? (
          <Text>No events available. Please create one.</Text>
        ) : (
          events.map((event, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{event.eventName}</Heading>
              <Text mt={4}><strong>Date and Time:</strong> {event.dateTime}</Text>
              <Text mt={4}><strong>Location:</strong> {event.location}</Text>
              <Text mt={4}><strong>Description:</strong> {event.description}</Text>
              <Text mt={4}><strong>Organizer:</strong> {event.organizerName}</Text>
              <Text mt={4}><strong>Contact:</strong> {event.contactInfo}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;