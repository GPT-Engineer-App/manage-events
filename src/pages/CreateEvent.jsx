import React, { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = ({ addEvent }) => {
  const [eventName, setEventName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      dateTime,
      location,
      description,
      organizerName,
      contactInfo,
    };
    addEvent(newEvent);
    navigate("/events");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Create New Event</Heading>
        <FormControl id="event-name" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </FormControl>
        <FormControl id="date-time" isRequired>
          <FormLabel>Date and Time</FormLabel>
          <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="organizer-name" isRequired>
          <FormLabel>Organizer Name</FormLabel>
          <Input value={organizerName} onChange={(e) => setOrganizerName(e.target.value)} />
        </FormControl>
        <FormControl id="contact-info" isRequired>
          <FormLabel>Contact Information</FormLabel>
          <Input value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;