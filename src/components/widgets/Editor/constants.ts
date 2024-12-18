export const purifyConfig = {
  ALLOWED_TAGS: [
    "p",
    "h1",
    "h2",
    "h3",
    "strong",
    "em",
    "ul",
    "ol",
    "li",
    "blockquote",
    "a",
    "br",
  ],
  ALLOWED_ATTR: ["href", "target"],
  ALLOWED_URI_REGEXP:
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  FORBID_TAGS: ["style", "script"],
  FORBID_ATTR: ["style", "onerror", "onclick"],
};
