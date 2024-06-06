import React, { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookTickets = ({ addBooking }) => {
  const location = useLocation();
  const { event } = location.state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [confirmation, setConfirmation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      eventName: event.eventName,
      name,
      email,
      numTickets,
    };
    addBooking(booking);
    setConfirmation("Booking successful!");
    setTimeout(() => {
      navigate("/events");
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Book Tickets for {event.eventName}</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="num-tickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <Input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min={1} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Book Tickets</Button>
        {confirmation && <Text color="green.500">{confirmation}</Text>}
      </VStack>
    </Container>
  );
};

export default BookTickets;