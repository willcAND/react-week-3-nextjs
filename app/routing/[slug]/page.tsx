export default function RoutingSlug({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>/routing/{params.slug}</h1>
    </>
  );
}
