// admin-notification.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { container, footer, h1, hr, main, section, textContent, textLabel } from "./contact-email.styles";

interface AdminEmailProps {
  name: string;
  email: string;
  message: string;
}

export const AdminNotification = ({ name, email, message }: AdminEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Section style={section}>
          <Text style={textLabel}>Name:</Text>
          <Text style={textContent}>{name}</Text>

          <Text style={textLabel}>Email:</Text>
          <Text style={textContent}>{email}</Text>

          <Text style={textLabel}>Message:</Text>
          <Text style={textContent}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated notification from your contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);