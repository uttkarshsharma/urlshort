export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/shorten") {
      const body = await request.json();
      const longUrl = body.url;
      const slug = Math.random().toString(36).substring(2, 8);
      await env.LINKS.put(slug, longUrl);
      return new Response(JSON.stringify({ shortened: url.origin + "/" + slug }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const slug = url.pathname.slice(1);
    const destination = await env.LINKS.get(slug);
    if (destination) {
      return Response.redirect(destination, 302);
    }

    return new Response("Not found", { status: 404, headers: corsHeaders });
  }
};
