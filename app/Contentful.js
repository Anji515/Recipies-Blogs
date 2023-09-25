import { createClient } from "contentful";
const Client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: "xFc7VZCJl0DmbH33twQ0PMlL-1MFQgcl6KP9ynIU-gs",
});

export default Client