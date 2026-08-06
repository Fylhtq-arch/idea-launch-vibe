import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../portfolio";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List the featured portfolio projects with their descriptions and technology stacks.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects) }],
    structuredContent: { projects },
  }),
});
