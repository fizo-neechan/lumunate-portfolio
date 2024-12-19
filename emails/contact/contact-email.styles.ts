export const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

export const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

export const section = {
  padding: "0 48px",
};

export const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.4",
  margin: "48px 0",
  textAlign: "center" as const,
};

export const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

export const textLabel = {
  ...text,
  fontWeight: "600",
  marginBottom: "4px",
};

export const textContent = {
  ...text,
  marginBottom: "24px",
};

export const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

export const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};
