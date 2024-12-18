import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import * as React from "react";
import { container, footer, h1, hr, main, section, text } from "./contact-email.styles";

export interface UserEmailProps {
  name: string;
}

export const UserAcknowledgment = ({ name }: UserEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for your message, {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Your Message</Heading>
        <Section style={section}>
          <Text style={text}>Dear {name},</Text>
          <Text style={text}>
            Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
          </Text>
          <Text style={text}>We appreciate your interest and will review your message carefully.</Text>
          <Text style={text}>
            Best regards,
            <br />
            [Your Company Name]
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This is an automated confirmation of your message submission.</Text>
      </Container>
    </Body>
  </Html>
);
