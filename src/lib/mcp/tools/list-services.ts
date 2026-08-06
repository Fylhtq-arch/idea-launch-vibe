import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../portfolio";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the services offered (MVP builds, AI automation, UI/UX vibecoding, integrations) with the key outcome of each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services) }],
    structuredContent: { services },
  }),
});
