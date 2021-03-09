import DetailFeature from "../DetailFeature";
import Layout from "../Layout";

const Details = () => (
  <div className="my-16">
    <Layout>
      <DetailFeature />
      <DetailFeature right />
      <DetailFeature />
    </Layout>
  </div>
);

export default Details;
