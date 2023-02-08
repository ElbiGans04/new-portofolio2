export default async function revalidateApi(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.query.kind) {
    return res.status(401).json({ message: "Invalid kind" });
  }

  try {
    let path = null;

    switch (req.query.kind) {
      case "index": {
        path = "/";
        break;
      }
      case "blogs": {
        path = "/blogs";
        break;
      }
      case "blog": {
        if (!req.query.id) {
          return res.status(401).json({ message: "Invalid id" });
        }

        path = `/blogs/${req.query.id}`;
        break;
      }
    }

    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    if (!path) return res.status(500).json({ revalidated: true });
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err)
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ revalidated: false });
  }
}
