import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import listServicesTool from "./tools/list-services";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "ai-business-booster-hero",
  title: "AI Business Booster Hero",
  version: "0.1.0",
  instructions:
    "Public tools for a vibecoding specialist's portfolio site. Use `list_projects` for featured projects, `list_services` for offered services, and `get_contact` for contact channels.",
  tools: [listProjectsTool, listServicesTool, getContactTool],
});
