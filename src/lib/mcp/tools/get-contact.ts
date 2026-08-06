import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../portfolio";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description: "Get the public contact channels (Telegram and email) for getting in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact) }],
    structuredContent: { contact },
  }),
});
