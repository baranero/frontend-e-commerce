import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("dddf65e5-ab60-4519-9001-6f8742ff0cf8");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />

      </div>
    </Container>
  )
};

export default HomePage;